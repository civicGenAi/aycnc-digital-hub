import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { toast } from "sonner";
import { SectionEyebrow, AnimatedSection, fadeUpItem } from "@/components/ui/section";
import { PillBadge } from "@/components/ui/PillBadge";
import { CountdownTimer } from "@/components/ui/CountdownTimer";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { auMemberStates } from "@/constants/auMemberStates";
import { useSeo } from "@/lib/seo";

const OPEN_DATE = new Date("2026-07-15T00:00:00Z");

export default function ApplyPage() {
  useSeo({
    title: "Apply · AYCNC Cohort 1",
    description:
      "Applications for AYCNC Cohort 1 open 15 July to 15 August 2026. Open to climate-active African youth aged 18 to 35 across all 55 AU member states.",
    ogDescription: "Your seat at the table awaits.",
    ogUrl: "/apply",
    canonical: "/apply",
  });
  const [formOpen, setFormOpen] = useState(false);
  const openForm = () => setFormOpen(true);
  return (
    <div>
      <Hero onApply={openForm} />
      <GeneralEligibility />
      <EligibilityCriteria />
      <FAQs />
      <ApplyCTA onApply={openForm} />
      <Partners />
      <ApplicationDialog open={formOpen} onOpenChange={setFormOpen} />
    </div>
  );
}

