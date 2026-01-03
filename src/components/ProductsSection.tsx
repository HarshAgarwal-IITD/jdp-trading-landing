import { Shirt, Footprints, Briefcase, Award, Star, Shield } from "lucide-react";

const products = [
  {
    icon: Shirt,
    title: "Uniforms & Clothing",
    description: "Combat uniforms, ceremonial dresses, camouflage attire, and all military clothing requirements.",
  },
  {
    icon: Footprints,
    title: "Military Footwear",
    description: "Tactical boots, parade shoes, jungle boots, and specialized footwear for all terrains.",
  },
  {
    icon: Award,
    title: "Belts & Accessories",
    description: "Leather belts, buckles, straps, lanyards, and essential military accessories.",
  },
  {
    icon: Briefcase,
    title: "Bags & Backpacks",
    description: "Tactical backpacks, kit bags, duffle bags, and field equipment carriers.",
  },
  {
    icon: Star,
    title: "Insignia & Badges",
    description: "Rank badges, unit insignias, name tags, and ceremonial decorations.",
  },
  {
    icon: Shield,
    title: "Protective Gear",
    description: "Helmets, gloves, knee pads, and personal protective equipment.",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-display text-accent text-sm tracking-[0.3em] uppercase">
            What We Supply
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Complete Military Equipment
          </h2>
          <p className="text-muted-foreground text-lg">
            From head to toe, we provide everything a soldier needs. Quality materials, precise specifications, and reliable delivery.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg p-8 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <product.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {product.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
