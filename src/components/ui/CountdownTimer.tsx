import { useEffect, useState } from "react";

export function CountdownTimer({ target }: { target: Date }) {
  const calc = () => {
    const diff = target.getTime() - Date.now();
    if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 };
    return {
      d: Math.floor(diff / 86_400_000),
      h: Math.floor((diff / 3_600_000) % 24),
      m: Math.floor((diff / 60_000) % 60),
      s: Math.floor((diff / 1000) % 60),
    };
  };
  const [t, setT] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  const Tile = ({ v, label }: { v: number; label: string }) => (
    <div className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur min-w-[78px] text-center">
      <div className="font-mono font-bold text-gold text-4xl tabular-nums">{String(v).padStart(2, "0")}</div>
      <div className="mt-1 font-body text-[0.65rem] uppercase tracking-widest text-white/60">{label}</div>
    </div>
  );

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Tile v={t.d} label="Days" />
      <Tile v={t.h} label="Hours" />
      <Tile v={t.m} label="Minutes" />
      <Tile v={t.s} label="Seconds" />
    </div>
  );
}
