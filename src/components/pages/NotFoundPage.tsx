import { Link } from "@tanstack/react-router";
import { PillBadge } from "@/components/ui/PillBadge";

export default function NotFoundPage() {
  return (
    <section className="relative min-h-screen bg-hero-mesh noise overflow-hidden flex items-center">
      {/* Decorative chair */}
      <svg className="svg-deco hidden md:block" style={{ right: "10%", top: "50%", transform: "translateY(-50%)" }} width="220" height="320" viewBox="0 0 220 320" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2">
        <path d="M40 60 L40 200 L150 200 L150 60" />
        <path d="M40 60 L40 30 L150 30 L150 60" />
        <path d="M40 200 L25 300" /><path d="M150 200 L165 300" />
        <path d="M40 130 L150 130" />
        <ellipse cx="95" cy="60" rx="55" ry="6" />
      </svg>

      {/* Floating number pills */}
      <span className="svg-deco font-mono text-gold/15 text-7xl font-bold animate-float-y" style={{ top: "15%", left: "8%" }}>55</span>
      <span className="svg-deco font-mono text-gold/15 text-7xl font-bold animate-float-y" style={{ bottom: "20%", left: "12%", animationDelay: "2s" }}>50</span>
      <span className="svg-deco font-mono text-gold/15 text-7xl font-bold animate-float-y" style={{ top: "25%", right: "30%", animationDelay: "4s" }}>2026</span>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 py-32 w-full">
        <div className="max-w-2xl">
          <PillBadge color="gold">ERROR 404</PillBadge>
          <h1 className="mt-6 font-display font-black text-white leading-none" style={{ fontSize: "clamp(3.5rem,10vw,9rem)" }}>
            This seat<br />is empty.
          </h1>
          <p className="mt-6 font-display italic text-gold text-2xl md:text-3xl">
            But Africa's negotiating table has plenty of room.
          </p>
          <p className="mt-6 font-body text-white/70 max-w-sm leading-relaxed">
            The page you were looking for does not exist. But if you are here, you are probably looking for one of Africa's most important youth institutions. Let us help you find your way back.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/" className="relative inline-flex items-center overflow-hidden rounded-full bg-gold px-7 py-3.5 font-display italic font-semibold text-navy-dark hover:scale-[1.04] transition-transform">
              <span className="relative z-10">Go Back Home</span>
              <span className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </Link>
            <Link to="/apply" className="inline-flex items-center rounded-full border border-white/30 px-7 py-3.5 font-display italic font-semibold text-white hover:bg-white/10 transition-colors">
              Apply for Cohort 1
            </Link>
          </div>
          <p className="mt-12 font-body text-white/40 text-sm">
            If you followed a broken link, please let us know at <a href="mailto:info@aycnc.org" className="text-gold hover:underline">info@aycnc.org</a>
          </p>
        </div>
      </div>

      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 font-body text-white/30 text-[0.8rem] text-center px-6">
        You are the 404th person to visit a page that does not exist. You should probably apply for AYCNC Cohort 1 instead.
      </p>
    </section>
  );
}
