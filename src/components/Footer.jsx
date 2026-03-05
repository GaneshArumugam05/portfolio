// src/components/Footer.jsx
import { memo } from "react";
import { Github, Linkedin, ArrowUpRight } from "lucide-react";

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/in/ganesharumugam05", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/GaneshArumugam05", label: "GitHub" },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border bg-background text-foreground">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="max-w-8xl mx-auto px-6 py-14 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Brand */}
        <div className="text-center md:text-left">
          <a href="#home" className="text-2xl font-bold tracking-tight hover:text-primary transition">Ganesh<span className="text-primary">.</span></a>
          <p className="mt-2 text-sm text-muted-foreground">React Frontend Developer</p>
          <p className="mt-1 text-xs text-muted-foreground">© {year} Ganesh Arumugam. All rights reserved.</p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {footerLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="relative text-sm text-muted-foreground hover:text-foreground transition
                         after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Socials + Back to top */}
        <div className="flex items-center gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3 rounded-full glass hover:text-primary hover:scale-110 transition"
            >
              <Icon size={20} />
            </a>
          ))}
          <a href="#home" aria-label="Back to top" className="p-3 rounded-full glass hover:text-primary hover:scale-110 transition">
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
