import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

// Types
type MenuItem = {
  name: string;
  price: number;
};

type MenuCategory = {
  title: string;
  items: MenuItem[];
};

// Data
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

const fullMenu: MenuCategory[] = [
  {
    title: "Starters / Snacks",
    items: [
      { name: "Dhokla", price: 80 },
      { name: "Fafda & Jalebi", price: 70 },
      { name: "Handvo", price: 90 },
      { name: "Kathiyawadi Dabeli", price: 50 },
      { name: "Methi Thepla with Pickle", price: 60 },
    ]
  },
  {
    title: "Main Course (Kathiyawadi)",
    items: [
      { name: "Special Kathiyawadi Thali (unlimited)", price: 220 },
      { name: "Mini Thali", price: 150 },
      { name: "Dal Bati Churma", price: 180 },
      { name: "Sev Tameta nu Shaak", price: 120 },
      { name: "Ringna Bateta nu Shaak", price: 110 },
      { name: "Undhiyu", price: 160 },
    ]
  },
  {
    title: "Breads",
    items: [
      { name: "Bajra Rotla", price: 30 },
      { name: "Wheat Phulka (2 pcs)", price: 30 },
      { name: "Puri (4 pcs)", price: 40 },
      { name: "Paratha", price: 50 },
    ]
  },
  {
    title: "Rice & More",
    items: [
      { name: "Steamed Rice", price: 60 },
      { name: "Dal Khichdi", price: 90 },
      { name: "Vaghareli Khichdi", price: 100 },
    ]
  },
  {
    title: "Desserts",
    items: [
      { name: "Mohanthal", price: 80 },
      { name: "Gajar Halwa", price: 90 },
      { name: "Shrikhand", price: 100 },
      { name: "Basundi", price: 100 },
      { name: "Ghewar", price: 80 },
    ]
  },
  {
    title: "Beverages",
    items: [
      { name: "Chaas (Buttermilk)", price: 40 },
      { name: "Fresh Lime Soda", price: 50 },
      { name: "Mango Lassi", price: 70 },
      { name: "Masala Chai", price: 30 },
      { name: "Cold Coffee", price: 80 },
    ]
  }
];

function VegIcon() {
  return (
    <div className="w-4 h-4 border-2 border-green-600 p-0.5 flex items-center justify-center shrink-0">
      <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
    </div>
  );
}

export function Menu() {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  return (
    <section id="menu" className="py-24 bg-background relative">
      {/* Decorative subtle pattern via pseudo element can go here */}
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
              className="relative aspect-square rounded-2xl overflow-hidden shadow-lg group"
            >
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mb-8">
          <Button 
            size="lg" 
            onClick={() => setIsMenuExpanded(!isMenuExpanded)}
            className="rounded-full px-8 shadow-xl text-lg group"
          >
            {isMenuExpanded ? "Hide Full Menu" : "View Full Menu"}
            {isMenuExpanded ? (
              <ChevronUp className="ml-2 h-5 w-5 group-hover:-translate-y-1 transition-transform" />
            ) : (
              <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            )}
          </Button>
        </div>

        {/* Expandable Menu */}
        <AnimatePresence>
          {isMenuExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="bg-card rounded-3xl p-6 md:p-12 shadow-2xl border border-border/50 max-w-5xl mx-auto mt-8 relative">
                
                {/* Decorative border corners */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary/30 rounded-tl-lg"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/30 rounded-tr-lg"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/30 rounded-bl-lg"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary/30 rounded-br-lg"></div>

                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center gap-2 bg-green-50 text-green-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                    <VegIcon /> 100% Pure Vegetarian
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                  {fullMenu.map((category, catIdx) => (
                    <div key={catIdx}>
                      <h3 className="font-display text-2xl font-semibold text-primary mb-6 flex items-center gap-4">
                        <span>{category.title}</span>
                        <div className="h-[1px] flex-1 bg-border"></div>
                      </h3>
                      <ul className="space-y-5">
                        {category.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-end group">
                            <div className="flex items-start gap-3 w-full">
                              <div className="mt-1"><VegIcon /></div>
                              <div className="flex-1">
                                <div className="flex justify-between items-baseline">
                                  <span className="font-medium text-foreground text-lg group-hover:text-primary transition-colors">
                                    {item.name}
                                  </span>
                                  <div className="flex-1 border-b-[2px] border-dotted border-muted-foreground/30 mx-4 relative top-[-6px]"></div>
                                  <span className="font-semibold text-foreground whitespace-nowrap">
                                    ₹ {item.price}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                
                <div className="mt-16 text-center text-muted-foreground text-sm">
                  <p>* Prices are subject to change. Taxes applicable as per rules.</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
