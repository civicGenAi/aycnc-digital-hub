import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "@/constants/heroSlides";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const AUTOPLAY = 6000;

export default function HeroSlideshow() {
  const [i, setI] = useState(0);
  const slide = heroSlides[i];

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % heroSlides.length), AUTOPLAY);
    return () => clearInterval(id);
  }, []);

  const go = (n: number) => setI((n + heroSlides.length) % heroSlides.length);

  return (
    <section className="relative">
      <div className="relative h-[78svh] min-h-[520px] w-full overflow-hidden bg-navy-dark">
        {/* Background slides */}
        <AnimatePresence mode="sync">
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1.0 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.0 }, scale: { duration: 7 } }}
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 z-[1] hidden md:block"
          style={{ background: "linear-gradient(to right, rgba(15,34,68,.92) 0%, rgba(15,34,68,.75) 50%, rgba(15,34,68,.4) 100%)" }} />
        <div className="absolute inset-0 z-[1] md:hidden"
          style={{ background: "linear-gradient(to bottom, rgba(15,34,68,.6) 0%, rgba(15,34,68,.92) 60%, #0F2244 100%)" }} />

        {/* Watermark */}
        <div className="absolute inset-0 z-[2] flex items-center justify-center overflow-hidden pointer-events-none">
          <span className="font-display font-black text-white/[0.04] text-[22vw] leading-none select-none">AYCNC</span>
        </div>

        {/* Text */}
        <div className="relative z-10 flex items-center min-h-full px-5 md:px-12 lg:px-20 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-[55%_45%] gap-8 items-center w-full pt-24 md:pt-0 pb-32 md:pb-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center md:text-left"
              >
                <motion.h1
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="font-display font-black text-white leading-[1.08]"
                  style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
                >
                  <span className="block">{slide.headlineLines[0]}</span>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.55 }}
                    className="block italic"
                    style={{ color: slide.accent }}
                  >
                    {slide.headlineLines[1]}
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.65, duration: 0.55 }}
                    className="block"
                  >
                    {slide.headlineLines[2]}
                  </motion.span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.55 }}
                  className="mt-6 font-body font-light text-white/70 max-w-md mx-auto md:mx-0 leading-[1.75]"
                  style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.125rem)" }}
                >
                  {slide.sub}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.95, duration: 0.55 }}
                  className="mt-8"
                >
                  <Link
                    to={slide.cta.to}
                    className="relative inline-flex items-center overflow-hidden rounded-full bg-gold px-8 py-4 font-display italic font-semibold text-navy-dark transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_40px_rgba(245,166,35,0.5)]"
                  >
                    <span className="relative z-10">{slide.cta.label}</span>
                    <span className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
            <div className="hidden md:block" />
          </div>
        </div>

        {/* Arrows */}
        <button
          aria-label="Previous slide"
          onClick={() => go(i - 1)}
          className="hidden md:grid absolute left-6 top-1/2 -translate-y-1/2 z-20 h-12 w-12 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/20 transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          aria-label="Next slide"
          onClick={() => go(i + 1)}
          className="hidden md:grid absolute right-6 top-1/2 -translate-y-1/2 z-20 h-12 w-12 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/20 transition-colors"
        >
          <ChevronRight size={20} />
        </button>

        {/* Indicator dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => go(idx)}
              className={`h-2 rounded-full transition-all duration-[400ms] ${idx === i ? "w-8 bg-gold" : "w-2 bg-white/30 hover:bg-white/50"}`}
            />
          ))}
        </div>

        {/* Progress */}
        <div className="absolute bottom-0 left-0 right-0 z-20 h-0.5 bg-white/10">
          <motion.div
            key={i}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: AUTOPLAY / 1000, ease: "linear" }}
            className="h-full bg-gold"
          />
        </div>
      </div>

      {/* Stats bar */}
      <StatsBar />
    </section>
  );
}

function StatsBar() {
  const { ref, inView } = useInView({ triggerOnce: true });
  const stats = [
    { n: 55, l: "AU Member States" },
    { n: 50, l: "Inaugural Delegates" },
    { n: 12, l: "Months" },
    { n: 3, l: "Programme Phases" },
  ];
  return (
    <div ref={ref} className="bg-navy-dark/95 backdrop-blur-md border-t border-white/10 py-5">
      <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
        {stats.map((s, i) => (
          <div key={i} className="px-6 py-3 text-center">
            <div className="font-mono font-bold text-gold text-3xl tabular-nums">
              {inView ? <CountUp end={s.n} duration={2} /> : 0}
            </div>
            <div className="mt-1 font-body text-white/60 text-[0.8rem] uppercase tracking-wide">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
