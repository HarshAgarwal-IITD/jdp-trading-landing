import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="font-display text-accent text-sm md:text-base tracking-[0.3em] uppercase">
              Trusted Since 1975
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Premium{" "}
            <span className="text-gradient-brass">Army Supplies</span>
            <br />
            For Defense Forces
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 font-light">
            Five decades of excellence supplying quality military equipment to the{" "}
            <strong className="text-accent">Indian Army</strong> &{" "}
            <strong className="text-accent">Royal Bhutan Army</strong>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl">
              Explore Products
            </Button>
            <Button variant="heroOutline" size="xl">
              Contact Us
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="font-display text-3xl md:text-5xl font-bold text-accent">
                50+
              </div>
              <div className="text-sm md:text-base text-primary-foreground/70 mt-1">
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl md:text-5xl font-bold text-accent">
                2
              </div>
              <div className="text-sm md:text-base text-primary-foreground/70 mt-1">
                Armed Forces
              </div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl md:text-5xl font-bold text-accent">
                100%
              </div>
              <div className="text-sm md:text-base text-primary-foreground/70 mt-1">
                Quality Assured
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#products"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-accent transition-colors animate-bounce"
        >
          <ChevronDown className="h-8 w-8" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
