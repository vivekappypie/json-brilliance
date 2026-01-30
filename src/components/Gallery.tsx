import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { businessData } from "@/data/businessData";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? businessData.photos.length - 1 : selectedImage - 1
      );
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === businessData.photos.length - 1 ? 0 : selectedImage + 1
      );
    }
  };

  return (
    <section id="gallery" className="relative py-32 lg:py-40 bg-card texture-overlay">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      
      <div className="container mx-auto px-6 relative" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-accent" />
            <span className="text-accent text-sm tracking-[0.3em] uppercase font-medium">
              {businessData.gallery.heading}
            </span>
            <div className="w-12 h-px bg-accent" />
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Visual <span className="text-gradient-gold italic">Journey</span>
          </h2>
          
          <p className="text-muted-foreground max-w-xl mx-auto">
            {businessData.gallery.subtitleWeb}
          </p>
        </motion.div>

        {/* Gallery grid - Masonry style */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {businessData.photos.slice(0, 6).map((photo, index) => {
            const gridClasses = [
              "col-span-12 md:col-span-8 row-span-2",
              "col-span-6 md:col-span-4",
              "col-span-6 md:col-span-4",
              "col-span-6 md:col-span-4",
              "col-span-6 md:col-span-4",
              "col-span-12 md:col-span-4",
            ];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${gridClasses[index]} relative group cursor-pointer overflow-hidden`}
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative h-full min-h-[200px] md:min-h-[250px]">
                  <img
                    src={photo.url}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  {/* Border accent on hover */}
                  <div className="absolute inset-0 border border-accent/0 group-hover:border-accent/50 transition-all duration-500" />
                  
                  {/* View icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-14 h-14 rounded-full border border-accent/50 flex items-center justify-center backdrop-blur-sm bg-background/30">
                      <Maximize2 size={20} className="text-accent" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/98 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-3 border border-accent/30 hover:border-accent text-foreground hover:text-accent transition-all"
            >
              <X size={20} />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-4 md:left-8 p-4 border border-accent/30 hover:border-accent text-foreground hover:text-accent transition-all"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-4 md:right-8 p-4 border border-accent/30 hover:border-accent text-foreground hover:text-accent transition-all"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image */}
            <motion.img
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={businessData.photos[selectedImage].url}
              alt={`Gallery ${selectedImage + 1}`}
              className="max-w-full max-h-[80vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-2 border border-accent/30 text-foreground text-sm tracking-widest">
              <span className="text-accent">{selectedImage + 1}</span>
              <span className="text-muted-foreground"> / {businessData.photos.length}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
