import { Link } from "react-router-dom";
import logoWhite from "@/assets/logo-white.png";

const marqueeText = "EMPOWERING AFRICAN YOUTH · CLIMATE DIPLOMACY · BUILDING AFRICA'S NEXT GENERATION · AU ENDORSED · TANZANIAN HOST · 55 MEMBER STATES · ";

const quickLinks = [
  { to: "/about", label: "About" },
  { to: "/programme", label: "Programme" },
  { to: "/apply", label: "Apply" },
  { to: "/partners", label: "Partners" },
  { to: "/impact", label: "Impact" },
  { to: "/news", label: "News" },
  { to: "/contact", label: "Contact" },
] as const;

const institutional = ["VP Office Tanzania", "AGN", "AMCEN", "CAHOSCC", "UNFCCC"];
const emails = ["info@aycnc.org", "apply@aycnc.org", "media@aycnc.org", "partnerships@aycnc.org"];

function SocialIcon({ path, label }: { path: string; label: string }) {
  return (
    <a href="#" aria-label={label} className="grid h-10 w-10 place-items-center rounded-full text-white/50 hover:text-gold transition-colors">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d={path} /></svg>
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="relative" style={{ background: "#080F1A" }}>
      {/* Marquee strip */}
      <div className="overflow-hidden bg-white/[0.04] py-3 [&:hover>div]:[animation-play-state:paused]">
        <div className="flex whitespace-nowrap animate-marquee">
          {[0, 1].map((i) => (
            <span key={i} className="font-mono text-gold/40 text-[0.7rem] tracking-[0.25em] uppercase pr-12">
              {marqueeText.repeat(4)}
            </span>
          ))}
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 */}
          <div>
            <div className="mb-5">
              <img
                src={logoWhite}
                alt="AYCNC, The African Youth Climate Negotiation Center"
                className="h-12 md:h-14 w-auto"
              />
            </div>
            <p className="font-body font-light text-white/60 text-sm leading-relaxed mb-5">
              Africa's permanent institutional response to the climate diplomacy gap.
            </p>
            <div className="flex gap-1">
              <SocialIcon label="X" path="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              <SocialIcon label="LinkedIn" path="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
              <SocialIcon label="YouTube" path="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-mono text-gold/70 text-[0.7rem] tracking-widest uppercase mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="group inline-flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors">
                    <span className="inline-block w-0 group-hover:w-3 transition-all overflow-hidden text-gold">→</span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-mono text-gold/70 text-[0.7rem] tracking-widest uppercase mb-5">Institutional</h4>
            <ul className="space-y-2.5">
              {institutional.map((l) => (
                <li key={l} className="text-white/60 text-sm">{l}</li>
              ))}
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-mono text-gold/70 text-[0.7rem] tracking-widest uppercase mb-5">Get in Touch</h4>
            <ul className="space-y-2.5">
              {emails.map((e) => (
                <li key={e}>
                  <a href={`mailto:${e}`} className="text-white/60 hover:text-gold text-sm transition-colors">{e}</a>
                </li>
              ))}
            </ul>
            <address className="not-italic font-body font-light text-white/40 text-[0.8rem] mt-5 leading-relaxed">
              AYCNC Secretariat<br />
              VP Office, Dar es Salaam<br />
              United Republic of Tanzania
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body font-light text-white/35 text-xs">© {new Date().getFullYear()} African Youth Climate Negotiation Center</p>
          <p className="font-body font-light text-white/35 text-xs">Implemented under VP Office, United Republic of Tanzania</p>
        </div>
        <div className="mt-3 text-center font-mono text-white/30 text-[0.7rem] tracking-widest">EN · FR · AR</div>
      </div>
    </footer>
  );
}
