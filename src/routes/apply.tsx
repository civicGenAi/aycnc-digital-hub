import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { SectionEyebrow, AnimatedSection, fadeUpItem } from "@/components/ui/section";
import { PillBadge } from "@/components/ui/PillBadge";
import { CountdownTimer } from "@/components/ui/CountdownTimer";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useSeo } from "@/lib/seo";

const OPEN_DATE = new Date("2026-07-15T00:00:00Z");

export default function ApplyPage() {
  useSeo({
    title: "Apply · AYCNC Cohort 1",
    description:
      "Applications for AYCNC Cohort 1 open 15 July to 15 August 2026. Open to climate-active African youth aged 18–35 across all 55 AU member states.",
    ogDescription: "Your seat at the table awaits.",
    ogUrl: "/apply",
    canonical: "/apply",
  });
  return (
    <div>
      <Hero />
      <GeneralEligibility />
      <EligibilityCriteria />
      <FAQs />
      <Partners />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative bg-hero-mesh pt-32 pb-20 overflow-hidden">
      {Array.from({ length: 18 }).map((_, i) => (
        <span
          key={i}
          className="svg-deco h-1.5 w-1.5 rounded-full bg-gold/30 animate-float-y"
          style={{
            top: `${((i * 13) % 90) + 5}%`,
            left: `${(i * 17 + 3) % 95}%`,
            animationDelay: `${(i % 8) * 0.5}s`,
          }}
        />
      ))}
      <div className="relative mx-auto max-w-4xl px-6 md:px-12 text-center">
        <PillBadge color="gold">APPLY FOR COHORT 1</PillBadge>
        <h1
          className="mt-6 font-display font-bold text-white leading-[1.05]"
          style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)" }}
        >
          Your Seat at the Table Awaits
        </h1>
        <p className="mt-6 font-body text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
          Applications open 15 July to 15 August 2026. Fifty inaugural delegates selected across all
          55 African Union member states.
        </p>
        <div className="mt-10">
          <CountdownTimer target={OPEN_DATE} />
        </div>
      </div>
    </section>
  );
}

const phases = [
  {
    tag: "PHASE 1",
    title: "Foundation Training",
    meta: "10 weeks · Residential · Dar es Salaam",
    body: "Intensive in-person grounding in UNFCCC architecture, negotiation craft, climate science, and Africa's strategic positions.",
  },
  {
    tag: "PHASE 2",
    title: "Immersion & Mentorship",
    meta: "6 months · Hybrid",
    body: "One-to-one pairing with a serving AGN negotiator, shadowing of SBSTA and SBI sessions, and a published policy brief.",
  },
  {
    tag: "PHASE 3",
    title: "COP Deployment",
    meta: "2 weeks · UNFCCC COP",
    body: "Top-performing delegates deployed with full accreditation inside official African delegations at the next COP.",
  },
];

