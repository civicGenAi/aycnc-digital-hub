import { cn } from "@/lib/cn";

type Color = "gold" | "green" | "navy" | "white";
const colorMap: Record<Color, string> = {
  gold: "border-gold/40 text-gold bg-gold/10",
  green: "border-forest/40 text-forest bg-forest/10",
  navy: "border-navy/30 text-navy bg-navy/5",
  white: "border-white/20 text-white/80 bg-white/10",
};

export function PillBadge({ children, color = "gold", className }: { children: React.ReactNode; color?: Color; className?: string }) {
  return (
    <span className={cn("inline-flex items-center rounded-full border px-3 py-1 font-mono text-[0.7rem] tracking-widest uppercase", colorMap[color], className)}>
      {children}
    </span>
  );
}
