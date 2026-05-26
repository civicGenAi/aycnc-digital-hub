import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { cn } from "@/lib/cn";

export function StatCard({ value, suffix = "", label, sublabel, className, large }: { value: number; suffix?: string; label: string; sublabel?: string; className?: string; large?: boolean }) {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "-40px" });
  return (
    <div ref={ref} className={cn("text-center", className)}>
      <div className={cn("font-mono font-bold gradient-text-gold", large ? "text-[clamp(5rem,12vw,10rem)] leading-none" : "text-3xl md:text-4xl")}>
        {inView ? <CountUp end={value} duration={2.2} /> : 0}{suffix}
      </div>
      <div className={cn("font-display mt-2", large ? "text-white/70 text-xl" : "text-sm text-white/70")}>{label}</div>
      {sublabel && <div className="mt-1 font-body text-xs text-white/50">{sublabel}</div>}
    </div>
  );
}
