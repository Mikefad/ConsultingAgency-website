import { motion } from "framer-motion";
import { Factory, Stethoscope, Cpu, Building2, Store, Landmark, Server, Leaf } from "lucide-react";
import CountUp from "react-countup";
import Header from "./header";
import Footer from "./footer";

const COLORS = {
  surface: "#f6f7fb",
  text: "#0b1323",
  subtext: "#5a6576",
  primary: "#c61b3f",
  border: "#e5e8ef",
};

const sectors = [
  {
    icon: <Stethoscope size={18} />,
    name: "Healthcare & Life Sciences",
    bullets: ["Providers & Payers", "MedTech & Biopharma", "R&D • Market Access • HEOR"],
    cover:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: <Factory size={18} />,
    name: "Energy & Industrials",
    bullets: ["Utilities & Renewables", "Mining & Metals", "Automation • Sensors"],
    cover:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: <Cpu size={18} />,
    name: "Technology & Media",
    bullets: ["Cloud • AI • Data", "Cybersecurity", "AdTech • Platforms"],
    cover:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: <Building2 size={18} />,
    name: "Financial Services",
    bullets: ["Banking • Fintech", "Insurance", "Asset Management"],
    cover:
      "https://images.unsplash.com/photo-1454165205744-3b78555e5572?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: <Store size={18} />,
    name: "Consumer & Retail",
    bullets: ["E-commerce • CPG", "Supply Chain & Ops", "Pricing • Loyalty"],
    cover:
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: <Landmark size={18} />,
    name: "Public Sector",
    bullets: ["GovTech", "Smart Cities", "Infrastructure"],
    cover:
      "https://images.unsplash.com/photo-1536305030431-8fdc6e7d6b7b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: <Server size={18} />,
    name: "Telecom & Networking",
    bullets: ["5G • Edge", "OSS/BSS", "Enterprise Services"],
    cover:
      "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: <Leaf size={18} />,
    name: "Sustainability",
    bullets: ["ESG Strategy", "Reporting & Assurance", "Carbon Markets"],
    cover:
      "https://images.unsplash.com/photo-1523978591478-c753949ff840?q=80&w=1200&auto=format&fit=crop",
  },
];

const process = [
  { title: "Define", copy: "Clarify the question, the metric that matters, and the decision timeline." },
  { title: "Source", copy: "Identify operators with hands-on experience and relevant recency." },
  { title: "Validate", copy: "Triangulate via interviews, surveys, and desk research." },
  { title: "Synthesize", copy: "Package concise takeaways, implications, and next steps." },
];

