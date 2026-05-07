import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.jpeg";

export function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="container mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-5 gap-10">
        <div className="col-span-2">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logo} alt="Pixova" className="h-10 w-10 rounded-md object-cover" />
            <span className="font-display font-semibold text-lg">Pixova</span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Powering Small Businesses with Smart Technology.
          </p>
        </div>

        <FooterCol title="Company" links={[
          ["About", "/about"], ["Services", "/services"], ["Work", "/work"], ["Process", "/process"],
        ]} />
        <FooterCol title="Services" links={[
          ["Web", "/services"], ["App", "/services"], ["AI", "/services"],
          ["Automation", "/services"], ["Digital", "/services"],
        ]} />
        <FooterCol title="Connect" links={[
          ["Contact", "/contact"], ["LinkedIn", "#"], ["GitHub", "#"],
        ]} />
      </div>
      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <p>© 2025 Pixova. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="font-display text-sm font-semibold mb-4">{title}</h4>
      <ul className="space-y-2.5">
        {links.map(([label, href]) => (
          <li key={label}>
            {href.startsWith("/") ? (
              <Link to={href} className="text-sm text-muted-foreground hover:text-foreground transition">{label}</Link>
            ) : (
              <a href={href} className="text-sm text-muted-foreground hover:text-foreground transition">{label}</a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
