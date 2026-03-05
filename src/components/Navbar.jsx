import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme(); // ✅ Theme hook
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const scrollPosition = window.scrollY + 200;

      let currentSection = "";
      links.forEach((link) => {
        const section = document.querySelector(link.href);
        if (!section) return;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          currentSection = link.href;
        }
      });

      if (currentSection) setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial run

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled
          ? "glass-strong backdrop-blur-lg border-b border-border py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-8xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-xl font-bold">
          Ganesh<span className="text-primary">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium transition
                ${
                  active === link.href
                    ? "text-primary after:w-full"
                    : "text-muted-foreground hover:text-primary after:w-0"
                }
                after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-primary after:transition-all`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Theme & Mobile Menu */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full glass hover:scale-110 transition"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            className="md:hidden p-2 rounded-md glass"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden glass-strong border-t border-border">
          <div className="flex flex-col px-6 py-6 gap-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  setActive(link.href);
                  setOpen(false);
                }}
                className={`text-base font-medium transition ${
                  active === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}