export default function SectorPage() {
  return (
    <>
    <Header/>
    <main className="min-h-screen pt-24" style={{ background: COLORS.surface }}>
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 pb-8">
        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                   className="text-4xl sm:text-5xl font-extrabold" style={{ color: COLORS.text }}>
          Industries We Serve
        </motion.h1>
        <p className="mt-3 text-lg max-w-3xl" style={{ color: COLORS.subtext }}>
          Operator-grade expertise across verticals, with regional nuance and a compliance-first approach.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {["North America", "EMEA", "APAC", "LATAM"].map((r) => (
            <span key={r} className="rounded-full px-3 py-1 text-xs"
                  style={{ background: "white", border: `1px solid ${COLORS.border}`, color: COLORS.subtext }}>
              {r}
            </span>
          ))}
        </div>
      </section>

      {/* SECTOR GRID */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {sectors.map((s, i) => (
            <motion.div key={s.name}
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="overflow-hidden rounded-2xl bg-white shadow-sm hover:-translate-y-1 transition-transform"
              style={{ border: `1px solid ${COLORS.border}` }}
            >
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img src={s.cover} alt="" className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]" />
              </div>
              <div className="p-6">
                <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: COLORS.text }}>
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl"
                        style={{ background: "linear-gradient(145deg, rgba(198,27,63,0.10), rgba(14,26,43,0.06))", border: `1px solid ${COLORS.border}` }}>
                    {s.icon}
                  </span>
                  {s.name}
                </div>
                <ul className="space-y-2 text-sm" style={{ color: COLORS.subtext }}>
                  {s.bullets.map((b) => <li key={b}>• {b}</li>)}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a href="/insights" className="text-sm font-semibold underline">View insights</a>
                  <span className="text-sm text-gray-400">|</span>
                  <a href="/book-session" className="text-sm font-semibold underline">Discuss a project</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* KPIs BAND */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { value: 450, label: "Sector-specific programs/year" },
            { value: 60, label: "Countries covered" },
            { value: 95, label: "Projects with multi-method designs %" },
          ].map((k, i) => (
            <motion.div key={k.label}
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rounded-2xl bg-white p-6 shadow-sm" style={{ border: `1px solid ${COLORS.border}` }}
            >
              <div className="text-4xl font-extrabold" style={{ color: COLORS.text }}>
                <CountUp start={0} end={k.value} duration={2.1} separator="," />
                {k.label.includes("%") ? "" : "+"}
              </div>
              <p className="mt-2 text-sm" style={{ color: COLORS.subtext }}>{k.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HOW WE WORK IN YOUR SECTOR */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-2xl bg-white p-6 shadow-sm" style={{ border: `1px solid ${COLORS.border}` }}>
          <h2 className="text-xl font-bold mb-4" style={{ color: COLORS.text }}>How we work in your sector</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {process.map((p, i) => (
              <motion.div key={p.title}
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-xl p-4"
                style={{ background: "linear-gradient(145deg, rgba(198,27,63,0.06), rgba(14,26,43,0.04))" }}
              >
                <div className="font-semibold" style={{ color: COLORS.text }}>{p.title}</div>
                <div className="text-sm" style={{ color: COLORS.subtext }}>{p.copy}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTOR CASE HIGHLIGHTS */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <h2 className="mb-4 text-xl font-bold" style={{ color: COLORS.text }}>Sector case highlights</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            {
              title: "Payer economics & digital therapeutics adoption",
              sector: "Healthcare",
              blurb:
                "Thirty clinician interviews + payer landscape + VoC survey informed a go/no-go in 3 weeks.",
              cover:
                "https://images.unsplash.com/photo-1581091014534-8987c1d2d1a9?q=80&w=1200&auto=format&fit=crop",
            },
            {
              title: "AI observability: enterprise buying committees",
              sector: "Technology",
              blurb:
                "CIO/CISO interviews across NA/EU + pricing tests produced a prioritized ICP and messaging map.",
              cover:
                "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
            },
          ].map((c, i) => (
            <motion.article key={c.title}
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="overflow-hidden rounded-2xl bg-white shadow-sm hover:-translate-y-1 transition-transform"
              style={{ border: `1px solid ${COLORS.border}` }}
            >
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img src={c.cover} alt="" className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]" />
              </div>
              <div className="p-5">
                <div className="text-xs uppercase tracking-wide text-gray-500">{c.sector}</div>
                <h3 className="mt-1 text-xl font-semibold" style={{ color: COLORS.text }}>{c.title}</h3>
                <p className="mt-2 text-sm" style={{ color: COLORS.subtext }}>{c.blurb}</p>
                <a href="/insights" className="mt-3 inline-block text-sm font-semibold" style={{ color: COLORS.primary }}>
                  Read more →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* FAQ + CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { q: "Do you cover niche sub-sectors?", a: "Yes. We routinely recruit niche operator profiles—from HEOR to 5G RAN planners." },
            { q: "Regional expertise?", a: "Strong coverage in NA/EMEA/APAC with bilingual moderators where needed." },
            { q: "Outputs we deliver?", a: "Profiles, calls, transcripts, survey dashboards, and synthesized readouts." },
          ].map((f, i) => (
            <motion.div key={f.q}
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rounded-2xl bg-white p-5 shadow-sm" style={{ border: `1px solid ${COLORS.border}` }}
            >
              <div className="font-semibold" style={{ color: COLORS.text }}>{f.q}</div>
              <div className="mt-1 text-sm" style={{ color: COLORS.subtext }}>{f.a}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="/book-session" className="rounded-xl px-5 py-2.5 text-sm font-semibold text-white" style={{ background: COLORS.primary }}>
            Talk to us about your sector
          </a>
        </div>
      </section>
    </main>
    <Footer/>
    </>
  );
}
