import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HeroSlideshow from "@/components/home/HeroSlideshow";
import { SectionEyebrow, SectionTitle, AnimatedSection, fadeUpItem } from "@/components/ui/section";
import { PillBadge } from "@/components/ui/PillBadge";
import { CountdownTimer } from "@/components/ui/CountdownTimer";
import { GoldRule } from "@/components/ui/GoldRule";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { GraduationCap, Users, Globe2 } from "lucide-react";
import { useSeo } from "@/lib/seo";

const COHORT_OPEN = new Date("2026-07-15T00:00:00Z");

export default function HomePage() {
  useSeo({
    title: "AYCNC · African Youth Climate Negotiation Center",
    description:
      "Building Africa's next generation of climate diplomats. 55 countries, 50 inaugural delegates, applications open July 2026.",
    ogDescription: "55 countries. One continental mission. Applications open July 2026.",
    ogUrl: "/",
    canonical: "/",
  });
  return (
    <div>
      <HeroSlideshow />
      <ProblemSection />
      <KeyNumbersSection />
      <WhatIsSection />
      <ProgrammeOverviewSection />
      <ApplyBannerSection />
    </div>
  );
}

function ProblemSection() {
  const cards = [
    { color: "border-rose-500", title: "The Youth Exclusion Gap", body: "Youth constitute over 60% of Africa's population but participation in formal negotiations remains largely symbolic." },
    { color: "border-amber-500", title: "The Succession Crisis", body: "Africa's most experienced negotiators approach retirement without structured succession. Three decades of institutional knowledge at risk." },
    { color: "border-sky-500", title: "The Structural Barrier", body: "No UNFCCC accreditation pathways, no national youth delegation frameworks, inadequate mentorship, limited funding." },
  ];
  return (
    <section className="relative bg-cream py-24 md:py-32 overflow-hidden">
      <svg className="svg-deco" style={{ top: "8%", right: "5%" }} width="320" height="320" viewBox="0 0 320 320" fill="none" stroke="rgba(27,58,107,0.08)" strokeWidth="1">
        <circle cx="160" cy="160" r="60" /><circle cx="160" cy="160" r="100" /><circle cx="160" cy="160" r="150" />
      </svg>
      <svg className="svg-deco" style={{ bottom: "8%", left: "4%" }} width="160" height="160" viewBox="0 0 160 160">
        {[[80,20],[40,60],[120,60],[20,100],[80,100],[140,100],[80,140]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="4" fill="rgba(27,58,107,0.15)"/>)}
      </svg>

      <div className="mx-auto max-w-7xl px-6 md:px-12 grid lg:grid-cols-[40%_60%] gap-12 items-start relative">
        <div className="relative">
          <span className="absolute -top-8 -left-4 font-display font-black text-navy/[0.07] leading-none select-none pointer-events-none" style={{ fontSize: "18vw" }}>4%</span>
          <div className="relative">
            <SectionEyebrow>THE PROBLEM</SectionEyebrow>
            <h2 className="mt-4 font-display italic text-navy text-3xl md:text-[2.75rem] leading-[1.1] font-bold">
              Why Africa needs a permanent voice at the climate table.
            </h2>
            <p className="mt-6 font-body text-ink leading-relaxed max-w-md">
              Less than 4% of UNFCCC negotiators under age 35 come from African delegations. The continent most affected by climate change is the least represented in shaping the response.
            </p>
          </div>
        </div>

        <AnimatedSection className="space-y-5">
          {cards.map((c, i) => (
            <motion.div key={i} variants={fadeUpItem} className={`bg-white rounded-xl p-6 shadow-sm border-l-4 ${c.color}`}>
              <h3 className="font-display font-bold text-navy text-xl">{c.title}</h3>
              <p className="mt-2 font-body text-ink leading-relaxed">{c.body}</p>
            </motion.div>
          ))}
        </AnimatedSection>
      </div>

      <motion.blockquote
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
        className="relative mt-20 mx-auto max-w-2xl px-6 md:px-12"
      >
        <p className="font-display italic text-navy text-2xl md:text-[1.625rem] border-l-4 border-gold pl-8 leading-relaxed">
          AYCNC is not another short-term youth programme. It is Africa's permanent institutional response to a structural gap in global climate governance.
        </p>
      </motion.blockquote>
    </section>
  );
}

