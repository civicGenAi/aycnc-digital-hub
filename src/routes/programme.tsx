import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionEyebrow, AnimatedSection, fadeUpItem } from "@/components/ui/section";
import { PillBadge } from "@/components/ui/PillBadge";
import { programmeModules } from "@/constants/programmeData";
import { GraduationCap, Users, Globe2, ScrollText, Award, BookOpen, Network, Briefcase } from "lucide-react";

export const Route = createFileRoute("/programme")({
  head: () => ({
    meta: [
      { title: "Programme · AYCNC" },
      { name: "description", content: "10 weeks of intensive training. Then real deployment in official COP delegations. Three phases, eight modules." },
      { property: "og:title", content: "Programme · AYCNC" },
      { property: "og:description", content: "From the classroom to the COP negotiating table." },
      { property: "og:url", content: "/programme" },
    ],
    links: [{ rel: "canonical", href: "/programme" }],
  }),
  component: ProgrammePage,
});

function ProgrammePage() {
  return (
    <div>
      <Hero />
      <ThreePhases />
      <ModulesBento />
      <COPDeployment />
      <AlumniNetwork />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative bg-dark-mesh pt-32 pb-20 overflow-hidden" style={{ backgroundImage: "linear-gradient(160deg,#0A1628 0%,#0F2244 100%), repeating-linear-gradient(0deg,transparent 47px,rgba(255,255,255,0.04) 47px,rgba(255,255,255,0.04) 48px)" }}>
      <svg className="svg-deco" style={{ top: "12%", right: "5%" }} width="320" height="200" viewBox="0 0 320 200" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5">
        <path d="M40 180 A140 140 0 0 1 280 180" />
        {Array.from({length:9}).map((_,i)=>{const a=Math.PI*(i/8),x1=160+140*Math.cos(Math.PI-a),y1=180-140*Math.sin(a)+0,x2=160+125*Math.cos(Math.PI-a),y2=180-125*Math.sin(a);return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}/>})}
      </svg>
      <svg className="svg-deco" style={{ bottom: "10%", left: "5%" }} width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="rgba(44,82,130,0.4)" strokeWidth="1">
        <circle cx="40" cy="40" r="15" /><circle cx="40" cy="40" r="25" /><circle cx="40" cy="40" r="35" />
      </svg>

      <div className="relative mx-auto max-w-5xl px-6 md:px-12 text-center">
        <PillBadge color="white">THE PROGRAMME</PillBadge>
        <h1 className="mt-6 font-display font-black text-white leading-[1.05]" style={{ fontSize: "clamp(3rem,8vw,7.5rem)" }}>
          From Classroom<br /><span className="italic gradient-text-gold">to COP</span>
        </h1>
        <div className="mt-10 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[0,1].map((k) => (
              <span key={k} className="font-mono text-white/45 text-sm tracking-widest uppercase pr-8">
                {programmeModules.map(m => m.title).join(" · ")} ·{" "}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <PillBadge color="gold">3 PHASES</PillBadge>
          <PillBadge color="white">8 MODULES</PillBadge>
          <PillBadge color="green">12 MONTHS</PillBadge>
        </div>
      </div>
    </section>
  );
}

function ThreePhases() {
  return (
    <section className="relative bg-white py-24 overflow-hidden">
      <svg className="svg-deco" style={{ right: "2%", top: "10%", height: "70%" }} width="40" height="100%" viewBox="0 0 40 600" preserveAspectRatio="none">
        <line x1="20" y1="0" x2="20" y2="580" stroke="rgba(27,58,107,0.1)" strokeWidth="2" strokeDasharray="6 8" />
        <polygon points="10,580 30,580 20,600" fill="rgba(27,58,107,0.15)" />
      </svg>

      <div className="mx-auto max-w-7xl px-6 md:px-12 space-y-24 relative">
        <PhaseRow
          n="01" badge="PHASE 1 · FOUNDATION" title="Foundation Training" duration="10 weeks · Residential · Dar es Salaam"
          body="Intensive in-person training covering the full UNFCCC architecture, negotiation craft, climate science, and Africa's strategic positions. Daily classes, weekly simulations, monthly mock COPs."
          modules={["UNFCCC", "Science", "Negotiation", "Drafting", "Africa Priorities", "Advocacy", "Diplomacy", "Coalition Building"]}
          color="navy" reverse={false}
          deliverables={["Diploma in Climate Diplomacy", "Mock COP Certification", "Negotiation Portfolio"]}
        />
        <div className="bg-cream rounded-3xl p-8">
          <PhaseRow
            n="02" badge="PHASE 2 · IMMERSION" title="Immersion and Mentorship" duration="6 months · Hybrid · Remote and Bonn SB"
            body="Each delegate paired 1:1 with a serving AGN negotiator. Shadow SBSTA and SBI sessions. Produce a published policy brief in the AYCNC Research Journal."
            modules={["1:1 Mentorship", "SB Shadowing", "Policy Brief", "Journal Publication"]}
            color="forest" reverse={true}
            deliverables={["Published Policy Brief", "Mentor Endorsement", "SB Session Report"]}
          />
        </div>
        <Phase3 />
      </div>
    </section>
  );
}

