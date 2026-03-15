import { useState, useEffect } from "react";
import { Menu, X, MapPin, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Menu", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Map", href: "#map" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map(link => link.href.substring(1));
      let current = "home";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 200)) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/90 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, "#home")}
              className="flex items-center gap-3"
            >
              <img
                src="/images/logo.png"
                alt="Hotel Atithi Logo"
                className={cn(
                  "w-10 h-10 object-contain transition-all duration-300",
                  isScrolled ? "brightness-0" : "brightness-200"
                )}
              />
              <span className={cn(
                "font-display font-bold text-2xl tracking-widest uppercase transition-colors duration-300",
                isScrolled ? "text-foreground" : "text-white drop-shadow-md"
              )}>
                HOTEL ATITHI
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <ul className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-primary relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full",
                        isScrolled ? "text-foreground/80" : "text-white/90 hover:text-white",
                        activeSection === link.href.substring(1) && "text-primary after:w-full"
                      )}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <Button 
                onClick={(e) => {
                  // Type assertion for Event target
                  scrollToSection(e as unknown as React.MouseEvent<HTMLAnchorElement>, "#contact")
                }}
                variant={isScrolled ? "default" : "outline"} 
                className={cn(
                  "rounded-full px-6",
                  !isScrolled && "border-white/50 text-white hover:bg-white hover:text-primary"
                )}
              >
                Book Table
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className={cn(
                "md:hidden p-2 -mr-2 transition-colors",
                isScrolled ? "text-foreground" : "text-white"
              )}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-sm transition-all duration-300 flex flex-col pt-24 px-6 md:hidden",
          mobileMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
        )}
      >
        <ul className="flex flex-col gap-6 text-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={cn(
                  "font-display text-2xl transition-colors hover:text-primary",
                  activeSection === link.href.substring(1) ? "text-primary italic" : "text-foreground"
                )}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col gap-4">
          <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
            <Phone size={16} />
            <span>+91 99747 87601</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm text-center">
            <MapPin size={16} className="shrink-0" />
            <span>Ahmedabad-Palanpur Highway, Esbipura</span>
          </div>
        </div>
      </div>
    </>
  );
}
