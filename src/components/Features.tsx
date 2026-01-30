import { Lightbulb, Users, Globe, Sparkles } from "lucide-react";
import { businessData } from "@/data/businessData";

const iconMap = {
  Lightbulb,
  Users,
  Globe,
  Sparkles,
};

const Features = () => {
  return (
    <section id="features" className="py-24 lg:py-32 bg-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-6">
            What Makes Us Unique
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            A Space Like No Other
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
            Discover the qualities that make this location a beacon of innovation and creativity.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {businessData.features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="group p-8 rounded-3xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent size={28} className="text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-primary-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-primary-foreground/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
