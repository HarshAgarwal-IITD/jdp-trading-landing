import { CheckCircle } from "lucide-react";

const features = [
  "50+ Years of Trusted Partnership",
  "Government Approved Supplier",
  "Quality Tested Materials",
  "On-Time Delivery Guarantee",
  "Competitive Pricing",
  "Custom Orders Welcome",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="font-display text-accent text-sm tracking-[0.3em] uppercase">
              Our Legacy
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Five Decades of{" "}
              <span className="text-primary">Excellence</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Founded in 1975 in West Bengal, India, JDP Trading has grown from a small enterprise to one of the most trusted suppliers of military equipment in the region.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our commitment to quality and reliability has earned us the privilege of supplying to both the Indian Armed Forces and the Royal Bhutan Army. Every product we deliver meets the strictest military specifications.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-primary rounded-lg p-8 md:p-12">
              <div className="text-center">
                <div className="font-display text-8xl md:text-9xl font-bold text-accent mb-4">
                  50
                </div>
                <div className="font-display text-2xl md:text-3xl text-primary-foreground uppercase tracking-wider">
                  Years Strong
                </div>
                <div className="w-16 h-1 bg-accent mx-auto my-6" />
                <p className="text-primary-foreground/80 text-lg">
                  Serving the nation with pride and dedication since 1975
                </p>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
