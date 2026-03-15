import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin, Clock, Mail } from "lucide-react";

export function Contact() {
  const phoneNumber = "919974787601";
  const displayPhone = "+91 99747 87601";

  const handleCall = () => {
    window.location.href = `tel:+${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-muted/50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader 
          title="Get In Touch" 
          subtitle="We'd love to host you" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-3xl shadow-lg border border-border/50 hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                <MapPin size={28} />
              </div>
              <h4 className="font-display font-semibold text-xl mb-3">Location</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Ahmedabad-Palanpur Highway, Near D Mart, Esbipura, Palanpur, Gujarat 385001
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card p-8 rounded-3xl shadow-lg border border-border/50 hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                <Clock size={28} />
              </div>
              <h4 className="font-display font-semibold text-xl mb-3">Opening Hours</h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-1">
                <strong>Mon - Sun:</strong><br/>
                8:00 AM – 10:00 PM
              </p>
            </motion.div>
          </div>

          {/* Action Area */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card p-10 rounded-3xl shadow-xl border border-border/50 text-center"
          >
            <div className="w-20 h-20 mx-auto rounded-full bg-primary/5 flex items-center justify-center mb-6">
              <Phone size={36} className="text-primary" />
            </div>
            
            <h3 className="font-display text-3xl font-bold mb-4">Book Your Table</h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Ready to experience authentic Kathiyawadi cuisine? Give us a call or send a WhatsApp message to reserve your spot.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleCall} size="lg" className="rounded-full w-full sm:w-auto text-lg h-14 px-8">
                <Phone className="mr-2.5 h-5 w-5" />
                Call Now
              </Button>
              <Button onClick={handleWhatsApp} variant="whatsapp" size="lg" className="rounded-full w-full sm:w-auto text-lg h-14 px-8">
                <MessageCircle className="mr-2.5 h-5 w-5" />
                WhatsApp
              </Button>
            </div>
            
            <p className="mt-8 text-2xl font-bold text-foreground font-display">
              {displayPhone}
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
