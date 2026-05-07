import summit1 from "@/assets/project-summit-1.png";
import summit2 from "@/assets/project-summit-2.png";
import harvest from "@/assets/project-american-harvest.png";
import urban from "@/assets/project-urban.png";

export type Project = {
  name: string;
  description: string;
  image: string;
  url: string;
  tags: string[];
  category: "Web" | "App" | "Automation";
};

export const projects: Project[] = [
  {
    name: "Summit Home Spark",
    description: "Premium home services landing page with a bold, conversion-focused hero.",
    image: summit1,
    url: "https://summit-home-spark.vercel.app/",
    tags: ["Web Development", "Real Estate", "Landing Page"],
    category: "Web",
  },
  {
    name: "Summit Home Spark — Interior",
    description: "Refined interior pages with rich typography and editorial layout.",
    image: summit2,
    url: "https://summit-home-spark.vercel.app/",
    tags: ["Web Development", "UI Design", "Real Estate"],
    category: "Web",
  },
  {
    name: "American Harvest",
    description: "B2B restaurant supply site with cinematic visuals and clear CTAs.",
    image: harvest,
    url: "https://americanharvest.vercel.app/",
    tags: ["Web Development", "Agriculture", "Business Website"],
    category: "Web",
  },
  {
    name: "Urban Real Estate",
    description: "Modern real-estate platform with refined search and listings UX.",
    image: urban,
    url: "https://real-state-urban.vercel.app/",
    tags: ["Web Development", "Real Estate", "Modern UI"],
    category: "Web",
  },
];
