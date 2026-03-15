import { useEffect } from "react";
import { useLocation } from "wouter";
import { ArrowLeft, Phone } from "lucide-react";
import { motion } from "framer-motion";

const galleryPhotos = [
  {
    src: "/images/gallery/hotel-front-day.jpg",
    caption: "Hotel Atithi — Main Entrance",
    category: "Hotel",
  },
  {
    src: "/images/gallery/hotel-night.jpg",
    caption: "Hotel at Night — Garden & A/C Hall",
    category: "Hotel",
  },
  {
    src: "/images/gallery/i-love-palanpur-night.jpg",
    caption: "I Love Palanpur — A/C Hall & Pure Veg",
    category: "Hotel",
  },
  {
    src: "/images/gallery/bamboo-huts.jpg",
    caption: "Traditional Bamboo Garden Huts",
    category: "Garden",
  },
  {
    src: "/images/gallery/fountain-night.jpg",
    caption: "Beautiful Illuminated Fountain",
    category: "Garden",
  },
  {
    src: "/images/gallery/ac-hall-inside.jpg",
    caption: "Spacious A/C Dining Hall",
    category: "Dining",
  },
  {
    src: "/images/gallery/food-table.jpg",
    caption: "Fresh Food Served at Your Table",
    category: "Dining",
  },
  {
    src: "/images/gallery/birthday-decor-red.jpg",
    caption: "Birthday Garden Decoration",
    category: "Events",
  },
  {
    src: "/images/gallery/birthday-decor-pink.jpg",
    caption: "Party Decor — Garden Celebrations",
    category: "Events",
  },
  {
    src: "/images/gallery/children-park-1.jpg",
    caption: "Children's Park — Slides & Play Area",
    category: "Children Park",
  },
  {
    src: "/images/gallery/children-park-2.jpg",
    caption: "Children's Park — Wide View",
    category: "Children Park",
  },
  {
    src: "/images/gallery/children-park-3.jpg",
    caption: "Children's Park — Swings & Rides",
    category: "Children Park",
  },
  {
    src: "/images/gallery/inflatable-slide.jpg",
    caption: "Giant Inflatable Slide — Kids' Fun",
    category: "Children Park",
  },
];

const categories = ["All", "Hotel", "Garden", "Dining", "Events", "Children Park"];

export default function FullGallery() {
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
            Garden · Children Park · Partyplot · Banquet
          </span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white tracking-wide mb-3">
          Our Gallery
        </h1>
        <p className="text-yellow-400/80 text-base max-w-lg mx-auto">
          A glimpse of Hotel Atithi — where memories are made
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {galleryPhotos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="break-inside-avoid rounded-2xl overflow-hidden shadow-2xl border border-yellow-600/20 group relative"
            >
              <img
                src={photo.src}
                alt={photo.caption}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/75 to-transparent pt-8 pb-3 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-yellow-400 text-xs font-semibold tracking-widest uppercase">
                  {photo.category}
                </span>
                <p className="text-white text-sm font-medium mt-0.5">{photo.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 border-t border-yellow-600/20 pt-8">
          <p className="text-white/60 text-sm mb-6">
            Garden + Children Park + Partyplot + Banquet — Ahmedabad-Palanpur Highway, Esbipura
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
