import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import "@/styles/navbar.css";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`navbar-header ${isScrolled ? "scrolled" : ""}`}>
      <nav className="navbar-inner">
        <button onClick={() => scrollTo("#home")} className="navbar-logo">
          <img src={logo} alt="Atekas World" className="navbar-logo-img" />
          <span className="navbar-logo-text">
            Ateka's <span className="navbar-logo-accent">World</span>
          </span>
        </button>

        <ul className="navbar-links">
          {navItems.map((item) => (
            <li key={item.href}>
              <button onClick={() => scrollTo(item.href)} className="navbar-link">
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <Button variant="hero" size="sm" className="navbar-cta rounded-full px-6" onClick={() => scrollTo("#contact")}>
          Get a Quote
        </Button>

        <button className="navbar-mobile-toggle" onClick={() => setIsMobileOpen(!isMobileOpen)} aria-label="Toggle menu">
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMobileOpen && (
        <div className="navbar-mobile-menu">
          <ul className="navbar-mobile-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <button onClick={() => scrollTo(item.href)} className="navbar-mobile-link">
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <Button variant="hero" className="w-full rounded-full mt-2" onClick={() => scrollTo("#contact")}>
                Get a Quote
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
