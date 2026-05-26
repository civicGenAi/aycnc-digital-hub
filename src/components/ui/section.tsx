import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

export function SectionEyebrow({ children, className, dark }: { children: React.ReactNode; className?: string; dark?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={cn("inline-flex items-center gap-3", className)}
    >
      <span className="block h-[3px] w-10 bg-gold" />
      <span className={cn("font-mono text-[0.72rem] tracking-[0.2em] uppercase", dark ? "text-gold" : "text-gold-muted")}>
        {children}
      </span>
    </motion.div>
  );
}

export function SectionTitle({ children, className, italic, as: As = "h2" }: { children: React.ReactNode; className?: string; italic?: boolean; as?: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="relative inline-block"
    >
      <As className={cn("font-display font-bold leading-tight", italic && "italic", className)}>
        {children}
      </As>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="absolute -bottom-2 left-0 h-[3px] w-24 origin-left bg-gold"
      />
    </motion.div>
  );
}

export function AnimatedSection({ children, className, stagger = 120, delay = 0 }: { children: React.ReactNode; className?: string; stagger?: number; delay?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger / 1000, delayChildren: delay / 1000 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const fadeUpItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any } },
};
