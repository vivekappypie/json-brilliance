import { MapPin, ArrowUpRight } from "lucide-react";
import { businessData } from "@/data/businessData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#gallery", label: "Gallery" },
    { href: "#features", label: "Features" },
    { href: "#location", label: "Location" },
  ];

  return (
    <footer className="bg-primary py-16 lg:py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 p-2">
                <img
                  src={businessData.logo}
                  alt={businessData.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-display font-semibold text-xl text-primary-foreground">
                {businessData.name}
              </span>
            </div>
            <p className="text-primary-foreground/60 max-w-md leading-relaxed mb-6">
              {businessData.description}
            </p>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <MapPin size={18} className="text-accent" />
              <span className="text-sm">{businessData.address}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-accent transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-6">
              Explore
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessData.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/60 hover:text-accent transition-colors inline-flex items-center gap-1 group"
                >
                  Get Directions
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-primary-foreground/60 hover:text-accent transition-colors inline-flex items-center gap-1 group"
                >
                  View Gallery
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {currentYear} {businessData.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-primary-foreground/50 hover:text-accent text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-primary-foreground/50 hover:text-accent text-sm transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
