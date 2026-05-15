import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { type MotionValue, motion, useMotionValue, useReducedMotion } from "framer-motion";
import * as THREE from "three";

import orbitConfig from "@/config/pixova-orbit-keyframes.json";

const MAT_PURPLE = new THREE.Color("#9055e8");
const MAT_GLOW = new THREE.Color("#e8d4ff");

const MOTION_RESUME = 0.42;
const PAGE_SCROLL_ONSET = 0.09;
/** Seconds to ease scroll-linked depth/travel into rotation (stops one-frame w / g jumps from snapping the rig). */
const SCROLL_ROTATION_TAU = 0.16;

type ResponsiveNum = { compact: number; desktop: number };
type RotAxis = number | ResponsiveNum;
type Limits = typeof orbitConfig.defaults.worldXLimits;
type Pose = (typeof orbitConfig.keyframes)[number]["pose"];

type FlatPose = {
  worldX: number;
  worldY: number;
  worldZ: number;
  scale: number;
  /** Euler rig rotation from keyframes (radians), before procedural add-ons. */
  rotX: number;
  rotY: number;
  rotZ: number;
  /** 0..1 canvas wrapper opacity (keyframe-driven). */
  overlayOpacity: number;
  /** Mid-cross squash: multiply scale (1 = no effect). */
  crossScaleMul: number;
  /** Extra rig Z roll during horizontal crosses (radians). */
  crossRigZ: number;
};

function rsp(pair: ResponsiveNum, compact: boolean): number {
  return compact ? pair.compact : pair.desktop;
}

function rspAxis(v: RotAxis, compact: boolean): number {
  return typeof v === "number" ? v : rsp(v, compact);
}

function flattenRotation(p: Pose, compact: boolean): { rotX: number; rotY: number; rotZ: number } {
  const r = (p as { rotation?: { x?: RotAxis; y?: RotAxis; z?: RotAxis } }).rotation;
  if (!r) return { rotX: 0, rotY: 0, rotZ: 0 };
  return {
    rotX: rspAxis(r.x ?? 0, compact),
    rotY: rspAxis(r.y ?? 0, compact),
    rotZ: rspAxis(r.z ?? 0, compact),
  };
}

function clamp01(v: number) {
  return THREE.MathUtils.clamp(v, 0, 1);
}

function readOverlayOpacity(p: Pose): number {
  const raw = (p as { overlayOpacity?: number }).overlayOpacity;
  return typeof raw === "number" ? clamp01(raw) : 1;
}

function smootherstep(edge0: number, edge1: number, x: number) {
  const span = edge1 - edge0;
  if (Math.abs(span) < 1e-8) return x >= edge1 ? 1 : 0;
  const t = THREE.MathUtils.clamp((x - edge0) / span, 0, 1);
  return t * t * t * (t * (t * 6 - 15) + 10);
}

/** Slow, flowy ease for left↔right row transitions (soft start/end). */
function easeInOutSine01(t: number) {
  const u = clamp01(t);
  return 0.5 * (1 - Math.cos(Math.PI * u));
}

function resolveXSide(side: string, limits: Limits, compact: boolean): number {
  if (side === "max") return rsp(limits.max, compact);
  if (side === "min") return rsp(limits.min, compact);
  const v = Number(side);
  return Number.isFinite(v) ? v : rsp(limits.max, compact);
}

function flattenPose(p: Pose, limits: Limits, compact: boolean): FlatPose {
  const e = flattenRotation(p, compact);
  return {
    worldX: resolveXSide(String(p.worldX_side), limits, compact),
    worldY: rsp(p.worldY, compact),
    worldZ: rsp(p.worldZ, compact),
    scale: rsp(p.scale, compact),
    rotX: e.rotX,
    rotY: e.rotY,
    rotZ: e.rotZ,
    overlayOpacity: readOverlayOpacity(p),
    crossScaleMul: 1,
    crossRigZ: 0,
  };
}