function Hero({ onApply }: { onApply: () => void }) {
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
        <div className="mt-10">
          <button
            onClick={onApply}
            className="relative inline-flex items-center overflow-hidden rounded-full bg-gold px-8 py-4 font-display font-semibold text-navy-dark transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_40px_rgba(245,166,35,0.5)]"
          >
            <span className="relative z-10">Start your application</span>
            <span className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          </button>
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
            knowledge, diplomatic fluency, and institutional access to participate in, and
            progressively lead, international climate negotiations across the{" "}
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
  "Citizen of an African Union member state, aged 18 to 35",
  "Genuine engagement in climate action, research, advocacy, or policy",
  "Holding or completing a tertiary qualification, or equivalent practitioner experience",
  "Able to commit fully to all three phases across the 12-month programme",
  "Proficiency in at least one working language: English, French, or Arabic",
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
        a: "AYCNC is a permanent, pan-African institution that equips exceptional young Africans with the technical knowledge, diplomatic fluency, and institutional access required to participate in, and progressively lead, international climate negotiations. It is a structured pipeline, not a one-off project, running from foundational training through mentored practice to direct deployment in UNFCCC negotiations.",
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
    group: "Application Process & Requirements for the 2026 Cohort",
    items: [
      {
        q: "What is the application deadline for the 2026 Cohort?",
        a: "Applications for the inaugural cohort open on 15 July 2026 and close on 15 August 2026.",
      },
      {
        q: "Who is eligible to apply?",
        a: "Citizens of an AU member state aged 18 to 35 with demonstrable engagement in climate action, research, advocacy, or policy, who can commit fully to all three phases of the 12-month programme.",
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

function ApplyCTA({ onApply }: { onApply: () => void }) {
  return (
    <section className="bg-cream pb-20 md:pb-24">
      <div className="mx-auto max-w-3xl px-6 md:px-12">
        <div className="rounded-3xl bg-navy-dark p-8 md:p-12 text-center">
          <h2 className="font-display text-white text-2xl md:text-3xl">
            Ready to take your seat at the table?
          </h2>
          <p className="mt-3 font-body text-white/70 max-w-md mx-auto">
            Begin your application for the inaugural cohort. It only takes a few minutes.
          </p>
          <button
            onClick={onApply}
            className="mt-7 inline-flex items-center rounded-full bg-gold px-8 py-4 font-display font-semibold text-navy-dark hover:scale-[1.04] transition-transform"
          >
            Start your application
          </button>
        </div>
      </div>
    </section>
  );
}

function fireApplicationToast() {
  const ref = `AYCNC-C1-${Math.floor(100000 + Math.random() * 900000)}`;
  toast.custom(
    () => (
      <div className="flex w-[360px] max-w-[88vw] items-start gap-3 rounded-2xl border border-gold/30 bg-navy-dark p-4 shadow-2xl">
        <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-full bg-gold text-navy-dark">
          <Check size={24} />
        </span>
        <div className="min-w-0">
          <p className="font-display text-white text-base leading-tight">Application submitted</p>
          <p className="mt-1 font-body text-sm leading-relaxed text-white/70">
            Reference {ref}. The Secretariat will be in touch within 30 days.
          </p>
        </div>
      </div>
    ),
    { duration: 6000 },
  );
}

const stepLabels = ["Personal", "Education", "Experience", "Statement", "Pathway", "Review"];
const inputCls =
  "w-full border border-navy/20 rounded-xl px-4 py-3 font-body text-navy-dark focus:border-gold focus:ring-2 focus:ring-gold/30 focus:outline-none transition-all";
const labelCls = "block font-mono text-xs uppercase tracking-wider text-navy/70 mb-2";

function ApplicationDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [step, setStep] = useState(0);
  const form = useForm({ mode: "onChange" });

  const close = (next: boolean) => {
    onOpenChange(next);
    if (!next) setStep(0);
  };

  const submit = form.handleSubmit(() => {
    close(false);
    form.reset();
    fireApplicationToast();
  });

  return (
    <Dialog open={open} onOpenChange={close}>
      <DialogContent className="max-w-2xl max-h-[88vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-navy text-2xl">Apply for Cohort 1</DialogTitle>
          <DialogDescription className="font-body text-ink">
            Complete each step and submit. Fields are illustrative for the upcoming 2026 cohort.
          </DialogDescription>
        </DialogHeader>

        <ProgressBar current={step} />

        <form onSubmit={submit} className="mt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              {step === 0 && <Step1 form={form} />}
              {step === 1 && <Step2 form={form} />}
              {step === 2 && <Step3 form={form} />}
              {step === 3 && <Step4 form={form} />}
              {step === 4 && <Step5 form={form} />}
              {step === 5 && <Step6 form={form} />}
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex justify-between gap-3">
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className="px-6 py-3 rounded-full border border-navy/20 font-display font-semibold text-navy disabled:opacity-30"
            >
              Back
            </button>
            {step < 5 ? (
              <button
                type="button"
                onClick={() => setStep((s) => Math.min(5, s + 1))}
                className="px-8 py-3 rounded-full bg-navy text-white font-display font-semibold"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-gold text-navy-dark font-display font-semibold hover:scale-[1.04] transition-transform"
              >
                Submit Application
              </button>
            )}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function ProgressBar({ current }: { current: number }) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-1">
      {stepLabels.map((label, i) => {
        const active = i === current;
        const done = i < current;
        return (
          <div key={i} className="flex items-center gap-2 flex-shrink-0">
            <div
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${
                active
                  ? "bg-gold text-navy-dark"
                  : done
                    ? "bg-forest text-white"
                    : "bg-white border border-navy/15 text-navy/40"
              }`}
            >
              {done ? <Check size={14} /> : <span className="font-mono text-xs font-bold">{i + 1}</span>}
              <span className="font-mono text-xs uppercase tracking-wider">{label}</span>
            </div>
            {i < stepLabels.length - 1 && <div className="w-3 h-px bg-navy/15" />}
          </div>
        );
      })}
    </div>
  );
}

function Step1({ form }: any) {
  return (
    <div>
      <h3 className="font-display text-navy text-xl">Personal Information</h3>
      <p className="mt-2 font-body text-ink text-sm">Tell us who you are.</p>
      <div className="mt-6 grid md:grid-cols-2 gap-5">
        <div className="md:col-span-2">
          <label className={labelCls}>Full Name</label>
          <input {...form.register("name")} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Nationality</label>
          <select {...form.register("nationality")} className={inputCls}>
            <option value="">Select...</option>
            {auMemberStates.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelCls}>Country of Residence</label>
          <input {...form.register("residence")} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Date of Birth</label>
          <input type="date" {...form.register("dob")} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Gender</label>
          <select {...form.register("gender")} className={inputCls}>
            <option value="">Select...</option>
            <option>Female</option>
            <option>Male</option>
            <option>Non-binary</option>
            <option>Prefer not to say</option>
          </select>
        </div>
        <div>
          <label className={labelCls}>Email</label>
          <input type="email" {...form.register("email")} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Phone</label>
          <input {...form.register("phone")} className={inputCls} />
        </div>
        <div className="md:col-span-2">
          <label className={labelCls}>Working Language</label>
          <div className="flex flex-wrap gap-3">
            {["English", "French", "Arabic"].map((l) => (
              <label
                key={l}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-navy/20 cursor-pointer hover:bg-navy/5"
              >
                <input type="radio" value={l} {...form.register("language")} />
                <span className="font-body text-sm">{l}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Step2({ form }: any) {
  return (
    <div>
      <h3 className="font-display text-navy text-xl">Education</h3>
      <div className="mt-6 grid md:grid-cols-2 gap-5">
        <div>
          <label className={labelCls}>Highest Qualification</label>
          <input {...form.register("qualification")} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Institution</label>
          <input {...form.register("institution")} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Field of Study</label>
          <input {...form.register("field")} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Graduation Year</label>
          <input type="number" {...form.register("gradYear")} className={inputCls} />
        </div>
        <div className="md:col-span-2">
          <label className={labelCls}>CV Upload</label>
          <div className="border-2 border-dashed border-navy/20 rounded-xl p-8 text-center hover:border-gold transition-colors">
            <input type="file" {...form.register("cv")} className="hidden" id="cv" />
            <label htmlFor="cv" className="cursor-pointer font-body text-ink text-sm">
              Drop your CV here or <span className="text-gold underline">browse</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step3({ form }: any) {
  const engagement = form.watch("engagement") || "";
  return (
    <div>
      <h3 className="font-display text-navy text-xl">Climate Engagement</h3>
      <div className="mt-6">
        <label className={labelCls}>Describe your climate engagement to date (max 350 words)</label>
        <textarea {...form.register("engagement")} rows={6} className={inputCls} />
        <div className="mt-2 font-mono text-xs text-ink/60 text-right">
          {engagement.split(/\s+/).filter(Boolean).length} / 350 words
        </div>
      </div>
      <div className="mt-6">
        <label className={labelCls}>Type of engagement</label>
        <div className="flex flex-wrap gap-3">
          {["Research", "Advocacy", "Community", "Policy", "Media", "Education"].map((t) => (
            <label
              key={t}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-navy/20 cursor-pointer hover:bg-navy/5"
            >
              <input type="checkbox" value={t} {...form.register("engagementTypes")} />
              <span className="font-body text-sm">{t}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

function Step4({ form }: any) {
  const questions = [
    "Why do you want to become an African climate negotiator?",
    "What contribution do you intend to make to Africa's climate position?",
    "Describe a moment when you advocated for climate justice in your community.",
  ];
  return (
    <div>
      <h3 className="font-display text-navy text-xl">Personal Statement</h3>
      <p className="mt-2 font-body text-ink text-sm">Three short responses, 200 words each.</p>
      <div className="mt-6 space-y-6">
        {questions.map((q, i) => {
          const val = form.watch(`statement${i}`) || "";
          return (
            <div key={i}>
              <p className="font-body font-semibold text-navy text-sm">{q}</p>
              <textarea {...form.register(`statement${i}`)} rows={4} className={`${inputCls} mt-2`} />
              <div className="mt-1 font-mono text-xs text-ink/60 text-right">
                {val.split(/\s+/).filter(Boolean).length} / 200 words
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Step5({ form }: any) {
  const pathway = form.watch("pathway");
  const pathways = [
    {
      id: "A",
      label: "Academic Pathway",
      desc: "Coming from formal university programmes in international relations, environmental science, or law.",
    },
    {
      id: "B",
      label: "Practitioner Pathway",
      desc: "Coming from a climate role in government, civil society, or international organisations.",
    },
    {
      id: "C",
      label: "Community Pathway",
      desc: "Coming from grassroots, indigenous, or community-led climate movements.",
    },
  ];
  return (
    <div>
      <h3 className="font-display text-navy text-xl">Pathway and References</h3>
      <div className="mt-6 space-y-3">
        {pathways.map((p) => {
          const active = pathway === p.id;
          return (
            <label
              key={p.id}
              className={`block cursor-pointer rounded-2xl border-2 p-5 transition-all ${
                active ? "border-gold bg-gold/5" : "border-navy/15 hover:border-navy/30"
              }`}
            >
              <input type="radio" value={p.id} {...form.register("pathway")} className="sr-only" />
              <div className="flex items-start gap-4">
                <span
                  className={`grid place-items-center w-8 h-8 rounded-full font-mono font-bold ${
                    active ? "bg-gold text-navy-dark" : "bg-navy/10 text-navy/60"
                  }`}
                >
                  {p.id}
                </span>
                <div>
                  <div className="font-display text-navy text-lg">{p.label}</div>
                  <div className="mt-1 font-body text-ink text-sm">{p.desc}</div>
                </div>
              </div>
            </label>
          );
        })}
      </div>
      <div className="mt-6 grid md:grid-cols-2 gap-5">
        <div>
          <label className={labelCls}>Reference 1 (name and email)</label>
          <input {...form.register("ref1")} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Reference 2 (name and email)</label>
          <input {...form.register("ref2")} className={inputCls} />
        </div>
      </div>
      <div className="mt-6 space-y-3">
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" {...form.register("decl1")} className="mt-1 accent-gold" />
          <span className="font-body text-sm text-ink">
            I confirm all information is accurate to the best of my knowledge.
          </span>
        </label>
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" {...form.register("decl2")} className="mt-1 accent-gold" />
          <span className="font-body text-sm text-ink">
            I commit to the full 12-month AYCNC programme if selected.
          </span>
        </label>
      </div>
    </div>
  );
}

function Step6({ form }: any) {
  const data = form.watch();
  return (
    <div>
      <h3 className="font-display text-navy text-xl">Review and Submit</h3>
      <p className="mt-2 font-body text-ink text-sm">Confirm your responses before submitting.</p>
      <div className="mt-6 space-y-3">
        {[
          ["Name", data.name],
          ["Nationality", data.nationality],
          ["Email", data.email],
          ["Pathway", data.pathway],
          ["Language", data.language],
        ].map(([k, v]) => (
          <div key={k} className="flex justify-between border-b border-navy/10 py-3">
            <span className="font-mono text-xs uppercase tracking-wider text-navy/60">{k}</span>
            <span className="font-body text-navy">{v || "·"}</span>
          </div>
        ))}
      </div>
      <p className="mt-6 font-body text-ink text-sm">
        On submitting, your application enters the AYCNC review queue. You will receive a
        confirmation reference immediately.
      </p>
    </div>
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
