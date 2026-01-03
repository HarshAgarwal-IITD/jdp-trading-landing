import { Shield, Star } from "lucide-react";

const ClientsSection = () => {
  return (
    <section id="clients" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-display text-accent text-sm tracking-[0.3em] uppercase">
            Our Clients
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Trusted by Defense Forces
          </h2>
          <p className="text-muted-foreground text-lg">
            We are honored to serve and supply to the armed forces that protect our nations.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Indian Army */}
          <div className="bg-card rounded-lg p-8 md:p-10 text-center shadow-card border border-border">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-primary" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">
              Indian Armed Forces
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Proud supplier to the Indian Army, providing quality military equipment that meets the highest standards of defense specifications.
            </p>
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
          </div>

          {/* Bhutan Army */}
          <div className="bg-card rounded-lg p-8 md:p-10 text-center shadow-card border border-border">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-primary" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">
              Royal Bhutan Army
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Trusted partner of the Royal Bhutan Army, delivering reliable military supplies that strengthen bilateral defense cooperation.
            </p>
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">Government Approved Vendor</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2 text-foreground">
              <Shield className="w-6 h-6 text-primary" />
              <span className="font-display text-sm uppercase tracking-wider">Verified Supplier</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <Shield className="w-6 h-6 text-primary" />
              <span className="font-display text-sm uppercase tracking-wider">Quality Certified</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <Shield className="w-6 h-6 text-primary" />
              <span className="font-display text-sm uppercase tracking-wider">Licensed Trader</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
