import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/section";
import { PillBadge } from "@/components/ui/PillBadge";
import { CountdownTimer } from "@/components/ui/CountdownTimer";
import { auMemberStates } from "@/constants/auMemberStates";
import { Check } from "lucide-react";

export const Route = createFileRoute("/apply")({
  head: () => ({
    meta: [
      { title: "Apply · AYCNC Cohort 1" },
      { name: "description", content: "Applications for AYCNC Cohort 1 open July 15 to August 15, 2026. 50 inaugural delegates. Open to climate-active African youth 18 to 35." },
      { property: "og:title", content: "Apply · AYCNC Cohort 1" },
      { property: "og:description", content: "Your seat at the table awaits." },
      { property: "og:url", content: "/apply" },
    ],
    links: [{ rel: "canonical", href: "/apply" }],
  }),
  component: ApplyPage,
});

const OPEN_DATE = new Date("2026-07-15T00:00:00Z");

function ApplyPage() {
  return (
    <div>
      <Hero />
      <EligibilityCheck />
      <MultiStepForm />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative bg-hero-mesh pt-32 pb-20 overflow-hidden">
      {Array.from({ length: 20 }).map((_, i) => (
        <span key={i} className="svg-deco h-1.5 w-1.5 rounded-full bg-gold/30 animate-float-y"
          style={{
            top: `${(i * 13) % 90 + 5}%`,
            left: `${(i * 17 + 3) % 95}%`,
            animationDelay: `${(i % 8) * 0.5}s`,
          }} />
      ))}
      <div className="relative mx-auto max-w-4xl px-6 md:px-12 text-center">
        <PillBadge color="gold">APPLY FOR COHORT 1</PillBadge>
        <h1 className="mt-6 font-display italic font-bold text-white leading-[1.05]" style={{ fontSize: "clamp(3rem,7vw,6rem)" }}>
          Your Seat at the<br />Table Awaits.
        </h1>
        <p className="mt-6 font-body text-white/70 text-lg max-w-2xl mx-auto">
          Applications open July 15 to August 15, 2026. 50 inaugural delegates selected across all 55 AU member states.
        </p>
        <div className="mt-10"><CountdownTimer target={OPEN_DATE} /></div>
      </div>
    </section>
  );
}

const eligibilityQuestions = [
  "I am a citizen of an AU member state",
  "I am between 18 and 35 years old",
  "I hold or am completing a tertiary qualification",
  "I have demonstrable climate engagement",
  "I commit to the full 12-month programme",
  "I am proficient in English, French, or Arabic",
];

