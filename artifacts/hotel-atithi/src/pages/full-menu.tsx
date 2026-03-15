import { useEffect } from "react";
import { useLocation } from "wouter";
import { ArrowLeft, Phone } from "lucide-react";
import { motion } from "framer-motion";

const menuPages = [
  {
    src: "/images/menu/soup-tandur.jpg",
    title: "Soup & Tandur Starter",
  },
  {
    src: "/images/menu/kathiyawadi-taste.jpg",
    title: "Kathiyawadi Taste",
  },
  {
    src: "/images/menu/sp-atithi-khana.jpg",
    title: "Sp. Atithi Khana",
  },
  {
    src: "/images/menu/indian-veg-sabji.jpg",
    title: "Indian Veg. & Paneer Sabji",
  },
  {
    src: "/images/menu/dal-ka-test.jpg",
    title: "Dal Ka Test & Chinese Noodles",
  },
  {
    src: "/images/menu/jain-food.jpg",
    title: "100% Jain Food & Winter Special",
  },
  {
    src: "/images/menu/chinese-starter.jpg",
    title: "Chinese Starter & Salad",
  },
  {
    src: "/images/menu/roti-south-indian.jpg",
    title: "Roti Ka Swad & South Indian",
  },
  {
    src: "/images/menu/continental-sizzler.jpg",
    title: "Continental, Sizzler & Kaju",
  },
  {
    src: "/images/menu/sandwich-pizza.jpg",
    title: "Sandwich & Pizza",
  },
  {
    src: "/images/menu/basmati-rice.jpg",
    title: "Basmati Rice Ki Mahek",
  },
  {
    src: "/images/menu/milkshake-thali.jpg",
    title: "Milk Shake & Punjabi Thali",
  },
];

export default function FullMenu() {
  const [, navigate] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-[#0a1628]/95 backdrop-blur-sm border-b border-yellow-600/30 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors font-medium"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="Hotel Atithi"
              className="w-8 h-8 object-contain brightness-200"
            />
            <span className="font-display font-bold text-xl tracking-widest text-white uppercase">
              HOTEL ATITHI
            </span>
          </div>

          <a
            href="tel:+919974787601"
            className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors text-sm font-medium"
          >
            <Phone size={16} />
            <span className="hidden sm:inline">+91 99747 87601</span>
          </a>
        </div>
      </div>

      {/* Title */}
      <div className="text-center py-10 px-4">
        <div className="inline-block border border-yellow-600/40 px-8 py-1 mb-4 rounded-full">
          <span className="text-yellow-500 text-sm tracking-widest uppercase">
            100% Pure Vegetarian
          </span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white tracking-wide mb-3">
          Our Menu
        </h1>
        <p className="text-yellow-400/80 text-base max-w-lg mx-auto">
          Scroll through our complete menu — something delicious for everyone
        </p>
      </div>

      {/* Menu Images Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {menuPages.map((page, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className="rounded-2xl overflow-hidden shadow-2xl border border-yellow-600/20 group"
            >
              <div className="relative">
                <img
                  src={page.src}
                  alt={page.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent pt-10 pb-3 px-4">
                  <p className="text-yellow-400 font-semibold text-sm tracking-wide">
                    {page.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <div className="text-center mt-12 border-t border-yellow-600/20 pt-8">
          <p className="text-yellow-500/70 text-sm italic mb-2">
            મેનુ બહારની કોઈપણ આઇટમનો ઓર્ડર આપતા પહેલા તેનો ભાવ જાણી લેવો.
          </p>
          <p className="text-white/50 text-xs">
            Prices are subject to change. Taxes applicable as per rules.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+919974787601"
              className="inline-flex items-center gap-2 bg-yellow-600 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full transition-colors shadow-lg"
            >
              <Phone size={18} />
              Call Now: +91 99747 87601
            </a>
            <a
              href="https://wa.me/919974787601"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-full transition-colors shadow-lg"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
