import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { businessData } from "@/data/businessData";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark texture-overlay">
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-highlight/5 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
      
      {/* Decorative gold lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-accent/50 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-t from-transparent via-accent/50 to-transparent" />

      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-24 h-24 border-l border-t border-accent/30" />
      <div className="absolute top-8 right-8 w-24 h-24 border-r border-t border-accent/30" />
      <div className="absolute bottom-8 left-8 w-24 h-24 border-l border-b border-accent/30" />
      <div className="absolute bottom-8 right-8 w-24 h-24 border-r border-b border-accent/30" />

      <div className="relative container mx-auto px-6 py-32 text-center">
        {/* Exclusive badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-10"
        >
          <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-accent/30 bg-card/50 backdrop-blur-sm text-accent text-sm font-medium tracking-widest uppercase">
            <Sparkles size={14} className="animate-pulse" />
            Silicon Valley Landmark
            <Sparkles size={14} className="animate-pulse" />
          </span>
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-10"
        >
          <div className="inline-flex items-center justify-center w-32 h-32 rounded-full border border-accent/20 bg-card/30 backdrop-blur-sm p-5 shadow-luxury animate-float">
            <img
              src={businessData.logo}
              alt={businessData.name}
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-medium text-foreground mb-8 leading-none tracking-tight"
        >
          <span className="block">Where</span>
          <span className="block text-gradient-gold italic">Innovation</span>
          <span className="block">Lives</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-sans text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 font-light tracking-wide"
        >
          {businessData.tagline}
        </motion.p>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="w-24 h-px bg-gradient-gold mx-auto mb-6"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-muted-foreground/70 max-w-lg mx-auto mb-14 leading-relaxed text-sm tracking-wide"
        >
          {businessData.description}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <a
            href="#about"
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-gold text-accent-foreground font-semibold text-sm tracking-widest uppercase overflow-hidden transition-all duration-500 hover:shadow-gold shine-effect"
          >
            <span className="relative z-10">{businessData.ctaText}</span>
            <ArrowDown size={16} className="relative z-10 group-hover:translate-y-1 transition-transform" />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-muted-foreground/50 text-xs tracking-[0.3em] uppercase">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-accent/50 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
