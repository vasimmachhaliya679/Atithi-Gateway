import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";
import { Images } from "lucide-react";

const previewImages = [
  { src: "/images/gallery/hotel-front-day.jpg", alt: "Hotel Atithi Entrance" },
  { src: "/images/gallery/hotel-night.jpg", alt: "Hotel at Night" },
  { src: "/images/gallery/i-love-palanpur-night.jpg", alt: "I Love Palanpur" },
  { src: "/images/gallery/bamboo-huts.jpg", alt: "Garden Huts" },
  { src: "/images/gallery/fountain-night.jpg", alt: "Garden Fountain" },
  { src: "/images/gallery/birthday-decor-red.jpg", alt: "Birthday Decoration" },
];

export function Gallery() {
  const [, navigate] = useLocation();

  return (
    <section id="gallery" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Gallery"
          subtitle="A Visual Journey"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {previewImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="relative group overflow-hidden rounded-2xl shadow-md cursor-pointer aspect-video"
              onClick={() => navigate("/gallery")}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-semibold drop-shadow">{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={() => navigate("/gallery")}
            className="rounded-full px-10 shadow-xl text-lg"
          >
            <Images className="mr-2 h-5 w-5" />
            View Full Gallery
          </Button>
          <p className="mt-4 text-muted-foreground text-sm">Tap to see all photos</p>
        </div>
      </div>
    </section>
  );
}