function blendFlatPose(a: FlatPose, b: FlatPose, u: number): FlatPose {
  const L = THREE.MathUtils.lerp;
  return {
    worldX: L(a.worldX, b.worldX, u),
    worldY: L(a.worldY, b.worldY, u),
    worldZ: L(a.worldZ, b.worldZ, u),
    scale: L(a.scale, b.scale, u),
    rotX: L(a.rotX, b.rotX, u),
    rotY: L(a.rotY, b.rotY, u),
    rotZ: L(a.rotZ, b.rotZ, u),
    overlayOpacity: L(a.overlayOpacity, b.overlayOpacity, u),
    crossScaleMul: L(a.crossScaleMul, b.crossScaleMul, u),
    crossRigZ: L(a.crossRigZ, b.crossRigZ, u),
  };
}

function sampleWorkKeyframePose(wRaw: number, compact: boolean): FlatPose {
  const w = clamp01(wRaw);
  const kf = orbitConfig.keyframes;
  const limits = orbitConfig.defaults.worldXLimits;
  const cross = orbitConfig.defaults.animation.crossSlide;
  const n = kf.length;
  if (n === 0) throw new Error("pixova-orbit-keyframes.json: keyframes array is empty");

  const holdEnd = kf[0].untilWorkNormalized;
  if (w <= holdEnd) {
    return flattenPose(kf[0].pose, limits, compact);
  }

  for (let i = 1; i < n; i++) {
    const uPrev = kf[i - 1].untilWorkNormalized;
    const uCurr = kf[i].untilWorkNormalized;
    if (w <= uCurr) {
      const span = uCurr - uPrev;
      const tLinear = span > 1e-10 ? clamp01((w - uPrev) / span) : 1;
      const tFlow = easeInOutSine01(tLinear);
      const a = flattenPose(kf[i - 1].pose, limits, compact);
      const b = flattenPose(kf[i].pose, limits, compact);
      const blended = blendFlatPose(a, b, tFlow);
      if (Math.abs(a.worldX - b.worldX) >= cross.minWorldXDelta) {
        const arc = Math.sin(Math.PI * tLinear);
        blended.worldY += arc * rsp(cross.arcY, compact);
        blended.worldZ += arc * rsp(cross.arcZ, compact);
        const dip = arc * arc;
        blended.crossScaleMul = 1 - rsp(cross.scaleDip, compact) * dip;
        blended.crossRigZ = arc * rsp(cross.rigZCrossAmp, compact);
      } else {
        blended.crossScaleMul = 1;
        blended.crossRigZ = 0;
      }
      return blended;
    }
  }

  return flattenPose(kf[n - 1].pose, limits, compact);
}

function AdaptiveCamera({ compact }: { compact: boolean }) {
  const cam = useThree((s) => s.camera);
  const C = orbitConfig.defaults.camera;

  useEffect(() => {
    const perspective = cam as THREE.PerspectiveCamera;
    perspective.fov = rsp(C.fov, compact);
    perspective.position.set(C.position.x, rsp(C.position.y, compact), rsp(C.position.z, compact));
    perspective.updateProjectionMatrix();
  }, [cam, compact]);

  return null;
}

