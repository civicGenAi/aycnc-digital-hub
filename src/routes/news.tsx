import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/section";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News · AYCNC" },
      { name: "description", content: "Latest news from AYCNC. Endorsements, host country designation, applications, secretariat updates." },
      { property: "og:title", content: "News · AYCNC" },
      { property: "og:description", content: "Shaping the conversation. Latest from AYCNC." },
      { property: "og:url", content: "/news" },
    ],
    links: [{ rel: "canonical", href: "/news" }],
  }),
  component: NewsPage,
});

const articles = [
  { date: "Feb 2026", cat: "INSTITUTIONAL", title: "AYCNC Officially Endorsed by CAHOSCC at 39th AU Assembly", excerpt: "Heads of State and Government ratify the establishment of the African Youth Climate Negotiation Center at the 39th Ordinary Session in Addis Ababa." },
  { date: "Feb 2026", cat: "HOST COUNTRY", title: "Tanzania Designated as Host Country for Continental Youth Climate Centre", excerpt: "The United Republic of Tanzania accepts the mandate to host AYCNC's permanent secretariat, building on its long climate diplomacy record." },
  { date: "May 2026", cat: "APPLICATIONS", title: "Applications for Inaugural Cohort 1 Opening July 2026", excerpt: "The Secretariat confirms application window from July 15 to August 15. 50 delegates across all 55 AU member states." },
  { date: "Jun 2026", cat: "OPERATIONS", title: "AYCNC Programme Director Appointed, Secretariat Established in Dar es Salaam", excerpt: "Following AMCEN endorsement, AYCNC moves into operational mode with full staffing of the Dar es Salaam secretariat." },
];

function NewsPage() {
  return (
    <div>
      <Hero />
      <ArticleGrid />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative bg-white pt-32 pb-16 overflow-hidden">
      <span className="svg-deco font-display font-black text-navy/[0.04] leading-none select-none pointer-events-none" style={{ fontSize: "25vw", right: "-2%", top: "20%" }}>NEWS</span>
      <svg className="svg-deco" style={{ top: "20%", left: "5%" }} width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="rgba(27,58,107,0.15)" strokeWidth="2">
        <rect x="6" y="10" width="48" height="40" rx="2" /><line x1="14" y1="20" x2="46" y2="20" /><line x1="14" y1="28" x2="46" y2="28" /><line x1="14" y1="36" x2="36" y2="36" />
      </svg>

      <div className="relative mx-auto max-w-6xl px-6 md:px-12">
        <SectionEyebrow>NEWS AND UPDATES</SectionEyebrow>
        <h1 className="mt-5 font-display font-bold text-navy" style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)", lineHeight: 1.05 }}>
          Shaping the Conversation
        </h1>
      </div>
    </section>
  );
}

function ArticleGrid() {
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {articles.map((a, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="break-inside-avoid mb-6 bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-gold/80 text-[0.7rem] tracking-widest">{a.date}</span>
                <span className="rounded-full bg-forest/10 text-forest px-3 py-0.5 text-[0.65rem] font-mono uppercase">{a.cat}</span>
              </div>
              <h2 className="mt-3 font-display font-bold text-navy text-xl leading-tight">{a.title}</h2>
              <p className="mt-3 font-body text-ink text-sm leading-relaxed">{a.excerpt}</p>
              <Link to="/news" className="mt-4 inline-flex items-center gap-1.5 text-gold font-display italic text-sm hover:gap-2.5 transition-all">
                Read more <ArrowRight size={14} />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