function EligibilityCheck() {
  const [answers, setAnswers] = useState<Record<number, "yes" | "no" | null>>({});
  const allYes = eligibilityQuestions.every((_, i) => answers[i] === "yes");
  return (
    <section className="relative bg-white py-20 overflow-hidden">
      <svg className="svg-deco" style={{ bottom: "-100px", right: "-50px" }} width="400" height="400" viewBox="0 0 400 400" fill="none" stroke="rgba(56,161,105,0.1)" strokeWidth="3">
        <polyline points="100,210 180,290 320,140" />
      </svg>
      <div className="relative mx-auto max-w-3xl px-6 md:px-12">
        <SectionEyebrow>STEP ZERO</SectionEyebrow>
        <h2 className="mt-4 font-display font-bold text-navy text-3xl md:text-4xl">Are you eligible?</h2>
        <p className="mt-3 font-body text-ink">Six quick questions before you begin the formal application.</p>
        <div className="mt-8 space-y-3">
          {eligibilityQuestions.map((q, i) => (
            <div key={i} className="border border-navy/15 rounded-2xl px-6 py-4 flex items-center justify-between gap-4">
              <p className="font-body text-navy-dark">{q}</p>
              <div className="flex gap-2 flex-shrink-0">
                {(["yes", "no"] as const).map((v) => {
                  const active = answers[i] === v;
                  return (
                    <button
                      key={v}
                      onClick={() => setAnswers((a) => ({ ...a, [i]: v }))}
                      className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-colors ${
                        active && v === "yes" ? "bg-forest text-white"
                          : active && v === "no" ? "bg-rose-500 text-white"
                          : "bg-navy/8 text-navy/60 hover:bg-navy/15"
                      }`}
                    >{v}</button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <AnimatePresence>
          {allYes && (
            <motion.div
              initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="mt-6 rounded-2xl bg-forest text-white p-5 flex items-center gap-4 relative overflow-hidden"
            >
              <Check size={28} />
              <p className="font-display font-bold">You are eligible. Continue your application below.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

const stepLabels = ["Personal", "Education", "Experience", "Statement", "Pathway", "Review"];

function MultiStepForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const form = useForm({ mode: "onChange" });

  if (submitted) return <SuccessScreen />;

  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-3xl px-6 md:px-12">
        <ProgressBar current={step} />
        <form onSubmit={form.handleSubmit(() => setSubmitted(true))} className="mt-10 bg-white rounded-3xl border border-navy/10 p-8 md:p-10 shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
              {step === 0 && <Step1 form={form} />}
              {step === 1 && <Step2 form={form} />}
              {step === 2 && <Step3 form={form} />}
              {step === 3 && <Step4 form={form} />}
              {step === 4 && <Step5 form={form} />}
              {step === 5 && <Step6 form={form} />}
            </motion.div>
          </AnimatePresence>
          <div className="mt-10 flex justify-between gap-3">
            <button type="button" onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0}
              className="px-6 py-3 rounded-full border border-navy/20 font-display italic font-semibold text-navy disabled:opacity-30">Back</button>
            {step < 5 ? (
              <button type="button" onClick={() => setStep((s) => Math.min(5, s + 1))}
                className="px-8 py-3 rounded-full bg-navy text-white font-display italic font-semibold">Next</button>
            ) : (
              <button type="submit"
                className="px-8 py-3 rounded-full bg-gold text-navy-dark font-display italic font-semibold hover:scale-[1.04] transition-transform">Submit Application</button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

function ProgressBar({ current }: { current: number }) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto">
      {stepLabels.map((label, i) => {
        const active = i === current;
        const done = i < current;
        return (
          <div key={i} className="flex items-center gap-2 flex-shrink-0">
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${active ? "bg-gold text-navy-dark" : done ? "bg-forest text-white" : "bg-white border border-navy/15 text-navy/40"}`}>
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

const inputCls = "w-full border border-navy/20 rounded-xl px-4 py-3.5 font-body text-navy-dark focus:border-gold focus:ring-2 focus:ring-gold/30 focus:outline-none transition-all";
const labelCls = "block font-mono text-xs uppercase tracking-wider text-navy/70 mb-2";

function Step1({ form }: any) {
  return (
    <div>
      <h3 className="font-display font-bold text-navy text-2xl">Personal Information</h3>
      <p className="mt-2 font-body text-ink">Tell us who you are.</p>
      <div className="mt-6 grid md:grid-cols-2 gap-5">
        <div className="md:col-span-2"><label className={labelCls}>Full Name</label><input {...form.register("name")} className={inputCls} /></div>
        <div><label className={labelCls}>Nationality</label><select {...form.register("nationality")} className={inputCls}><option value="">Select…</option>{auMemberStates.map((s) => <option key={s} value={s}>{s}</option>)}</select></div>
        <div><label className={labelCls}>Country of Residence</label><input {...form.register("residence")} className={inputCls} /></div>
        <div><label className={labelCls}>Date of Birth</label><input type="date" {...form.register("dob")} className={inputCls} /></div>
        <div><label className={labelCls}>Gender</label><select {...form.register("gender")} className={inputCls}><option value="">Select…</option><option>Female</option><option>Male</option><option>Non-binary</option><option>Prefer not to say</option></select></div>
        <div><label className={labelCls}>Email</label><input type="email" {...form.register("email")} className={inputCls} /></div>
        <div><label className={labelCls}>Phone</label><input {...form.register("phone")} className={inputCls} /></div>
        <div className="md:col-span-2">
          <label className={labelCls}>Working Language</label>
          <div className="flex gap-3">{["English","French","Arabic"].map((l) => (
            <label key={l} className="flex items-center gap-2 px-4 py-2 rounded-full border border-navy/20 cursor-pointer hover:bg-navy/5">
              <input type="radio" value={l} {...form.register("language")} /><span className="font-body text-sm">{l}</span>
            </label>
          ))}</div>
        </div>
        <div className="md:col-span-2"><label className={labelCls}>LinkedIn (optional)</label><input {...form.register("linkedin")} className={inputCls} /></div>
      </div>
    </div>
  );
}

function Step2({ form }: any) {
  return (
    <div>
      <h3 className="font-display font-bold text-navy text-2xl">Education</h3>
      <div className="mt-6 grid md:grid-cols-2 gap-5">
        <div><label className={labelCls}>Highest Qualification</label><input {...form.register("qualification")} className={inputCls} /></div>
        <div><label className={labelCls}>Institution</label><input {...form.register("institution")} className={inputCls} /></div>
        <div><label className={labelCls}>Field of Study</label><input {...form.register("field")} className={inputCls} /></div>
        <div><label className={labelCls}>Graduation Year</label><input type="number" {...form.register("gradYear")} className={inputCls} /></div>
        <div className="md:col-span-2">
          <label className={labelCls}>CV Upload</label>
          <div className="border-2 border-dashed border-navy/20 rounded-xl p-10 text-center hover:border-gold transition-colors">
            <input type="file" {...form.register("cv")} className="hidden" id="cv" />
            <label htmlFor="cv" className="cursor-pointer font-body text-ink">Drop your CV here or <span className="text-gold underline">browse</span></label>
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
      <h3 className="font-display font-bold text-navy text-2xl">Climate Engagement</h3>
      <div className="mt-6">
        <label className={labelCls}>Describe your climate engagement to date (max 350 words)</label>
        <textarea {...form.register("engagement", { maxLength: 2500 })} rows={6} className={inputCls} />
        <div className="mt-2 font-mono text-xs text-ink/60 text-right">{engagement.split(/\s+/).filter(Boolean).length} / 350 words</div>
      </div>
      <div className="mt-6">
        <label className={labelCls}>Type of engagement</label>
        <div className="flex flex-wrap gap-3">
          {["Research", "Advocacy", "Community", "Policy", "Media", "Education"].map((t) => (
            <label key={t} className="flex items-center gap-2 px-4 py-2 rounded-full border border-navy/20 cursor-pointer hover:bg-navy/5">
              <input type="checkbox" value={t} {...form.register("engagementTypes")} /><span className="font-body text-sm">{t}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between border border-navy/15 rounded-xl px-4 py-3">
        <span className="font-body text-navy">Have you attended a UNFCCC session?</span>
        <input type="checkbox" {...form.register("unfccc")} className="w-5 h-5 accent-gold" />
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
      <h3 className="font-display font-bold text-navy text-2xl">Personal Statement</h3>
      <p className="mt-2 font-body text-ink">Three short responses · 200 words each.</p>
      <div className="mt-6 space-y-6">
        {questions.map((q, i) => {
          const val = form.watch(`statement${i}`) || "";
          return (
            <div key={i}>
              <p className="font-display italic text-navy text-lg">{q}</p>
              <textarea {...form.register(`statement${i}`)} rows={4} className={`${inputCls} mt-2`} />
              <div className="mt-1 font-mono text-xs text-ink/60 text-right">{val.split(/\s+/).filter(Boolean).length} / 200 words</div>
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
    { id: "A", label: "Academic Pathway", desc: "Coming from formal university programmes in international relations, environmental science, or law." },
    { id: "B", label: "Practitioner Pathway", desc: "Coming from a climate role in government, civil society, or international organisations." },
    { id: "C", label: "Community Pathway", desc: "Coming from grassroots, indigenous, or community-led climate movements." },
  ];
  return (
    <div>
      <h3 className="font-display font-bold text-navy text-2xl">Pathway and References</h3>
      <div className="mt-6 space-y-3">
        {pathways.map((p) => {
          const active = pathway === p.id;
          return (
            <label key={p.id} className={`block cursor-pointer rounded-2xl border-2 p-5 transition-all ${active ? "border-gold bg-gold/5" : "border-navy/15 hover:border-navy/30"}`}>
              <input type="radio" value={p.id} {...form.register("pathway")} className="sr-only" />
              <div className="flex items-start gap-4">
                <span className={`grid place-items-center w-8 h-8 rounded-full font-mono font-bold ${active ? "bg-gold text-navy-dark" : "bg-navy/10 text-navy/60"}`}>{p.id}</span>
                <div>
                  <div className="font-display font-bold text-navy text-lg">{p.label}</div>
                  <div className="mt-1 font-body text-ink text-sm">{p.desc}</div>
                </div>
              </div>
            </label>
          );
        })}
      </div>
      <div className="mt-6 grid md:grid-cols-2 gap-5">
        <div><label className={labelCls}>Reference 1 (name and email)</label><input {...form.register("ref1")} className={inputCls} /></div>
        <div><label className={labelCls}>Reference 2 (name and email)</label><input {...form.register("ref2")} className={inputCls} /></div>
      </div>
      <div className="mt-6">
        <label className={labelCls}>Video introduction (URL or upload)</label>
        <input {...form.register("video")} placeholder="https://…" className={inputCls} />
      </div>
      <div className="mt-6 space-y-3">
        <label className="flex items-start gap-3 cursor-pointer"><input type="checkbox" {...form.register("decl1")} className="mt-1 accent-gold" />
          <span className="font-body text-sm text-ink">I confirm all information is accurate to the best of my knowledge.</span></label>
        <label className="flex items-start gap-3 cursor-pointer"><input type="checkbox" {...form.register("decl2")} className="mt-1 accent-gold" />
          <span className="font-body text-sm text-ink">I commit to the full 12-month AYCNC programme if selected.</span></label>
      </div>
    </div>
  );
}

function Step6({ form }: any) {
  const data = form.watch();
  return (
    <div>
      <h3 className="font-display font-bold text-navy text-2xl">Review and Submit</h3>
      <p className="mt-2 font-body text-ink">Confirm your responses before submitting.</p>
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
            <span className="font-body text-navy">{v || "—"}</span>
          </div>
        ))}
      </div>
      <p className="mt-6 font-body text-ink text-sm">
        By clicking Submit, your application enters the AYCNC review queue. You will receive a confirmation email and reference number within 5 minutes.
      </p>
    </div>
  );
}

function SuccessScreen() {
  return (
    <section className="fixed inset-0 z-50 bg-navy-dark flex items-center justify-center px-6">
      {Array.from({ length: 24 }).map((_, i) => (
        <motion.span key={i} className="absolute w-2 h-2 rounded-full bg-gold"
          initial={{ x: 0, y: 0, opacity: 1 }}
          animate={{ x: Math.cos((i / 24) * Math.PI * 2) * 300, y: Math.sin((i / 24) * Math.PI * 2) * 300, opacity: 0 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      ))}
      <div className="text-center relative">
        <h2 className="font-display italic font-black text-white" style={{ fontSize: "clamp(3rem,7vw,6rem)" }}>Application Submitted.</h2>
        <p className="mt-6 font-mono text-gold">REFERENCE · AYCNC-C1-{Math.floor(100000 + Math.random() * 900000)}</p>
        <p className="mt-4 font-body text-white/70 max-w-md mx-auto">You will hear from the AYCNC Secretariat within 30 days. Share your news.</p>
      </div>
    </section>
  );
}