function OrbitalLattice({
  scrollYProgress,
  workSectionProgress,
  orbitMotionMute,
  canvasOverlayOpacity,
  projectCount,
  viewportCompact,
}: {
  scrollYProgress: MotionValue<number>;
  workSectionProgress: MotionValue<number>;
  orbitMotionMute: MotionValue<number>;
  canvasOverlayOpacity: MotionValue<number>;
  projectCount: number;
  viewportCompact: boolean;
}) {
  const rigRoot = useRef<THREE.Group>(null);
  const cluster = useRef<THREE.Group>(null);
  const outerRing = useRef<THREE.Group>(null);
  const knot = useRef<THREE.Group>(null);
  const freezePos = useRef(new THREE.Vector3());
  const freezeScale = useRef(1);
  const wDepthSmooth = useRef(0);
  const gScrollSmooth = useRef(0);

  const D = orbitConfig.defaults;
  const A = D.animation;
  const R = A.rig;
  const C = A.cluster;
  const O = A.outerRing;
  const K = A.knot;
  const minNp = A.minProjectsForClusterWave;
  const projN = Math.max(projectCount, minNp);

  useFrame(({ clock }) => {
    const dt = Math.min(clock.getDelta(), 0.05);
    const gRaw = clamp01(scrollYProgress.get());
    const w = clamp01(workSectionProgress.get());
    const mute = clamp01(orbitMotionMute.get());
    const motionCoef = smootherstep(0, MOTION_RESUME, mute);
    const t = clock.getElapsedTime();
    const compact = viewportCompact;

    const [db0, db1] = A.depthBlend_edges;
    const depthBlend = smootherstep(db0, db1, w);
    const wDepthTarget = depthBlend * mute;

    const k = 1 - Math.exp(-dt / SCROLL_ROTATION_TAU);
    gScrollSmooth.current += (gRaw - gScrollSmooth.current) * k;
    wDepthSmooth.current += (wDepthTarget - wDepthSmooth.current) * k;

    const pageDrive = smootherstep(0, PAGE_SCROLL_ONSET, gScrollSmooth.current);
    const travel = smootherstep(0, 1, pageDrive);
    const wDepth = wDepthSmooth.current;

    const flat = sampleWorkKeyframePose(w, compact);
    canvasOverlayOpacity.set(flat.overlayOpacity);
    const xl = D.worldXLimits;

    const dynX = THREE.MathUtils.clamp(flat.worldX, rsp(xl.min, compact), rsp(xl.max, compact));
    const dynY = flat.worldY;
    const dynZ = flat.worldZ;
    const dynScalar = flat.scale * flat.crossScaleMul;

    if (motionCoef > 0.85) {
      freezePos.current.set(dynX, dynY, dynZ);
      freezeScale.current = dynScalar;
    }

    const worldX = THREE.MathUtils.lerp(freezePos.current.x, dynX, motionCoef);
    const worldY = THREE.MathUtils.lerp(freezePos.current.y, dynY, motionCoef);
    const worldZ = THREE.MathUtils.lerp(freezePos.current.z, dynZ, motionCoef);
    const scalar = THREE.MathUtils.lerp(freezeScale.current, dynScalar, motionCoef);

    if (rigRoot.current) {
      rigRoot.current.position.set(worldX, worldY, worldZ);
      rigRoot.current.scale.setScalar(scalar);
      rigRoot.current.rotation.x = motionCoef * flat.rotX;
      rigRoot.current.rotation.y = motionCoef * flat.rotY;
      rigRoot.current.rotation.z =
        motionCoef *
        (flat.rotZ +
          Math.sin(t * R.zTimeFreq + travel * Math.PI * R.zTravelPiMul) * rsp(R.zSinAmp, compact) +
          flat.crossRigZ);
    }

    if (cluster.current) {
      const yaw =
        t * rsp(C.yawPerSec, compact) +
        Math.sin(wDepth * C.yDepthRadScale * projN) * C.yDepthSinAmp;
      cluster.current.rotation.y = motionCoef * yaw;
      cluster.current.rotation.x =
        motionCoef *
        (wDepth * Math.PI * rsp(C.xPiSlope, compact) + Math.sin(t * C.xSinFq) * rsp(C.xSinAmp, compact));
      cluster.current.rotation.z =
        motionCoef * (Math.sin(t * C.zSinFq + pageDrive * C.zPagePhase) * rsp(C.zSinAmp, compact));
      cluster.current.position.y =
        motionCoef *
        (Math.sin((wDepth + travel * C.bobTravelMix) * Math.PI * 2) * rsp(C.bobAmp, compact));
    }

    if (outerRing.current) {
      outerRing.current.rotation.z =
        motionCoef * (-t * O.zPerSec + travel * Math.PI * O.zTravelPi);
      outerRing.current.rotation.y =
        motionCoef *
        (Math.sin(t * O.ySinFq) * rsp(O.ySinAmp, compact) +
          wDepth * (compact ? O.ySlopeCompact : O.ySlopeDesktop) +
          wDepth * Math.PI * O.yWPiFrac);
      outerRing.current.rotation.x =
        motionCoef * (Math.sin(wDepth * Math.PI * O.xWPiM + t * O.xSinFq) * O.xSinAmp);
    }

    if (knot.current) {
      knot.current.rotation.z =
        motionCoef *
        Math.sin((wDepth + K.zWPhase) * Math.PI * K.zSinPiMul + t * K.zSinFq) * rsp(K.zSinAmp, compact);
      knot.current.rotation.y =
        motionCoef *
        Math.cos((wDepth + K.yWPhase) * Math.PI * 2 + t * K.yCosFq) * rsp(K.yCosAmp, compact);
    }
  });

  return (
    <>
      <group ref={rigRoot}>
        <group ref={cluster}>
          <group ref={knot}>
            <mesh>
              <torusKnotGeometry args={[1, 0.32, 200, 32, 2, 3]} />
              <meshStandardMaterial
                color={MAT_PURPLE}
                metalness={0.88}
                roughness={0.18}
                emissive={MAT_PURPLE}
                emissiveIntensity={0.45}
              />
            </mesh>
            <mesh scale={1.04}>
              <torusKnotGeometry args={[1, 0.32, 200, 32, 2, 3]} />
              <meshBasicMaterial
                color={MAT_GLOW}
                wireframe
                transparent
                opacity={0.38}
                depthWrite={false}
              />
            </mesh>
          </group>

          <group ref={outerRing}>
            <mesh rotation={[Math.PI / 2.4, 0, 0]}>
              <torusGeometry args={[1.92, 0.026, 32, 200]} />
              <meshBasicMaterial color={MAT_GLOW} transparent opacity={0.55} />
            </mesh>
            <mesh rotation={[Math.PI / 2.1, 0.4, 0.3]}>
              <torusGeometry args={[2.55, 0.015, 16, 120]} />
              <meshBasicMaterial color={MAT_PURPLE} transparent opacity={0.22} />
            </mesh>
          </group>

          {[
            [1.85, -0.42, -0.5],
            [-1.2, 0.95, 0.72],
            [0.35, -1.5, -0.2],
            [-1.95, -0.72, 0.45],
            [1.05, 1.25, -0.9],
          ].map(([x, y, z], i) => (
            <mesh key={`n-${i}`} position={[x, y, z]}>
              <icosahedronGeometry args={[i % 2 === 0 ? 0.085 : 0.055, 0]} />
              <meshStandardMaterial
                color={MAT_GLOW}
                emissive={MAT_GLOW}
                emissiveIntensity={1.35}
                metalness={0.4}
                roughness={0.35}
              />
            </mesh>
          ))}
        </group>
      </group>
      <ambientLight intensity={0.22} />
      <pointLight position={[6, 4, 6]} intensity={52} color="#c9a8ff" distance={38} decay={2} />
      <pointLight position={[-10, -2, -2]} intensity={38} color="#6b4cff" distance={30} decay={2} />
      <spotLight
        position={[0, 8, 12]}
        angle={0.52}
        penumbra={0.92}
        intensity={22}
        color="#f5f2ff"
        castShadow={false}
      />
    </>
  );
}

