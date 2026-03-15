import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation } from "lucide-react";

export function Map() {
  const mapUrl = "https://maps.google.com/maps?q=Hotel+Atithi+Palanpur+Ahmedabad+Highway+Esbipura&t=&z=15&ie=UTF8&iwloc=&output=embed";
  
  const openDirections = () => {
    window.open("https://www.google.com/maps/search/?api=1&query=Hotel+Atithi+Ahmedabad-Palanpur+Highway+Esbipura+Palanpur", "_blank");
  };

  return (
    <section id="map" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Find Us" 
          subtitle="Location" 
        />

        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card p-4 rounded-3xl shadow-xl border border-border/50"
          >
            <div className="rounded-2xl overflow-hidden h-[450px] relative bg-muted">
              <iframe 
                src={mapUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Hotel Atithi Location"
                className="absolute inset-0 w-full h-full"
              />
            </div>
            
            <div className="mt-8 px-4 pb-4 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-xl text-foreground mb-1">Hotel Atithi</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                    Ahmedabad-Palanpur Highway, Near D Mart,<br/>
                    Esbipura, Palanpur, Gujarat 385001
                  </p>
                </div>
              </div>
              
              <Button onClick={openDirections} size="lg" className="rounded-full shrink-0 w-full md:w-auto">
                <Navigation className="mr-2 h-5 w-5" />
                Get Directions
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
