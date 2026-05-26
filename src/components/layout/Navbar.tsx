import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";
import logoUrl from "@/assets/logo.png";

const navLinks = [
  { to: "/about", label: "About" },
  { to: "/programme", label: "Programme" },
  { to: "/partners", label: "Partners" },
  { to: "/impact", label: "Impact" },
  { to: "/news", label: "News" },
  { to: "/contact", label: "Contact" },
] as const;

function Logo({ light = true }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <img src={logoUrl} alt="AYCNC logo" width={40} height={40} className="h-10 w-auto" />
      <span className="leading-none">
        <span className={cn("block font-display font-bold text-xl tracking-tight", light ? "text-white" : "text-navy-dark")}>AYCNC</span>
        <span className={cn("block font-body font-light text-[0.62rem] tracking-wide mt-0.5", light ? "text-white/55" : "text-ink/60")}>
          African Youth Climate Negotiation Center
        </span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // The transparent bar is only legible over the dark home hero. Every other
  // page opens on a light section, so keep the bar solid there from the top.
  const solid = scrolled || location.pathname !== "/";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-[400ms]",
          solid ? "bg-navy-dark/95 backdrop-blur-xl border-b border-gold/20" : "bg-transparent"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8 py-4">
          <Logo light />
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((l) => {
              const active = location.pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={cn(
                    "relative font-body font-semibold text-[0.78rem] uppercase tracking-[0.2em] transition-colors duration-300",
                    active ? "text-gold" : "text-white/75 hover:text-gold"
                  )}
                >
                  {l.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-px w-full bg-gold origin-left transition-transform duration-300",
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    )}
                  />
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-3">
            <Link
              to="/apply"
              className="relative hidden sm:inline-flex items-center overflow-hidden rounded-full bg-gold px-5 py-2.5 font-display italic font-semibold text-sm text-navy-dark transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_30px_rgba(245,166,35,0.5)]"
            >
              <span className="relative z-10">Apply Now</span>
              <span className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/25 to-transparent" />
            </Link>
            <button
              aria-label="Menu"
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden grid h-11 w-11 place-items-center rounded-full bg-white/10 backdrop-blur border border-white/20 text-white"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <motion.path
                  d={open ? "M5 5 L17 17" : "M3 6 L19 6"}
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  animate={{ d: open ? "M5 5 L17 17" : "M3 6 L19 6" }}
                />
                <motion.path
                  d={open ? "M17 5 L5 17" : "M3 16 L19 16"}
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  animate={{ d: open ? "M17 5 L5 17" : "M3 16 L19 16" }}
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden flex flex-col overflow-hidden bg-navy-dark"
          >
            {/* Decorative — on-brand, non-interactive */}
            <span
              className="pointer-events-none absolute -right-12 top-16 font-display font-black leading-none text-white/[0.04] select-none"
              style={{ fontSize: "52vw" }}
            >
              55
            </span>
            <svg
              className="pointer-events-none absolute -left-20 bottom-24 opacity-40"
              width="280" height="280" viewBox="0 0 280 280" fill="none"
              stroke="rgba(245,166,35,0.22)" strokeWidth="1"
            >
              <circle cx="140" cy="140" r="60" />
              <circle cx="140" cy="140" r="100" />
              <circle cx="140" cy="140" r="138" />
            </svg>

            <nav className="relative flex-1 flex flex-col justify-center px-8 gap-1">
              {navLinks.map((l, i) => {
                const active = location.pathname === l.to;
                return (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, x: -32 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: 0.08 + i * 0.06, duration: 0.4, ease: "easeOut" }}
                  >
                    <Link to={l.to} className="group flex items-baseline gap-4 py-2">
                      <span className="font-mono text-sm tabular-nums text-gold/55 group-hover:text-gold transition-colors">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={cn(
                          "font-display italic font-black text-[2.4rem] leading-none transition-colors",
                          active ? "text-gold" : "text-white group-hover:text-gold",
                        )}
                      >
                        {l.label}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="relative border-t border-white/10 px-8 py-6 space-y-4"
            >
              <Link
                to="/apply"
                className="relative flex items-center justify-center overflow-hidden rounded-full bg-gold px-6 py-4 font-display italic font-semibold text-navy-dark"
              >
                <span className="relative z-10">Apply for Cohort 1</span>
                <span className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              </Link>
              <a
                href="mailto:info@aycnc.org"
                className="block text-center font-mono text-xs uppercase tracking-[0.22em] text-white/40 hover:text-gold transition-colors"
              >
                info@aycnc.org
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
