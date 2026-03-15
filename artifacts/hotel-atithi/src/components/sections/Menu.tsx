import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";
import { UtensilsCrossed } from "lucide-react";

const featuredImages = [
  {
    // gujarati thali traditional food
    url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80",
    alt: "Traditional Gujarati Cuisine"
  },
  {
    // indian thali 
    url: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80",
    alt: "Kathiyawadi Thali"
  },
  {
    // dal bati or indian curry spread
    url: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=400&q=80",
    alt: "Authentic Curries"
  },
  {
    // fresh indian flatbreads and snacks
    url: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80",
    alt: "Fresh Breads & Snacks"
  }
];


export function Menu() {
  const [, navigate] = useLocation();

  return (
    <section id="menu" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Discover Our Menu" 
          subtitle="Taste the Tradition" 
        />

        {/* Featured Images Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {featuredImages.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
              onClick={() => navigate("/menu")}
            >
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <span className="text-white text-sm font-semibold">{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            onClick={() => navigate("/menu")}
            className="rounded-full px-10 shadow-xl text-lg group"
          >
            <UtensilsCrossed className="mr-2 h-5 w-5" />
            Our Full Menu
          </Button>
          <p className="mt-4 text-muted-foreground text-sm">Tap to explore our complete menu</p>
        </div>

      </div>
    </section>
  );
}
