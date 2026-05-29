import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { SectionEyebrow, AnimatedSection, fadeUpItem } from "@/components/ui/section";
import { useSeo } from "@/lib/seo";

export default function ImpactPage() {
  useSeo({
    title: "Impact · AYCNC",
    description:
      "Impact at scale. 50 delegates, 5 sub-regions, 70% knowledge improvement, 10 delegates to COP, 50 one-to-one mentor pairs.",
    ogDescription: "Impact at scale. Measurable. Continental.",
    ogUrl: "/impact",
    canonical: "/impact",
  });
  return (
    <div>
      <Hero />
      <KPIDashboard />
      <TimelineVision />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative bg-dark-mesh pt-32 pb-16 overflow-hidden">
      <svg className="svg-deco" style={{ left: "3%", top: "30%" }} width="240" height="160" viewBox="0 0 240 160" stroke="rgba(255,255,255,0.12)" strokeWidth="2" fill="none">
        <line x1="20" y1="140" x2="40" y2="80" /><line x1="80" y1="140" x2="100" y2="50" />
        <line x1="140" y1="140" x2="160" y2="30" /><line x1="200" y1="140" x2="220" y2="10" />
      </svg>
      <svg className="svg-deco" style={{ right: "5%", top: "20%" }} width="120" height="120" viewBox="0 0 120 120" stroke="rgba(245,166,35,0.25)" strokeWidth="3" fill="none">
        <path d="M20 100 L100 20 M100 20 L70 20 M100 20 L100 50" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <SectionEyebrow dark>IMPACT</SectionEyebrow>
        <h1 className="mt-5 font-display font-black text-white leading-none overflow-hidden" style={{ fontSize: "clamp(2.75rem,8vw,6rem)" }}>
          Impact<br /><span className="italic gradient-text-gold">at Scale</span>
        </h1>
        <p className="mt-6 font-body text-white/70 text-lg max-w-2xl">
          AYCNC measures everything. Cohort by cohort, country by country, COP by COP.
        </p>
      </div>
    </section>
  );
}

const kpis = [
  { v: 50, suf: "", label: "Inaugural Delegates", note: "Cohort 1 target" },
  { v: 5, suf: " / 5", label: "AU Sub-regions Represented", note: "Full continental balance" },
  { v: 50, suf: "%", label: "Female Delegates", note: "Gender parity baseline" },
  { v: 70, suf: "%", label: "Knowledge Improvement", note: "Pre and post assessment" },
  { v: 15, suf: "", label: "Delegates Deployed to COP", note: "Phase 3 target" },
  { v: 20, suf: "", label: "Policy Briefs Published", note: "AYCNC Research Journal" },
  { v: 50, suf: "", label: "1:1 Mentor Pairs", note: "Every delegate" },
  { v: 70, suf: "%", label: "Alumni in Climate Work", note: "At 12 months post-fellowship" },
];

function KPIDashboard() {
  return (
    <section className="relative bg-white py-24 overflow-hidden">
      <svg className="svg-deco" style={{ bottom: "0", right: "0" }} width="400" height="400" viewBox="0 0 400 400" fill="none">
        <path d="M400 100 A300 300 0 0 0 100 400" stroke="rgba(245,166,35,0.15)" strokeWidth="2" />
        <path d="M400 180 A220 220 0 0 0 180 400" stroke="rgba(56,161,105,0.15)" strokeWidth="2" />
        <path d="M400 260 A140 140 0 0 0 260 400" stroke="rgba(27,58,107,0.15)" strokeWidth="2" />
        <path d="M400 320 A80 80 0 0 0 320 400" stroke="rgba(74,85,104,0.1)" strokeWidth="2" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="text-center max-w-xl mx-auto">
          <SectionEyebrow>KPI DASHBOARD</SectionEyebrow>
          <h2 className="mt-4 font-display font-black text-navy text-3xl md:text-5xl">Eight metrics. One scorecard.</h2>
        </div>
        <AnimatedSection className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {kpis.map((k, i) => <KPICard key={i} {...k} />)}
        </AnimatedSection>
      </div>
    </section>
  );
}

function KPICard({ v, suf, label, note }: any) {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <motion.div ref={ref} variants={fadeUpItem} className="bg-white rounded-2xl shadow-sm border border-navy/8 p-6 hover:shadow-md transition-shadow">
      <div className="font-mono font-bold text-gold text-4xl tabular-nums">
        {inView ? <CountUp end={v} duration={2} /> : 0}{suf}
      </div>
      <div className="mt-3 font-display font-bold text-navy text-lg">{label}</div>
      <div className="mt-1 font-body text-ink text-xs">{note}</div>
      <div className="mt-4 h-1.5 rounded-full bg-navy/8 overflow-hidden">
        <motion.div className="h-full bg-gold" initial={{ width: "0%" }} animate={inView ? { width: `${Math.min(100, v)}%` } : {}} transition={{ duration: 1.4, delay: 0.2 }} />
      </div>
    </motion.div>
  );
}

function TimelineVision() {
  const phases = [
    { tag: "YEARS 1 TO 2", title: "Foundation", body: "First two cohorts trained and deployed. AYCNC Research Journal launched. Continental visibility established." },
    { tag: "YEARS 3 TO 5", title: "Scale", body: "200 alumni active across 55 countries. Sub-regional hubs operational. Full curriculum accreditation." },
    { tag: "YEAR 5 PLUS", title: "Permanence", body: "500 trained negotiators. Alumni in leadership roles across AGN, AU, and UNFCCC. Self-sustaining endowment." },
  ];
  return (
    <section className="relative bg-cream py-24 overflow-hidden">
      <svg className="svg-deco" style={{ left: "10%", top: "20%", height: "60%" }} width="60" height="100%" viewBox="0 0 60 600" preserveAspectRatio="none" fill="none">
        <path d="M30 0 Q60 150 30 300 T30 600" stroke="rgba(56,161,105,0.25)" strokeWidth="2" strokeDasharray="6 6" />
      </svg>

      <div className="relative mx-auto max-w-4xl px-6 md:px-12">
        <div className="text-center">
          <SectionEyebrow>FIVE YEAR VISION</SectionEyebrow>
          <h2 className="mt-4 font-display font-black text-navy text-3xl md:text-5xl">Where we will be.</h2>
        </div>
        <div className="mt-14 space-y-8">
          {phases.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative pl-12 bg-white rounded-2xl border border-navy/10 p-6 shadow-sm">
              <span className="absolute left-4 top-7 w-4 h-4 rounded-full bg-gold ring-4 ring-cream" />
              <div className="font-mono text-gold text-xs tracking-widest">{p.tag}</div>
              <h3 className="mt-2 font-display font-bold text-navy text-2xl">{p.title}</h3>
              <p className="mt-2 font-body text-ink leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