function GeneralEligibility() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-12">
        <SectionEyebrow>GENERAL ELIGIBILITY</SectionEyebrow>
        <h2 className="mt-4 font-display text-navy text-3xl md:text-4xl">
          A continental fellowship, built to last.
        </h2>
        <div className="mt-6 space-y-5 font-body text-ink leading-relaxed max-w-3xl">
          <p>
            The{" "}
            <strong className="font-semibold text-navy">
              African Youth Climate Negotiation Center (AYCNC)
            </strong>{" "}
            is a permanent, pan-African institution that equips young Africans with the technical
            knowledge, diplomatic fluency, and institutional access to participate in — and
            progressively lead — international climate negotiations across the{" "}
            <strong className="font-semibold text-navy">UNFCCC, UNCCD and UN&nbsp;CBD</strong>.
          </p>
          <p>
            AYCNC was established by a resolution of the{" "}
            <strong className="font-semibold text-navy">Africa Group of Negotiators (AGN)</strong>,
            endorsed by <strong className="font-semibold text-navy">AMCEN-20</strong> and the{" "}
            <strong className="font-semibold text-navy">
              Committee of African Heads of State and Government on Climate Change (CAHOSCC)
            </strong>
            , and is hosted by the{" "}
            <strong className="font-semibold text-navy">United Republic of Tanzania</strong> under
            the Vice President's Office (Union &amp; Environment). The fellowship is delivered in
            three phases:
          </p>
        </div>
        <AnimatedSection className="mt-10 grid md:grid-cols-3 gap-5">
          {phases.map((p) => (
            <motion.div
              key={p.tag}
              variants={fadeUpItem}
              className="rounded-2xl border border-navy/10 bg-cream p-6"
            >
              <PillBadge color="navy">{p.tag}</PillBadge>
              <h3 className="mt-3 font-display text-navy text-xl">{p.title}</h3>
              <div className="mt-1 font-mono text-xs uppercase tracking-wider text-gold-muted">
                {p.meta}
              </div>
              <p className="mt-3 font-body text-ink text-sm leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}

const criteria = [
  "Citizen of an African Union member state, aged 18–35",
  "Genuine engagement in climate action, research, advocacy, or policy",
  "Holding or completing a tertiary qualification, or equivalent practitioner experience",
  "Able to commit fully to all three phases across the 12-month programme",
  "Proficiency in at least one working language — English, French, or Arabic",
  "Open to all five AU sub-regions, with gender and sub-regional balance",
];

function EligibilityCriteria() {
  return (
    <section className="bg-cream py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-6 md:px-12">
        <SectionEyebrow>ELIGIBILITY CRITERIA</SectionEyebrow>
        <h2 className="mt-4 font-display text-navy text-3xl md:text-4xl">
          Who we are looking for.
        </h2>
        <AnimatedSection className="mt-8 grid sm:grid-cols-2 gap-4">
          {criteria.map((c) => (
            <motion.div
              key={c}
              variants={fadeUpItem}
              className="flex items-start gap-3 rounded-xl bg-white border border-navy/10 p-5"
            >
              <span className="grid place-items-center h-7 w-7 flex-shrink-0 rounded-full bg-forest text-white">
                <Check size={16} />
              </span>
              <p className="font-body text-navy-dark text-sm leading-relaxed pt-0.5">{c}</p>
            </motion.div>
          ))}
        </AnimatedSection>
        <p className="mt-8 font-body text-ink text-sm">
          The programme is delivered in English, French and Arabic. For enquiries, contact{" "}
          <a href="mailto:apply@aycnc.org" className="text-gold underline">
            apply@aycnc.org
          </a>
          .
        </p>
      </div>
    </section>
  );
}

const faqGroups = [
  {
    group: "About the Fellowship",
    items: [
      {
        q: "What is the African Youth Climate Negotiation Center (AYCNC)?",
        a: "AYCNC is a permanent, pan-African institution that equips exceptional young Africans with the technical knowledge, diplomatic fluency, and institutional access required to participate in — and progressively lead — international climate negotiations. It is a structured pipeline, not a one-off project, running from foundational training through mentored practice to direct deployment in UNFCCC negotiations.",
      },
      {
        q: "What is the format and duration of the training?",
        a: "The fellowship runs for 12 months across three phases: a 10-week residential Foundation Training in Dar es Salaam, a 6-month hybrid Immersion & Mentorship phase, and a COP Deployment phase that places top delegates inside official African delegations at the next UNFCCC COP.",
      },
      {
        q: "Does AYCNC cover costs for participants?",
        a: "AYCNC is implemented by the Government of Tanzania through the Vice President's Office, with strategic partners including the African Union Commission, UNDP, GIZ and UNEP. The residential Foundation Training and COP deployment are delivered through the programme; the specific financial terms and any support available are confirmed in each cohort's official call for applications.",
      },
      {
        q: "Where does the in-person residential training take place?",
        a: "In Dar es Salaam, United Republic of Tanzania, at the Institute of Environment, Climate Change and Sustainable Development (Bunju), which serves as AYCNC's operational base.",
      },
      {
        q: "What languages are used?",
        a: "AYCNC works in English, French and Arabic. Proficiency in at least one of these working languages is required to participate.",
      },
      {
        q: "How competitive is the selection process?",
        a: "The inaugural cohort selects 50 delegates from across all 55 AU member states, balanced by sub-region and gender. Selection is highly competitive and merit-based, and welcomes applicants from academic, practitioner, and community pathways.",
      },
    ],
  },
  {
    group: "Application Process & Requirements — 2026 Cohort",
    items: [
      {
        q: "What is the application deadline for the 2026 Cohort?",
        a: "Applications for the inaugural cohort open on 15 July 2026 and close on 15 August 2026.",
      },
      {
        q: "Who is eligible to apply?",
        a: "Citizens of an AU member state aged 18–35 with demonstrable engagement in climate action, research, advocacy, or policy, who can commit fully to all three phases of the 12-month programme.",
      },
      {
        q: "Where can I submit my application?",
        a: "Applications are submitted through the AYCNC website during the open window. Questions can be sent to apply@aycnc.org.",
      },
      {
        q: "What are the application requirements?",
        a: "A completed application form, a short statement of motivation, evidence of your climate engagement, two references, and confirmation of proficiency in one working language (English, French, or Arabic).",
      },
      {
        q: "Is eligibility limited to applicants with a climate-related academic background?",
        a: "No. AYCNC welcomes academic, practitioner, and community pathways. What matters is genuine climate engagement and the commitment to complete all three phases.",
      },
      {
        q: "Who organizes and governs AYCNC?",
        a: "AYCNC was established by a resolution of the Africa Group of Negotiators (AGN) and endorsed by AMCEN-20 and CAHOSCC. It is hosted by the United Republic of Tanzania under the Vice President's Office (Union & Environment), co-implemented with the Ministry of Foreign Affairs and the Ministry of Youth.",
      },
    ],
  },
];

function FAQs() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-6 md:px-12">
        <div className="text-center">
          <SectionEyebrow>FAQS</SectionEyebrow>
          <h2 className="mt-4 font-display text-navy text-3xl md:text-4xl">Questions, answered.</h2>
        </div>
        {faqGroups.map((g) => (
          <div key={g.group} className="mt-12">
            <h3 className="font-display text-navy text-xl md:text-2xl">{g.group}</h3>
            <Accordion type="single" collapsible className="mt-4">
              {g.items.map((it, i) => (
                <AccordionItem key={i} value={`${g.group}-${i}`} className="border-navy/10">
                  <AccordionTrigger className="text-left font-body font-semibold text-navy hover:text-gold hover:no-underline">
                    {it.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-ink leading-relaxed">
                    {it.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section className="relative bg-navy-dark py-16 md:py-20 overflow-hidden">
      <div className="relative mx-auto max-w-4xl px-6 md:px-12 text-center">
        <SectionEyebrow dark>PARTNERS</SectionEyebrow>
        <h2 className="mt-4 font-display text-white text-2xl md:text-3xl">
          Strategic engagement with the Africa Group of Negotiators.
        </h2>
        <p className="mt-4 font-body text-white/70 max-w-2xl mx-auto leading-relaxed">
          AYCNC operates through direct engagement channels with the Africa Group of Negotiators
          (AGN) on Climate Change, alongside the African Union Commission, UNDP, GIZ and UNEP.
        </p>
        <div className="mt-8">
          <Link
            to="/partners"
            className="inline-flex items-center rounded-full bg-gold px-7 py-3 font-display font-semibold text-navy-dark hover:scale-[1.04] transition-transform"
          >
            See our partners
          </Link>
        </div>
      </div>
    </section>
  );
}
