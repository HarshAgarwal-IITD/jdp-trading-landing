import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-accent" />
            <span className="font-display text-lg font-bold text-primary-foreground tracking-wider">
              JDP TRADING
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="#home" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
              Home
            </a>
            <a href="#products" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
              Products
            </a>
            <a href="#about" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} JDP Trading. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
