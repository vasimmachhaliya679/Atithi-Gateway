import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  light?: boolean;
}

export function SectionHeader({ title, subtitle, className, light = false }: SectionHeaderProps) {
  return (
    <div className={cn("text-center mb-16", className)}>
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-primary font-medium tracking-widest uppercase text-sm mb-3 block"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={cn(
          "font-display text-4xl md:text-5xl font-bold tracking-tight mb-6",
          light ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </motion.h2>
      
      {/* Decorative Divider */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex items-center justify-center gap-3"
      >
        <div className="w-12 h-[1px] bg-primary/40"></div>
        <div className="w-2 h-2 rounded-full bg-primary rotate-45 transform"></div>
        <div className="w-12 h-[1px] bg-primary/40"></div>
      </motion.div>
    </div>
  );
}
