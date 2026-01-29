// src/components/Footer.jsx
import { Github, Linkedin, ArrowUpRight } from "lucide-react";

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/ganesharumugam05",
    label: "LinkedIn",
  },
  {
    icon: Github,
    href: "https://github.com/GaneshArumugam05",
    label: "GitHub",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-background text-foreground">
      
      {/* Subtle glow separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* Brand */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="text-2xl font-bold tracking-tight hover:text-primary transition"
            >
              Ganesh<span className="text-primary">.</span>
            </a>
            <p className="mt-2 text-sm text-muted-foreground">
              React Frontend Developer
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              © {currentYear} Ganesh Arumugam. All rights reserved.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm text-muted-foreground hover:text-foreground transition
                           after:absolute after:-bottom-1 after:left-0 after:h-[1px]
                           after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials + Back to Top */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-3 rounded-full glass hover:text-primary hover:scale-110 transition"
              >
                <social.icon size={20} />
              </a>
            ))}

            {/* Back to top */}
            <a
              href="#home"
              className="p-3 rounded-full glass hover:text-primary hover:scale-110 transition"
              aria-label="Back to top"
            >
              <ArrowUpRight size={18} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
