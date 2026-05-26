import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionEyebrow, SectionTitle, AnimatedSection, fadeUpItem } from "@/components/ui/section";
import { PillBadge } from "@/components/ui/PillBadge";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About · AYCNC" },
      { name: "description", content: "AYCNC is Africa's permanent institutional response to the climate diplomacy gap. Hosted in Tanzania. Endorsed by CAHOSCC." },
      { property: "og:title", content: "About · AYCNC" },
      { property: "og:description", content: "Africa's permanent institutional response to the climate diplomacy gap." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <Hero />
      <MissionBlock />
      <GovernanceBlock />
      <TanzaniaBlock />
      <DifferenceBlock />
    </div>
  );
}

function Hero() {
  const cards = [
    { tag: "ESTABLISHED", title: "By AGN Resolution", rot: -5, bg: "bg-navy text-white" },
    { tag: "ENDORSED", title: "By CAHOSCC", rot: 2, bg: "bg-forest-dark text-white" },
    { tag: "HOST COUNTRY", title: "United Republic of Tanzania", rot: 5, bg: "bg-white border border-gold text-navy" },
  ];
  return (
    <section className="relative bg-white pt-32 pb-16 overflow-hidden">
      <svg className="svg-deco" style={{ right: "0%", top: "10%" }} width="500" height="500" viewBox="0 0 500 500" fill="none" stroke="rgba(27,58,107,0.06)" strokeWidth="1">
        {[120,200,280,360].map((r) => <circle key={r} cx="250" cy="250" r={r} />)}
      </svg>
      <svg className="svg-deco" style={{ left: "3%", top: "20%" }} width="200" height="200" viewBox="0 0 200 200">
        {Array.from({length:16}).map((_,i)=>{const x=(i%4)*60+20,y=Math.floor(i/4)*60+20;return <circle key={i} cx={x} cy={y} r="6" fill="rgba(27,58,107,0.12)"/>})}
      </svg>

      <div className="relative mx-auto max-w-7xl px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
        <div>
          <SectionEyebrow>ABOUT AYCNC</SectionEyebrow>
          <h1 className="mt-5 font-display font-black text-navy leading-[1.05]" style={{ fontSize: "clamp(2.75rem,6vw,5.5rem)" }}>
            {["Africa's Voice", "at the", "Negotiation Table"].map((line, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08, duration: 0.6 }}
                className={`block ${i === 2 ? "italic text-forest" : ""}`}
              >{line}</motion.span>
            ))}
          </h1>
          <p className="mt-6 font-body text-ink text-[1.0625rem] leading-relaxed max-w-xl">
            AYCNC is a permanent continental institution dedicated to building the next generation of African climate negotiators through formal training, mentorship, and accredited deployment at the UNFCCC.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["55 AU Member States", "50 Inaugural Delegates", "Endorsed February 2026"].map((f) => (
              <span key={f} className="rounded-full border border-navy/20 px-4 py-1.5 font-mono text-xs text-navy">{f}</span>
            ))}
          </div>
        </div>

        <div className="relative h-[420px]">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 80, rotate: 0 }} animate={{ opacity: 1, x: 0, rotate: c.rot }}
              transition={{ delay: 0.2 + i * 0.2, type: "spring", stiffness: 80 }}
              className={`absolute w-[260px] h-[155px] rounded-2xl shadow-xl p-5 ${c.bg}`}
              style={{ top: `${i * 90}px`, right: `${i * 30}px` }}
            >
              <div className="font-mono text-[0.7rem] tracking-widest opacity-80">{c.tag}</div>
              <div className="mt-2 font-display font-bold text-lg leading-snug">{c.title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MissionBlock() {
  const objectives = [
    "Establish a permanent continental centre of excellence in climate diplomacy",
    "Build a pipeline of 500 trained African youth negotiators by Year 5",
    "Ensure gender, sub-regional, and linguistic balance across all cohorts",
    "Pair every delegate with a serving AGN mentor",
    "Deploy delegates into official accredited UNFCCC delegations",
    "Publish African youth research in the AYCNC Research Journal",
    "Strengthen Africa's collective negotiating position through evidence-based briefs",
  ];
  return (
    <section className="relative bg-cream py-24 overflow-hidden">
      <svg className="svg-deco" style={{ right: "5%", top: "0", height: "100%" }} width="80" height="100%" viewBox="0 0 80 600" preserveAspectRatio="none">
        <path d="M40 0 Q10 100 40 200 T40 400 T40 600" fill="none" stroke="rgba(245,166,35,0.25)" strokeWidth="2" />
      </svg>
      <svg className="svg-deco" style={{ left: "8%", top: "20%" }} width="40" height="40" viewBox="0 0 40 40">
        <polygon points="20,0 40,20 20,40 0,20" fill="rgba(27,58,107,0.15)" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-6 md:px-12 grid lg:grid-cols-2 gap-16">
        <div>
          <SectionEyebrow>OUR VISION</SectionEyebrow>
          <blockquote className="mt-6 font-display italic text-navy-dark text-3xl border-l-4 border-gold pl-8 leading-relaxed">
            A continent where African youth shape every climate decision that affects African lives.
          </blockquote>
        </div>
        <div>
          <SectionEyebrow>OUR MISSION</SectionEyebrow>
          <p className="mt-6 font-body text-ink leading-relaxed">
            To establish a permanent institutional pathway for African youth into formal climate negotiations through rigorous training, structured mentorship, and accredited deployment.
          </p>
          <h3 className="mt-10 font-display font-bold text-navy text-xl">Seven Strategic Objectives</h3>
          <AnimatedSection className="mt-5 space-y-3" stagger={80}>
            {objectives.map((o, i) => (
              <motion.div key={i} variants={fadeUpItem} className="flex items-start gap-4">
                <span className="flex-shrink-0 grid place-items-center w-8 h-8 rounded-full bg-gold/15 font-mono text-gold-muted text-xs font-bold">{String(i + 1).padStart(2, "0")}</span>
                <p className="font-body text-ink text-[0.95rem] leading-relaxed pt-1">{o}</p>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function GovernanceBlock() {
  return (
    <section className="relative bg-navy-dark py-24 overflow-hidden">
      <svg className="svg-deco" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" style={{ inset: 0 }}>
        <pattern id="tri" patternUnits="userSpaceOnUse" width="60" height="52">
          <polygon points="30,0 60,52 0,52" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#tri)" />
      </svg>

      <div className="relative mx-auto max-w-5xl px-6 md:px-12">
        <div className="text-center">
          <SectionEyebrow dark>GOVERNANCE ARCHITECTURE</SectionEyebrow>
          <h2 className="mt-4 font-display font-black text-white text-3xl md:text-5xl">A continental institution, properly structured.</h2>
        </div>

        <div className="mt-14 space-y-4">
          <GovTier level="L1 · STRATEGIC" name="CAHOSCC · AMCEN" fn="Strategic guidance and political endorsement." classes="bg-gold/15 border-gold/30 border-l-4 border-l-gold" width="w-full" />
          <GovTier level="L2 · GOVERNING" name="Steering Committee" fn="Programme oversight and annual ratification." classes="bg-white/[0.08] border-white/15" width="w-4/5 mx-auto" />
          <div className="grid md:grid-cols-2 gap-4 w-3/5 mx-auto">
            <GovTier level="L3 · ADVISORY" name="Technical Advisory Board" fn="Curriculum design and standards." classes="bg-white/[0.06] border-white/10" width="w-full" />
            <GovTier level="L3 · OPERATIONAL" name="Secretariat" fn="Day-to-day operations from Dar es Salaam." classes="bg-white/[0.06] border-white/10" width="w-full" />
          </div>
          <GovTier level="L4 · MENTORSHIP" name="AGN Mentor Pool" fn="1:1 pairing with serving African negotiators." classes="bg-forest/20 border-forest/40" width="w-2/5 mx-auto" />
        </div>
      </div>
    </section>
  );
}

function GovTier({ level, name, fn, classes, width }: { level: string; name: string; fn: string; classes: string; width: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
      className={`${width} rounded-xl border p-5 ${classes}`}
    >
      <div className="font-mono text-gold/60 text-[0.7rem] tracking-widest">{level}</div>
      <div className="mt-1 font-display font-bold text-white text-lg md:text-xl">{name}</div>
      <div className="mt-1 font-body text-white/65 text-sm">{fn}</div>
    </motion.div>
  );
}

function TanzaniaBlock() {
  return (
    <section className="relative bg-cream py-24 overflow-hidden">
      <svg className="svg-deco" style={{ top: "15%", left: "5%" }} width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="rgba(42,122,75,0.2)" strokeWidth="2">
        <path d="M50 90 Q20 70 30 40 Q50 20 70 40 Q80 70 50 90 Z M50 90 L50 50" />
      </svg>
      <svg className="svg-deco" style={{ top: "10%", right: "8%" }} width="120" height="120" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="20" fill="rgba(245,166,35,0.2)" />
        {Array.from({length:12}).map((_,i)=>{const a=(i*30)*Math.PI/180,x1=60+30*Math.cos(a),y1=60+30*Math.sin(a),x2=60+45*Math.cos(a),y2=60+45*Math.sin(a);return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(245,166,35,0.2)" strokeWidth="2"/>})}
      </svg>

      <div className="relative mx-auto max-w-5xl px-6 md:px-12 text-center">
        <PillBadge color="green">HOST COUNTRY</PillBadge>
        <h2 className="mt-4 font-display font-black text-navy text-3xl md:text-5xl">Why Tanzania.</h2>
        <p className="mt-6 font-body text-ink text-lg leading-relaxed max-w-3xl mx-auto">
          The United Republic of Tanzania was selected by AMCEN-20 as the host country for AYCNC. Tanzania has a long-standing record of climate leadership in the AGN, strong political will from the VP Office, and the institutional capacity to host a permanent continental centre.
        </p>
      </div>
    </section>
  );
}

function DifferenceBlock() {
  const points = [
    "Permanent institution, not a one-off project",
    "Continental mandate from CAHOSCC and AMCEN",
    "Direct AGN mentorship, not generic training",
    "Real UNFCCC accreditation, not simulated negotiations",
    "55-country reach with sub-regional balance",
    "12-month commitment, not a short workshop",
  ];
  return (
    <section className="relative bg-white py-24 overflow-hidden">
      <svg className="svg-deco" style={{ top: "15%", right: "5%" }} width="200" height="200" viewBox="0 0 200 200">
        {[[40,40],[120,40],[40,120],[120,120],[80,80]].map(([x,y],i)=><polyline key={i} points={`${x-10},${y} ${x-2},${y+8} ${x+12},${y-8}`} fill="none" stroke="rgba(42,122,75,0.15)" strokeWidth="3"/>)}
      </svg>

      <div className="relative mx-auto max-w-5xl px-6 md:px-12">
        <div className="text-center">
          <SectionEyebrow>WHAT MAKES AYCNC DIFFERENT</SectionEyebrow>
          <h2 className="mt-4 font-display font-black text-navy text-3xl md:text-5xl">Six things you won't find anywhere else.</h2>
        </div>
        <AnimatedSection className="mt-12 grid md:grid-cols-2 gap-4">
          {points.map((p, i) => (
            <motion.div key={i} variants={fadeUpItem} className="flex items-start gap-4 p-5 rounded-xl bg-cream border border-navy/8">
              <div className="grid place-items-center h-8 w-8 rounded-full bg-forest text-white flex-shrink-0">✓</div>
              <p className="font-body text-navy-dark text-[0.95rem] pt-1">{p}</p>
            </motion.div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