function SceneFallback() {
  return null;
}

export function PixovaScrollCanvas({
  scrollYProgress,
  workSectionProgress,
  orbitMotionMute,
  canvasZIndex,
  projectCount,
  viewportCompact,
}: {
  scrollYProgress: MotionValue<number>;
  workSectionProgress: MotionValue<number>;
  orbitMotionMute: MotionValue<number>;
  canvasZIndex: MotionValue<number>;
  projectCount: number;
  viewportCompact: boolean;
}) {
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const canvasOverlayOpacity = useMotionValue(1);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || prefersReducedMotion) {
    return null;
  }

  const dprCap = rsp(orbitConfig.defaults.overlay.dprCap, viewportCompact);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0"
      aria-hidden
      style={{ zIndex: canvasZIndex, opacity: canvasOverlayOpacity }}
    >
      <Canvas
        className="h-full w-full"
        camera={{ position: [0, 0, 9], fov: 40 }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: true,
        }}
        dpr={[1, Math.min(dprCap, typeof window !== "undefined" ? window.devicePixelRatio : 1)]}
        style={{ background: "transparent" }}
      >
        <AdaptiveCamera compact={viewportCompact} />
        <Suspense fallback={<SceneFallback />}>
          <OrbitalLattice
            scrollYProgress={scrollYProgress}
            workSectionProgress={workSectionProgress}
            orbitMotionMute={orbitMotionMute}
            canvasOverlayOpacity={canvasOverlayOpacity}
            projectCount={projectCount}
            viewportCompact={viewportCompact}
          />
        </Suspense>
      </Canvas>
    </motion.div>
  );
}
