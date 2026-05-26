export interface HeroSlide {
  image: string;
  eyebrow: string;
  headlineLines: [string, string, string]; // line 2 is italic + accent
  sub: string;
  cta: { label: string; to: string };
  accent: string; // hex
}

export const heroSlides: HeroSlide[] = [
  {
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=80",
    eyebrow: "INAUGURAL COHORT · 2026",
    headlineLines: ["Building Africa's", "Next Generation", "of Climate Diplomats"],
    sub: "55 countries. One continental mission. Applications open July 2026.",
    cta: { label: "Apply for Cohort 1", to: "/apply" },
    accent: "#F5A623",
  },
  {
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1600&q=80",
    eyebrow: "THE PROGRAMME · 3 PHASES",
    headlineLines: ["From Classroom", "to the COP", "Negotiating Table"],
    sub: "10 weeks of intensive training. Then real deployment in official delegations.",
    cta: { label: "Explore the Programme", to: "/programme" },
    accent: "#38A169",
  },
  {
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=80",
    eyebrow: "HOST COUNTRY · TANZANIA",
    headlineLines: ["Hosted in", "Tanzania.", "Built for Africa."],
    sub: "Established by AGN resolution. Endorsed by CAHOSCC. Hosted by the VP Office of Tanzania.",
    cta: { label: "Our Mandate", to: "/about" },
    accent: "#F5A623",
  },
  {
    image: "https://images.unsplash.com/photo-1560523160-754a9e25c68f?w=1600&q=80",
    eyebrow: "YOUTH LEADERSHIP · AU ENDORSED",
    headlineLines: ["Africa's Voice", "at Every", "Climate Table"],
    sub: "AYCNC is Africa's permanent institutional response to the climate diplomacy gap.",
    cta: { label: "Who We Are", to: "/about" },
    accent: "#38A169",
  },
  {
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&q=80",
    eyebrow: "STRATEGIC PARTNERS · UNDP · GIZ · AU",
    headlineLines: ["Continental", "Authority.", "Real Impact."],
    sub: "50 delegates. 5 AU sub-regions. 12 months. A permanent institution, not a project.",
    cta: { label: "Our Partners", to: "/partners" },
    accent: "#F5A623",
  },
];
