import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";
import logoUrl from "@/assets/logo.png";

const navLinks = [
  { to: "/about", label: "About" },
  { to: "/programme", label: "Programme" },
  { to: "/apply", label: "Apply" },
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
          scrolled ? "bg-navy-dark/95 backdrop-blur-xl border-b border-gold/20" : "bg-transparent"
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
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-navy-dark lg:hidden flex flex-col"
          >
            <div className="flex-1 flex flex-col justify-center px-8 gap-5 pt-20">
              {navLinks.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                >
                  <Link
                    to={l.to}
                    className="block font-display italic font-black text-[2.5rem] leading-tight text-white hover:text-gold transition-colors"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="p-6">
              <Link
                to="/apply"
                className="block w-full text-center rounded-full bg-gold px-6 py-4 font-display italic font-semibold text-navy-dark"
              >
                Apply for Cohort 1
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
