import { businessData } from "@/data/businessData";

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section label */}
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
            About This Location
          </span>

          {/* Main heading */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
            Where <span className="text-gradient">Innovation</span> Meets{" "}
            <span className="text-gradient">Inspiration</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
            {businessData.descriptionWeb}
          </p>

          {/* Stats or highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: "1600", label: "Address" },
              { value: "CA", label: "State" },
              { value: "Tech", label: "Industry" },
              { value: "∞", label: "Innovation" },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