function KeyNumbersSection() {
  const stats = [
    { n: 55, l: "AU Member States", align: "right" },
    { n: 50, l: "Inaugural Delegates · Cohort 1", align: "left" },
    { n: 12, l: "Months · The Full Fellowship", align: "right" },
    { n: 3, l: "Programme Phases", align: "left" },
  ];
  return (
    <section className="relative bg-navy-dark py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent 0,transparent 59px,rgba(255,255,255,0.04) 59px,rgba(255,255,255,0.04) 60px),repeating-linear-gradient(90deg,transparent 0,transparent 59px,rgba(255,255,255,0.04) 59px,rgba(255,255,255,0.04) 60px)" }} />
      <svg className="svg-deco" style={{ right: "5%", top: "10%" }} width="320" height="240" viewBox="0 0 320 240">
        {Array.from({ length: 24 }).map((_, i) => {
          const x = (i % 6) * 60 + 10, y = Math.floor(i / 6) * 60 + 10;
          return <g key={i} stroke="rgba(255,255,255,0.05)" strokeWidth="1.5"><line x1={x-6} y1={y} x2={x+6} y2={y}/><line x1={x} y1={y-6} x2={x} y2={y+6}/></g>;
        })}
      </svg>
      <svg className="svg-deco" style={{ left: "-100px", bottom: "-100px" }} width="440" height="440" viewBox="0 0 440 440">
        <circle cx="0" cy="440" r="220" fill="none" stroke="rgba(56,161,105,0.10)" strokeWidth="1.5" />
      </svg>

      <div className="relative mx-auto max-w-6xl px-6 md:px-12 space-y-16">
        {stats.map((s, i) => (
          <Stat key={i} num={s.n} label={s.l} align={s.align as any} />
        ))}
      </div>
    </section>
  );
}

function Stat({ num, label, align }: { num: number; label: string; align: "left" | "right" }) {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
      className={align === "right" ? "text-right" : "text-left"}
    >
      <div className="font-mono font-bold gradient-text-gold leading-none tabular-nums" style={{ fontSize: "clamp(5rem,12vw,10rem)" }}>
        {inView ? <CountUp end={num} duration={2.5} /> : 0}
      </div>
      <div className="mt-3 font-body font-light text-white/60 text-lg md:text-xl">{label}</div>
      <GoldRule className={`mt-6 ${align === "right" ? "ml-auto mr-0" : "ml-0 mr-auto"}`} />
    </motion.div>
  );
}

