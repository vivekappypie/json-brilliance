import { MapPin, Navigation, ExternalLink } from "lucide-react";
import { businessData } from "@/data/businessData";

const Location = () => {
  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessData.address)}`;

  return (
    <section id="location" className="py-24 lg:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
            Find Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Visit Our Location
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Located in the heart of Silicon Valley, our space is easily accessible and ready to welcome you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Map */}
          <div className="relative rounded-3xl overflow-hidden shadow-card group">
            <img
              src={businessData.mapUrl}
              alt="Location map"
              className="w-full h-full min-h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            
            {/* Map overlay with CTA */}
            <div className="absolute bottom-6 left-6 right-6">
              <a
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 bg-primary-foreground hover:bg-primary-foreground/90 text-primary rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Navigation size={18} />
                Get Directions
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Address card */}
          <div className="flex flex-col justify-center">
            <div className="p-8 md:p-12 rounded-3xl bg-card shadow-card">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-8">
                <MapPin size={32} className="text-accent" />
              </div>

              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Our Address
              </h3>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {businessData.address}
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Navigation size={20} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Easy Access</h4>
                    <p className="text-sm text-muted-foreground">
                      Conveniently located with ample parking and public transit options nearby.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <a
                  href={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl font-semibold transition-all duration-300 shadow-glow hover:shadow-xl"
                >
                  <MapPin size={20} />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
