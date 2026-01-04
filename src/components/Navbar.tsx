import { useState } from "react";
import { Menu, X, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "About", href: "#about" },
    { name: "Clients", href: "#clients" },
    { name: "Contact", href: "#contact" },
    { name: "Login", href: "#login" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-accent" />
            <div>
              <span className="font-display text-xl md:text-2xl font-bold text-primary-foreground tracking-wider">
                JDP TRADING
              </span>
              <span className="hidden md:block text-xs text-primary-foreground/70 tracking-widest">
                EST. 1975
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-display text-sm text-primary-foreground/80 hover:text-accent transition-colors tracking-wider uppercase"
              >
                {link.name}
              </a>
            ))}
            <Button variant="hero" size="sm">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-primary-foreground/20">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-3 font-display text-sm text-primary-foreground/80 hover:text-accent transition-colors tracking-wider uppercase"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button variant="hero" size="sm" className="mt-4 w-full">
              Get Quote
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
