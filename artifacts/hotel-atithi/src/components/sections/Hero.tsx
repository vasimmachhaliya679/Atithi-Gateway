import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToMenu = () => {
    const target = document.querySelector("#menu");
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* landing page hero scenic traditional indian restaurant ambiance */}
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
          alt="Hotel Atithi Ambiance"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      </div>

      {/* Decorative Border Layer */}
      <div className="absolute inset-4 sm:inset-8 border border-white/20 z-10 pointer-events-none rounded-2xl hidden sm:block"></div>

      <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-primary tracking-[0.3em] uppercase text-sm md:text-base font-semibold mb-6 block drop-shadow-md">
            Welcome To
          </span>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
            Hotel Atithi
          </h1>
          <p className="font-display text-2xl md:text-3xl text-white/90 italic mb-8 drop-shadow">
            An Authentic Kathiyawadi Experience
          </p>
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            A traditional Kathiyawadi open garden restaurant situated on the Ahmedabad-Palanpur Highway, near D-Mart, Esbipura. Experience the authentic flavors of Gujarat in a warm, open-air garden setting.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" onClick={scrollToMenu} className="w-full sm:w-auto text-lg rounded-full">
              View Our Menu
            </Button>
            <Button size="lg" variant="outline" onClick={() => {
              document.querySelector("#contact")?.scrollIntoView({ behavior: 'smooth' });
            }} className="w-full sm:w-auto text-lg rounded-full border-white/50 text-white hover:bg-white hover:text-primary">
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer"
        onClick={scrollToMenu}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="text-white/60 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-primary rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
