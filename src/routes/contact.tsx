import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Mail, MessageSquare } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/section";
import { PillBadge } from "@/components/ui/PillBadge";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact · AYCNC" },
      { name: "description", content: "Get in touch with the AYCNC Secretariat in Dar es Salaam, Tanzania." },
      { property: "og:title", content: "Contact · AYCNC" },
      { property: "og:description", content: "Get in touch with the Secretariat." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div>
      <Hero />
      <ContactGrid />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative bg-navy-dark pt-32 pb-16 overflow-hidden">
      <svg className="svg-deco" style={{ right: "8%", top: "30%" }} width="180" height="120" viewBox="0 0 180 120" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="2">
        <rect x="10" y="20" width="120" height="80" rx="3" />
        <path d="M10 30 L70 70 L130 30" />
      </svg>
      <svg className="svg-deco" style={{ right: "5%", top: "50%" }} width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="rgba(245,166,35,0.3)" strokeWidth="2">
        <path d="M10 40 L70 10 L60 70 L40 50 L10 40 Z" />
      </svg>

      <div className="relative mx-auto max-w-5xl px-6 md:px-12">
        <SectionEyebrow dark>GET IN TOUCH</SectionEyebrow>
        <h1 className="mt-5 font-display italic font-bold text-white" style={{ fontSize: "clamp(2.5rem,5vw,4rem)", lineHeight: 1.1 }}>
          Get in Touch With the Secretariat
        </h1>
        <div className="mt-6 flex flex-wrap gap-2">
          <PillBadge color="white">EMAIL</PillBadge>
          <PillBadge color="white">WHATSAPP</PillBadge>
          <PillBadge color="white">POST</PillBadge>
        </div>
      </div>
    </section>
  );
}

function ContactGrid() {
  const form = useForm();
  const [sent, setSent] = useState(false);

  const emails = [
    { e: "info@aycnc.org", l: "General enquiries" },
    { e: "apply@aycnc.org", l: "Applications" },
    { e: "media@aycnc.org", l: "Press" },
    { e: "partnerships@aycnc.org", l: "Partners and donors" },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-12 grid lg:grid-cols-[55%_45%] gap-12">
        {/* Form */}
        <div>
          <h2 className="font-display font-bold text-navy text-2xl">Send a message</h2>
          <form onSubmit={form.handleSubmit(() => setSent(true))} className="mt-6 space-y-5">
            <div><label className="block font-mono text-xs uppercase tracking-wider text-navy/70 mb-2">Name</label>
              <input {...form.register("name", { required: true })} className="w-full border border-navy/20 rounded-xl px-4 py-3.5 focus:border-gold focus:ring-2 focus:ring-gold/30 outline-none" /></div>
            <div><label className="block font-mono text-xs uppercase tracking-wider text-navy/70 mb-2">Organisation</label>
              <input {...form.register("org")} className="w-full border border-navy/20 rounded-xl px-4 py-3.5 focus:border-gold focus:ring-2 focus:ring-gold/30 outline-none" /></div>
            <div><label className="block font-mono text-xs uppercase tracking-wider text-navy/70 mb-2">Email</label>
              <input type="email" {...form.register("email", { required: true })} className="w-full border border-navy/20 rounded-xl px-4 py-3.5 focus:border-gold focus:ring-2 focus:ring-gold/30 outline-none" /></div>
            <div><label className="block font-mono text-xs uppercase tracking-wider text-navy/70 mb-2">Subject</label>
              <select {...form.register("subject")} className="w-full border border-navy/20 rounded-xl px-4 py-3.5 focus:border-gold focus:ring-2 focus:ring-gold/30 outline-none">
                <option>General enquiry</option><option>Applications</option><option>Partnerships</option><option>Press</option>
              </select></div>
            <div><label className="block font-mono text-xs uppercase tracking-wider text-navy/70 mb-2">Message</label>
              <textarea rows={5} {...form.register("message", { required: true })} className="w-full border border-navy/20 rounded-xl px-4 py-3.5 focus:border-gold focus:ring-2 focus:ring-gold/30 outline-none" /></div>
            <button type="submit" className="rounded-full bg-gold text-navy-dark px-7 py-3 font-display italic font-semibold hover:scale-[1.04] transition-transform">Send Message</button>
            {sent && <p className="font-display italic text-forest">Thanks · we will reply within 3 business days.</p>}
          </form>
        </div>

        {/* Contact info */}
        <div className="space-y-8">
          <div className="rounded-2xl bg-navy-dark text-white p-6">
            <h3 className="font-mono text-gold text-xs tracking-widest">SECRETARIAT</h3>
            <p className="mt-3 font-display font-bold text-lg">AYCNC Secretariat</p>
            <p className="font-body text-white/70 text-sm leading-relaxed mt-1">VP Office of Tanzania<br />Dar es Salaam<br />United Republic of Tanzania</p>
          </div>

          <div className="space-y-3">
            {emails.map((e) => (
              <a key={e.e} href={`mailto:${e.e}`} className="flex items-start gap-3 group">
                <Mail size={20} className="text-gold/60 group-hover:text-gold mt-0.5" />
                <div>
                  <div className="font-display font-bold text-navy">{e.e}</div>
                  <div className="font-body text-ink text-sm">{e.l}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="rounded-2xl bg-navy/5 border border-navy/10 p-6 relative overflow-hidden">
            <div className="flex items-center gap-4">
              <div className="relative">
                <span className="absolute inset-0 rounded-full border-2 border-forest/30 animate-ping" />
                <span className="absolute inset-0 rounded-full border-2 border-forest/20" style={{ animation: "ping 2.5s cubic-bezier(0,0,0.2,1) infinite 0.5s" }} />
                <span className="relative block w-4 h-4 rounded-full bg-forest animate-pulse2" />
              </div>
              <div>
                <div className="font-display font-bold text-navy">Dar es Salaam, Tanzania</div>
                <div className="font-body text-ink text-sm">AYCNC Secretariat · VP Office</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
