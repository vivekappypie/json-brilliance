import { ArrowDown, MapPin } from "lucide-react";
import { businessData } from "@/data/businessData";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1.5s" }} />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px"
        }}
      />

      <div className="relative container mx-auto px-6 py-32 text-center">
        {/* Logo */}
        <div className="mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-primary-foreground/10 backdrop-blur-sm p-4 shadow-glow animate-float">
            <img
              src={businessData.logo}
              alt={businessData.name}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Location badge */}
        <div className="mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground/90 text-sm font-medium">
            <MapPin size={14} className="text-accent" />
            Mountain View, CA
          </span>
        </div>

        {/* Main heading */}
        <h1 
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          {businessData.name}
        </h1>

        {/* Tagline */}
        <p 
          className="text-xl md:text-2xl text-primary-foreground/70 max-w-2xl mx-auto mb-8 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          {businessData.tagline}
        </p>

        {/* Description */}
        <p 
          className="text-primary-foreground/60 max-w-xl mx-auto mb-12 leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          {businessData.description}
        </p>

        {/* CTA Button */}
        <div className="animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <a
            href="#about"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full font-semibold text-lg transition-all duration-300 shadow-glow hover:shadow-xl hover:scale-105"
          >
            {businessData.ctaText}
            <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
