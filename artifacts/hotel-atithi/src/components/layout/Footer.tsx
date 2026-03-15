import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-secondary relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="font-display font-bold text-white text-xl">A</span>
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                Hotel Atithi
              </span>
            </div>
            <p className="text-secondary/70 text-sm leading-relaxed">
              Experience the authentic flavors of Gujarat in our traditional Kathiyawadi open garden restaurant. A perfect stop on your highway journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Menu', 'Gallery', 'Map', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-secondary/70 hover:text-primary transition-colors text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold text-white mb-6">Visit Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-secondary/70">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>Ahmedabad-Palanpur Highway,<br/>Near D Mart, Esbipura,<br/>Palanpur, Gujarat 385001</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-secondary/70">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+91 99747 87601</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg font-semibold text-white mb-6">Opening Hours</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-secondary/70">
                <Clock size={18} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white/90">Monday - Sunday</p>
                  <p>8:00 AM – 10:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary/50">
            &copy; {new Date().getFullYear()} Hotel Atithi. All rights reserved.
          </p>
          <p className="text-sm text-secondary/50">
            Designed with warmth & tradition.
          </p>
        </div>
      </div>
    </footer>
  );
}
