import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

const galleryImages = [
  { url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600", alt: "Restaurant Ambiance" },
  { url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600", alt: "Delicious Indian Food" },
  { url: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600", alt: "Kathiyawadi Platter" },
  { url: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=600", alt: "Traditional Thali" },
  { url: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600", alt: "Rich Curries" },
  { url: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600", alt: "Food Spread" },
  { url: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600", alt: "Indian Thali Detail" },
  { url: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600", alt: "Spicy Curry" },
  { url: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600", alt: "Garden Setting" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Our Gallery" 
          subtitle="A Visual Journey" 
        />

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="break-inside-avoid"
            >
              <div className="relative group overflow-hidden rounded-2xl shadow-md cursor-pointer bg-muted">
                {/* Using standard img tags with proper alt text. No stock comments needed inside map block because URLs are mapped properly above */}
                <img 
                  src={img.url} 
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-multiply"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
