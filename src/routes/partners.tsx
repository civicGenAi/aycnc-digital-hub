import { motion } from "framer-motion";
import { SectionEyebrow, AnimatedSection, fadeUpItem } from "@/components/ui/section";
import { PillBadge } from "@/components/ui/PillBadge";
import { Building2, Globe2, HandHeart } from "lucide-react";
import { useSeo } from "@/lib/seo";

export default function PartnersPage() {
  useSeo({
    title: "Partners · AYCNC",
    description:
      "Built on continental authority. AGN, African Union Commission, VP Office Tanzania, UNDP, GIZ, UNEP, YOUNGO.",
    ogDescription: "Continental authority. Real institutional partnerships.",
    ogUrl: "/partners",
    canonical: "/partners",
  });
  return (
    <div>
      <Hero />
      <PartnerTiers />
      <WhatWeOffer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative bg-cream pt-32 pb-16 overflow-hidden">
      <svg className="svg-deco" style={{ right: "5%", top: "20%" }} width="300" height="300" viewBox="0 0 300 300">
        {[[60,60],[240,60],[60,240],[240,240],[150,40],[40,150],[260,150],[150,260]].map(([x,y],i) => (
          <g key={i}>
            <line x1={x} y1={y} x2="150" y2="150" stroke="rgba(27,58,107,0.1)" strokeWidth="1" />
            <circle cx={x} cy={y} r="6" fill="rgba(27,58,107,0.2)" />
          </g>
        ))}
        <circle cx="150" cy="150" r="10" fill="rgba(245,166,35,0.5)" />
      </svg>
      <svg className="svg-deco" style={{ bottom: "10%", left: "3%" }} width="90" height="90" viewBox="0 0 90 90" fill="none" stroke="rgba(27,58,107,0.12)" strokeWidth="2">
        <path d="M20 60 L35 45 L45 55 L55 45 L70 60 M30 50 L30 35 M60 50 L60 35" />
      </svg>

      <div className="relative mx-auto max-w-5xl px-6 md:px-12">
        <SectionEyebrow>PARTNERS</SectionEyebrow>
        <h1 className="mt-5 font-display font-black text-navy leading-[1.05]" style={{ fontSize: "clamp(2.75rem,6vw,5rem)" }}>
          Built on Continental Authority
        </h1>
        <p className="mt-6 font-body text-ink text-lg max-w-2xl">
          AYCNC is grounded in the formal endorsement and ongoing partnership of Africa's most authoritative climate institutions.
        </p>
      </div>
    </section>
  );
}

function PartnerTiers() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-12 space-y-10">
        {/* Tier 1 */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-2xl bg-gold/10 border border-gold/25 p-8">
          <PillBadge color="gold">TIER 1 · FOUNDING · MANDATING</PillBadge>
          <h3 className="mt-3 font-display font-bold text-navy text-3xl">Africa Group of Negotiators (AGN)</h3>
          <p className="mt-3 font-body text-ink">The AGN passed the founding resolution establishing AYCNC. AGN members serve as 1:1 mentors and curriculum advisors throughout the fellowship.</p>
        </motion.div>

        {/* Tier 2 */}
        <div className="grid md:grid-cols-2 gap-5">
          {[
            { name: "African Union Commission", body: "Continental coordination and political authority." },
            { name: "VP Office · Tanzania", body: "Host government, secretariat infrastructure, residential programme support." },
          ].map((p) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="rounded-2xl bg-navy/5 border border-navy/15 p-6">
              <PillBadge color="navy">TIER 2 · GOVERNING</PillBadge>
              <h4 className="mt-3 font-display font-bold text-navy text-xl">{p.name}</h4>
              <p className="mt-2 font-body text-ink text-sm">{p.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Tier 3 */}
        <div className="grid md:grid-cols-2 gap-5">
          {[
            { name: "UNDP", body: "Capacity-building and South-South cooperation." },
            { name: "GIZ", body: "Technical cooperation and curriculum co-design." },
            { name: "UNEP", body: "Science to policy linkages and Africa Pavilion support." },
            { name: "YOUNGO", body: "UNFCCC youth constituency engagement." },
          ].map((p) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="rounded-xl bg-white border border-navy/10 shadow-sm p-6 hover:shadow-md transition-shadow">
              <PillBadge color="green">TIER 3 · STRATEGIC</PillBadge>
              <h4 className="mt-3 font-display font-bold text-navy text-lg">{p.name}</h4>
              <p className="mt-2 font-body text-ink text-sm">{p.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Tier 4 */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-2xl bg-navy-dark p-8 md:p-10">
          <PillBadge color="white">TIER 4 · NATIONAL</PillBadge>
          <h3 className="mt-3 font-display font-bold text-white text-2xl md:text-3xl">55 National Governments via UNFCCC National Focal Points</h3>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { r: "NORTH", c: 7 }, { r: "WEST", c: 16 }, { r: "CENTRAL", c: 9 }, { r: "EAST", c: 14 }, { r: "SOUTHERN", c: 9 },
            ].map((s) => (
              <div key={s.r} className="rounded-xl bg-white/8 border border-white/15 p-4 text-center">
                <div className="font-mono text-gold text-xs tracking-widest">{s.r} AFRICA</div>
                <div className="mt-2 font-display font-bold text-white text-2xl">{s.c}</div>
                <div className="font-body text-white/60 text-xs">member states</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WhatWeOffer() {
  const offers = [
    { icon: Building2, title: "For Governments", body: "Build a national pipeline of trained negotiators. Strengthen your delegation's depth at every COP." },
    { icon: Globe2, title: "For Multilateral Organizations", body: "Co-design curriculum, embed staff as visiting faculty, and amplify Africa's voice in multilateral processes." },
    { icon: HandHeart, title: "For Bilateral Donors", body: "Fund a cohort, sponsor a sub-region, or endow a named module. Every contribution is institutionally durable." },
  ];
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="text-center max-w-xl mx-auto">
          <SectionEyebrow>WHAT WE OFFER PARTNERS</SectionEyebrow>
          <h2 className="mt-4 font-display font-black text-navy text-3xl md:text-4xl">Different ways to partner.</h2>
        </div>
        <AnimatedSection className="mt-12 grid md:grid-cols-3 gap-5">
          {offers.map((o, i) => {
            const Icon = o.icon;
            return (
              <motion.div key={i} variants={fadeUpItem} className="rounded-2xl bg-white border border-navy/10 p-7 hover:shadow-lg transition-shadow">
                <Icon size={36} className="text-gold" />
                <h3 className="mt-5 font-display font-bold text-navy text-xl">{o.title}</h3>
                <p className="mt-2 font-body text-ink leading-relaxed">{o.body}</p>
              </motion.div>
            );
          })}
        </AnimatedSection>
      </div>
    </section>
  );
}