function PhaseRow({ n, badge, title, duration, body, modules, color, reverse, deliverables }: any) {
  const colorClass = color === "navy" ? "text-navy" : "text-forest";
  return (
    <div className={`grid lg:grid-cols-[62%_38%] gap-8 items-center ${reverse ? "lg:grid-flow-dense" : ""}`}>
      <div className={reverse ? "lg:col-start-2" : ""}>
        <PillBadge color={color === "navy" ? "navy" : "green"}>{badge}</PillBadge>
        <h3 className={`mt-4 font-display font-bold text-4xl ${colorClass}`}>{title}</h3>
        <div className="mt-2 font-mono text-gold text-sm">{duration}</div>
        <p className="mt-5 font-body text-ink text-lg leading-relaxed">{body}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {modules.map((m: string) => <span key={m} className="font-mono text-xs rounded-md px-3 py-1.5 bg-navy/5 text-navy/70">{m}</span>)}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        className={`relative overflow-hidden rounded-3xl p-8 shadow-2xl ${color === "navy" ? "bg-navy" : "bg-forest-dark"} ${reverse ? "lg:col-start-1 lg:row-start-1" : ""}`}
      >
        <span className="absolute top-4 right-4 font-display font-black text-white/[0.08] text-8xl leading-none select-none">{n}</span>
        <GraduationCap size={40} className="text-gold relative z-10" />
        <h4 className="mt-6 font-display font-bold text-white text-xl relative z-10">Deliverables</h4>
        <ul className="mt-4 space-y-2 relative z-10">
          {deliverables.map((d: string) => (
            <li key={d} className="flex items-start gap-3 text-white/80 text-sm"><span className="text-gold">✓</span> {d}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

function Phase3() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
      className="relative overflow-hidden rounded-3xl p-10 md:p-14"
      style={{ background: "linear-gradient(to right, #0F2244, #1B3A6B, #1A4731)" }}
    >
      <span className="absolute top-6 right-6 font-display font-black text-gold/15 text-9xl leading-none select-none">03</span>
      <div className="grid lg:grid-cols-2 gap-10 relative z-10">
        <div>
          <PillBadge color="gold">PHASE 3 · DEPLOYMENT</PillBadge>
          <h3 className="mt-4 font-display italic font-bold text-gold text-4xl md:text-5xl">COP Deployment</h3>
          <p className="mt-5 font-body text-white/80 text-lg leading-relaxed">
            Up to 15 top-performing delegates are deployed with full UNFCCC accreditation in official African delegations at the next COP. Real briefings. Real rooms. Real outcomes.
          </p>
          <span className="mt-5 inline-block rounded-full bg-gold text-navy-dark px-4 py-2 font-mono text-xs">UP TO 15 DELEGATES AT COP</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {["Official Accreditation", "Africa Pavilion", "AGN Shadowing", "Post-COP Reporting"].map((t) => (
            <div key={t} className="rounded-xl bg-white/10 border border-white/15 p-4">
              <div className="font-display font-bold text-white text-sm">{t}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ModulesBento() {
  return (
    <section className="relative bg-cream py-24 overflow-hidden">
      <svg className="svg-deco" style={{ top: "8%", right: "5%" }} width="160" height="160" viewBox="0 0 160 160" fill="none" stroke="rgba(27,58,107,0.1)" strokeWidth="1.5">
        <path d="M80,80 m-5,0 a5,5 0 1,0 10,0 a5,5 0 1,0 -10,0 M80,80 m-12,0 a12,12 0 1,0 24,0 a12,12 0 1,0 -24,0 M80,80 m-22,0 a22,22 0 1,0 44,0 a22,22 0 1,0 -44,0 M80,80 m-35,0 a35,35 0 1,0 70,0 a35,35 0 1,0 -70,0" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto">
          <SectionEyebrow>EIGHT MODULES</SectionEyebrow>
          <h2 className="mt-4 font-display font-black text-navy text-3xl md:text-5xl">The full curriculum.</h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-4 auto-rows-min gap-4" style={{ gridTemplateAreas: '"m1 m1 m2 m3" "m4 m5 m5 m6" "m7 m8 m8 m8"' }}>
          {programmeModules.map((m) => (
            <motion.div
              key={m.num}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition-shadow"
              style={{ gridArea: m.area } as any}
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-gold font-bold">{m.num}</span>
                <span className="font-mono text-[0.65rem] uppercase tracking-wider bg-navy/5 text-navy/60 px-2 py-1 rounded">{m.mode}</span>
              </div>
              <h3 className="mt-3 font-display font-bold text-navy text-lg leading-tight">{m.title}</h3>
              <div className="mt-1 font-mono text-xs text-gold-muted">{m.duration}</div>
              <p className="mt-3 font-body text-ink text-sm leading-relaxed">{m.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function COPDeployment() {
  const cards = [
    { icon: Award, title: "Official Accreditation", body: "Full UNFCCC delegate accreditation through national focal points." },
    { icon: Globe2, title: "Africa Pavilion", body: "Speaking and side-event opportunities at the Africa Pavilion." },
    { icon: Users, title: "AGN Shadowing", body: "Sit in the AGN coordination room. Witness Africa's positions form in real time." },
    { icon: ScrollText, title: "Post-COP Reporting", body: "Publish a public outcomes report and brief national focal points." },
  ];
  return (
    <section className="relative bg-navy-dark py-24 overflow-hidden">
      <span className="svg-deco font-display font-black text-white/[0.04] leading-none select-none pointer-events-none" style={{ fontSize: "30vw", top: "10%", left: "50%", transform: "translateX(-50%)" }}>COP</span>
      <svg className="svg-deco" style={{ top: "20%", left: "5%" }} width="500" height="500" viewBox="0 0 500 500" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1">
        <ellipse cx="250" cy="250" rx="200" ry="80" />
        <ellipse cx="250" cy="250" rx="200" ry="80" transform="rotate(60 250 250)" />
        <ellipse cx="250" cy="250" rx="200" ry="80" transform="rotate(120 250 250)" />
      </svg>

      <div className="relative mx-auto max-w-6xl px-6 md:px-12">
        <div className="text-center">
          <SectionEyebrow dark>COP DEPLOYMENT</SectionEyebrow>
          <h2 className="mt-4 font-display font-black text-white text-3xl md:text-5xl">Real rooms. Real outcomes.</h2>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/10 border border-white/15 rounded-2xl p-7"
              >
                <Icon size={36} className="text-gold" />
                <h3 className="mt-5 font-display font-bold text-white text-xl">{c.title}</h3>
                <p className="mt-2 font-body text-white/70">{c.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AlumniNetwork() {
  const benefits = [
    { icon: BookOpen, title: "Lifetime Research Journal Access", body: "Publish in and access the AYCNC Research Journal for life." },
    { icon: Users, title: "Annual Alumni Convening", body: "Annual continental gathering at AU summit week." },
    { icon: Network, title: "Pan-African Network", body: "Direct connection to alumni from all 55 AU member states." },
    { icon: Award, title: "Mentor Pool Eligibility", body: "Senior alumni return as mentors for incoming cohorts." },
    { icon: Briefcase, title: "Career Placement Support", body: "Curated opportunities with AU, UNFCCC, and partner institutions." },
    { icon: Globe2, title: "Speaking Opportunities", body: "Represent AYCNC at international climate convenings." },
  ];
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto">
          <SectionEyebrow>ALUMNI NETWORK</SectionEyebrow>
          <h2 className="mt-4 font-display font-black text-navy text-3xl md:text-5xl">Once a delegate, always a delegate.</h2>
        </div>
        <AnimatedSection className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div key={i} variants={fadeUpItem} className="bg-white rounded-2xl p-6 border border-navy/8 hover:shadow-lg transition-shadow">
                <Icon size={32} className="text-gold" />
                <h3 className="mt-4 font-display font-bold text-navy text-lg">{b.title}</h3>
                <p className="mt-2 font-body text-ink text-sm leading-relaxed">{b.body}</p>
              </motion.div>
            );
          })}
        </AnimatedSection>
      </div>
    </section>
  );
}