function WhatIsSection() {
  const timeline = [
    { date: "April 2025", body: "AGN", location: "Zanzibar", note: "AGN resolution to establish the centre." },
    { date: "July 2025", body: "AMCEN-20", location: "Nairobi", note: "Ministerial endorsement of host country." },
    { date: "February 2026", body: "CAHOSCC · 39th AU Assembly", location: "Addis Ababa", note: "Heads of State endorsement." },
    { date: "February 2026", body: "AU Assembly of Heads of State", location: "Addis Ababa", note: "Continental ratification." },
  ];
  return (
    <section className="relative bg-white py-24 md:py-32 overflow-hidden">
      <svg className="svg-deco" style={{ top: "8%", left: "5%" }} width="90" height="90" viewBox="0 0 90 90" fill="none" stroke="rgba(27,58,107,0.12)" strokeWidth="2">
        <path d="M10 15 L45 25 L45 80 L10 70 Z M45 25 L80 15 L80 70 L45 80 Z" />
      </svg>
      <svg className="svg-deco" style={{ bottom: "5%", right: "0" }} width="220" height="220" viewBox="0 0 220 220" fill="none" stroke="rgba(245,166,35,0.2)" strokeWidth="2">
        <path d="M0 220 A220 220 0 0 0 220 0" />
      </svg>

      <div className="relative grid lg:grid-cols-2 min-h-[600px]">
        <div className="bg-navy-dark p-10 md:p-16 flex flex-col justify-center" style={{ clipPath: "polygon(0 0, 100% 0, 88% 100%, 0 100%)" }}>
          <SectionEyebrow dark>WHAT IS AYCNC</SectionEyebrow>
          <h2 className="mt-4 font-display italic font-black text-white text-3xl md:text-[2.5rem] leading-tight">
            Permanent. Continental. Official.
          </h2>
          <p className="mt-6 font-body text-white/70 leading-relaxed max-w-md">
            AYCNC is Africa's first permanent institutional centre dedicated to building youth capacity in formal UNFCCC climate negotiations. Not a project. Not a workshop. An institution.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {["VP Office Tanzania", "AGN Founded", "CAHOSCC Endorsed"].map((t) => (
              <span key={t} className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 font-mono text-xs text-white/80">{t}</span>
            ))}
          </div>
        </div>

        <div className="p-10 md:p-16">
          <div className="relative space-y-8">
            <div className="absolute left-[7px] top-2 bottom-2 w-px border-l-2 border-dashed border-navy/20" />
            {timeline.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-8"
              >
                <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-gold ring-4 ring-cream" />
                <span className="inline-block rounded-full bg-gold/10 px-3 py-1 font-mono text-xs text-gold-muted">{t.date}</span>
                <h4 className="mt-2 font-display font-bold text-navy text-lg">{t.body}</h4>
                <p className="font-body text-ink text-sm">{t.location} · {t.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgrammeOverviewSection() {
  const phases = [
    {
      n: "01", icon: GraduationCap, title: "Foundation Training", duration: "10 weeks · Residential", badge: "PHASE 1",
      body: "Intensive in-person training in Dar es Salaam on UNFCCC architecture, negotiation craft, science, and Africa's positions.",
      tags: ["UNFCCC", "Negotiation", "Science", "Africa Positions"],
      location: "Dar es Salaam, Tanzania",
    },
    {
      n: "02", icon: Users, title: "Immersion and Mentorship", duration: "6 months · Hybrid", badge: "PHASE 2",
      body: "1:1 AGN mentor pairing, SB session shadowing, research outputs published in the AYCNC Research Journal.",
      tags: ["Mentorship", "Shadowing", "Research", "Journal"],
      location: "Remote · Bonn",
    },
    {
      n: "03", icon: Globe2, title: "COP Deployment", duration: "2 weeks · COP", badge: "PHASE 3",
      body: "Up to 15 top-performing delegates deployed in official accredited delegations at the next UNFCCC COP.",
      tags: ["UNFCCC Accreditation", "Africa Pavilion", "AGN Shadowing"],
      location: "COP host city",
    },
  ];
  return (
    <section className="relative bg-forest-dark py-24 md:py-32 overflow-hidden">
      <svg className="svg-deco" style={{ top: "8%", right: "5%" }} width="200" height="200" viewBox="0 0 200 200" fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="1.5">
        <polygon points="100,20 170,60 170,140 100,180 30,140 30,60" />
        <polygon points="100,55 145,80 145,130 100,155 55,130 55,80" />
      </svg>
      <svg className="svg-deco" style={{ bottom: "5%", left: "3%" }} width="120" height="120" viewBox="0 0 120 120" stroke="rgba(255,255,255,0.12)" strokeWidth="1">
        <line x1="0" y1="120" x2="80" y2="40" /><line x1="12" y1="120" x2="92" y2="40" /><line x1="24" y1="120" x2="104" y2="40" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto">
          <SectionEyebrow dark>THE PROGRAMME</SectionEyebrow>
          <h2 className="mt-4 font-display font-black text-white text-3xl md:text-5xl">
            From classroom to <span className="italic gradient-text-gold">COP table</span>.
          </h2>
          <p className="mt-5 font-body text-white/70">Three phases. Twelve months. One mission.</p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {phases.map((p, i) => {
            const Icon = p.icon;
            const isLast = i === 2;
            return (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -8 }}
                className={`relative overflow-hidden rounded-2xl backdrop-blur-md p-7 border ${isLast ? "bg-gold/15 border-gold/30" : "bg-white/[0.08] border-white/15"}`}
              >
                <span className={`absolute top-4 right-4 font-display font-black text-7xl leading-none select-none pointer-events-none ${isLast ? "text-gold/20" : "text-white/[0.08]"}`}>{p.n}</span>
                <Icon size={44} className="text-white relative z-10" />
                <div className="mt-5"><PillBadge color={isLast ? "gold" : "white"}>{p.badge}</PillBadge></div>
                <h3 className={`mt-3 font-display font-bold text-2xl relative z-10 ${isLast ? "italic text-gold" : "text-white"}`}>{p.title}</h3>
                <span className="mt-2 inline-block font-mono text-gold text-xs">{p.duration}</span>
                <p className="mt-3 font-body text-white/70 leading-relaxed text-sm relative z-10">{p.body}</p>
                <div className="mt-4 flex flex-wrap gap-1.5 relative z-10">
                  {p.tags.map((t) => (
                    <span key={t} className="font-mono text-xs rounded-md px-2 py-1 border border-white/15 text-white/70">{t}</span>
                  ))}
                </div>
                {isLast && (
                  <span className="mt-4 inline-block rounded-full bg-gold text-navy-dark px-3 py-1 text-xs font-mono">UP TO 15 DELEGATES AT COP</span>
                )}
                <div className="mt-4 text-xs text-white/50 font-body">📍 {p.location}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ApplyBannerSection() {
  return (
    <section className="relative bg-hero-mesh py-28 overflow-hidden">
      {[...Array(12)].map((_, i) => (
        <span key={i} className="svg-deco h-2 w-2 rounded-full bg-gold/20 animate-float-y"
          style={{
            top: `${10 + (i * 7) % 80}%`,
            left: i < 6 ? `${4 + i * 2}%` : `${80 + (i - 6) * 2}%`,
            animationDelay: `${(i * 0.5) % 3}s`,
          }} />
      ))}
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <SectionEyebrow dark>APPLICATIONS OPEN</SectionEyebrow>
        <h2 className="mt-4 font-display italic font-black text-white" style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", lineHeight: 1.1 }}>
          July 15 to August 15, 2026
        </h2>
        <div className="mt-10"><CountdownTimer target={COHORT_OPEN} /></div>
        <p className="mt-8 font-body text-white/60 max-w-md mx-auto">
          50 inaugural delegates. Open to climate-active African youth aged 18 to 35 across all 55 AU member states.
        </p>
        <div className="mt-8">
          <Link to="/apply" className="relative inline-flex items-center overflow-hidden rounded-full bg-gold px-8 py-4 font-display italic font-semibold text-navy-dark hover:scale-[1.05] transition-transform">
            <span className="relative z-10">Start Your Application</span>
            <span className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          </Link>
        </div>
      </div>
    </section>
  );
}
