// src/pages/SolutionsPage.jsx
import { motion } from "framer-motion";
import CountUp from "react-countup";

import {
  PhoneCall, Mic, Users, Briefcase, Search, ClipboardList, Store, Handshake,
  ShieldCheck, Zap, Workflow, BookOpen, FileText, Presentation, Clock, Target, LayoutTemplate
} from "lucide-react";
import Header from "./header";
import Footer from "./footer";

const COLORS = {
  surface: "#f6f7fb",
  text: "#0b1323",
  subtext: "#5a6576",
  primary: "#c61b3f",
  border: "#e5e8ef",
  header: "#191a37",
  white: "#ffffff",
};

const IconChip = ({ children }) => (
  <div
    className="flex h-11 w-11 items-center justify-center rounded-xl"
    style={{
      background: "linear-gradient(145deg, rgba(198,27,63,0.12), rgba(14,26,43,0.06))",
      border: `1px solid ${COLORS.border}`,
    }}
  >
    {children}
  </div>
);

const cardVariants = {
  hidden: { opacity: 0, y: 14 },
  show: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.45, delay: i * 0.06 } }),
};

const expertNetwork = [
  { title: "Expert Calls", copy: "Direct insight from vetted operators to answer focused questions fast.", icon: <PhoneCall size={20} /> },
  { title: "Moderated Expert Calls", copy: "We moderate end-to-end and deliver clean notes & takeaways.", icon: <Mic size={20} /> },
  { title: "Expert Meetings", copy: "Roundtables or 1:many sessions to triangulate views.", icon: <Users size={20} /> },
  { title: "Independent Consulting", copy: "Longer-term advisory to guide execution & change.", icon: <Briefcase size={20} /> },
  { title: "Executive Search", copy: "Targeted leadership hiring with strong domain fit.", icon: <Search size={20} /> },
];

const researchConsulting = [
  { title: "In-Depth Interviews (IDIs)", copy: "Structured qual with customers, clinicians, operators, buyers.", icon: <Mic size={20} /> },
  { title: "Focus Group Discussions", copy: "Moderated groups to surface consensus and divergence.", icon: <Users size={20} /> },
  { title: "Surveys (B2B & B2C)", copy: "Quant validation, WTP, conjoint, segmentation & more.", icon: <ClipboardList size={20} /> },
  { title: "Retail/Field Audits", copy: "Store checks, mystery shopping, execution diagnostics.", icon: <Store size={20} /> },
  { title: "Customer Experience (CX)", copy: "Journey mapping, pain-point prioritization, service blueprints.", icon: <Handshake size={20} /> },
];


const blogItems = [
  {
    title: "Validating APAC Fintech Expansion via Expert Calls + 30-IDIs",
    tag: "Case Study",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "B2B SaaS Pricing – Conjoint + Panel Synthesis in 10 Days",
    tag: "Playbook",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Pharma GTM – Payer Economics & Adoption Barriers",
    tag: "Case Study",
    img: "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=1200&auto=format&fit=crop",
  },
];


const faqs = [
  { q: "How fast can you stand up calls?", a: "Same day for common topics; 24–48 hours for niche roles/regions with multiple profiles." },
  { q: "Do you provide transcripts/slides?", a: "Yes. Moderation, notes, verbatims, and synthesized slides are available on request." },
  { q: "How do you handle compliance?", a: "Conflict checks, NDAs, guidance on MNPI, and documented consent. We never seek confidential info." },
  { q: "Can you run mixed-method programs?", a: "Absolutely—IDIs + surveys + desk research with a single PM and QA process." },
];

const capabilityMatrix = [
  { method: "Expert Calls", speed: "Same day", deliverables: "Notes, transcript, key takeaways", bestFor: "Hypothesis checks, fast context" },
  { method: "Moderated Calls", speed: "1–3 days", deliverables: "Mod guide, notes, synthesis", bestFor: "Busy teams needing turnkey" },
  { method: "IDIs", speed: "1–2 weeks", deliverables: "Verbatims, coding, themes", bestFor: "Deep qual understanding" },
  { method: "Surveys", speed: "2–3 weeks", deliverables: "Dashboard, stats, crosstabs", bestFor: "Quant validation, WTP" },
  { method: "Focus Groups", speed: "2–4 weeks", deliverables: "Clips, themes, personas", bestFor: "Message & concept tests" },
];

const deliverables = [
  { icon: <FileText size={18} />, label: "Clean transcripts & verbatims" },
  { icon: <Presentation size={18} />, label: "Executive synthesis decks" },
  { icon: <LayoutTemplate size={18} />, label: "Question guides & codeframes" },
  { icon: <BookOpen size={18} />, label: "Thematic summaries & POVs" },
];

const timelines = [
  { icon: <Clock size={16} />, title: "Rapid Answer", days: "1–3 days", copy: "1–3 expert calls + moderated notes to unblock a decision." },
  { icon: <Clock size={16} />, title: "Quick Study", days: "1–2 weeks", copy: "10–20 IDIs + light desk research with slides." },
  { icon: <Clock size={16} />, title: "Full Program", days: "2–4+ weeks", copy: "Mixed-methods (IDI + survey) with quant validation & readout." },
];

const testimonials = [
  { quote: "Fast, precise access—helped us validate a nine-figure decision in a week.", who: "Partner, Strategy Consulting (EU)" },
  { quote: "Moderation + transcripts saved days; synthesis was client-ready.", who: "VP Strategy, Global Tech (US)" },
  { quote: "Quality of profiles and compliance rigor stood out across providers.", who: "Director, PE Portfolio Ops (APAC)" },
];

export default function SolutionsPage() {
  return (
    <>
    <Header/>
    <main
      className="min-h-screen pt-28"
      style={{
        background: `radial-gradient(1200px 600px at 100% -50%, rgba(198,27,63,0.05), transparent), radial-gradient(900px 500px at -10% 20%, rgba(14,26,43,0.05), transparent), ${COLORS.surface}`,
      }}
    >
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 pb-10">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs"
               style={{ border: `1px solid ${COLORS.border}`, background: COLORS.white, color: COLORS.subtext }}>
            Expert Network • Research & Consulting
          </div>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight" style={{ color: COLORS.text }}>
            Solutions
          </h1>
          <p className="mt-3 max-w-3xl text-lg" style={{ color: COLORS.subtext }}>
            Outcome-driven research and expert access to answer real business questions quickly, credibly, and compliantly.
          </p>
        </motion.div>
      </section>

      {/* SOLUTIONS COLUMNS + BLOG */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* LEFT: Expert Network */}
          <div>
            <h2 className="text-xl font-bold mb-4" style={{ color: COLORS.text }}>Expert Network Solutions</h2>
            <div className="space-y-3">
              {expertNetwork.map((item, i) => (
                <motion.div key={item.title} custom={i} variants={cardVariants} initial="hidden" whileInView="show" viewport={{ once: true }}
                  className="group flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm transition-transform hover:-translate-y-0.5"
                  style={{ border: `1px solid ${COLORS.border}` }}>
                  <IconChip>{item.icon}</IconChip>
                  <div>
                    <div className="text-base font-semibold" style={{ color: COLORS.text }}>{item.title}</div>
                    <div className="text-sm" style={{ color: COLORS.subtext }}>{item.copy}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* mini process */}
            <div className="mt-6 rounded-2xl bg-white p-4 shadow-sm" style={{ border: `1px solid ${COLORS.border}` }}>
              <div className="mb-2 text-sm font-semibold" style={{ color: COLORS.text }}>How expert calls work</div>
              <ol className="list-decimal pl-4 text-sm" style={{ color: COLORS.subtext }}>
                <li>Share your brief — objectives, must-haves, and timing.</li>
                <li>Receive vetted profiles within hours; you select the expert.</li>
                <li>We schedule, moderate (optional), and deliver notes/transcripts.</li>
              </ol>
            </div>
          </div>

          {/* MIDDLE: Research & Consulting */}
          <div>
            <h2 className="text-xl font-bold mb-4" style={{ color: COLORS.text }}>Research & Consulting Solutions</h2>
            <div className="space-y-3">
              {researchConsulting.map((item, i) => (
                <motion.div key={item.title} custom={i} variants={cardVariants} initial="hidden" whileInView="show" viewport={{ once: true }}
                  className="group flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm transition-transform hover:-translate-y-0.5"
                  style={{ border: `1px solid ${COLORS.border}` }}>
                  <IconChip>{item.icon}</IconChip>
                  <div>
                    <div className="text-base font-semibold" style={{ color: COLORS.text }}>{item.title}</div>
                    <div className="text-sm" style={{ color: COLORS.subtext }}>{item.copy}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* methodology chips */}
            <div className="mt-6 flex flex-wrap gap-2">
              {["Qualitative", "Quantitative", "Mixed-Methods", "VoC", "Win/Loss", "Conjoint"].map((m) => (
                <span key={m} className="rounded-full px-3 py-1 text-xs"
                      style={{ background: COLORS.white, border: `1px solid ${COLORS.border}`, color: COLORS.subtext }}>
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT: Featured Blog */}
          <aside className="lg:pl-4">
            <h2 className="text-xl font-bold mb-4" style={{ color: COLORS.text }}>Featured from Blog</h2>
            <div className="space-y-5">
              {blogItems.map((b, i) => (
                <motion.article key={b.title}
                  initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="overflow-hidden rounded-2xl bg-white shadow-sm"
                  style={{ border: `1px solid ${COLORS.border}` }}>
                  <div className="aspect-[16/9] w-full overflow-hidden">
                    <img src={b.img} alt="" className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]" />
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-medium uppercase tracking-wide text-gray-500">{b.tag}</span>
                    <h3 className="mt-1 text-[15px] font-semibold leading-snug" style={{ color: COLORS.text }}>{b.title}</h3>
                    <button className="mt-2 text-sm font-semibold" style={{ color: COLORS.primary }}>Read more →</button>
                  </div>
                </motion.article>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* IMPACT / STATS */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { value: 24000, label: "Expert calls delivered" },
            { value: 2200, label: "Programs run last 12 months" },
            { value: 98, label: "Client retention %" },
          ].map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rounded-2xl p-6 shadow-sm bg-white" style={{ border: `1px solid ${COLORS.border}` }}>
              <div className="text-4xl font-extrabold" style={{ color: COLORS.text }}>
                <CountUp start={0} end={s.value} duration={2.2} separator="," />
                {s.label.includes("%") ? "" : "+"}
              </div>
              <p className="mt-2 text-sm" style={{ color: COLORS.subtext }}>{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CAPABILITY MATRIX */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-2xl bg-white shadow-sm overflow-hidden" style={{ border: `1px solid ${COLORS.border}` }}>
          <div className="px-6 pt-6 pb-4">
            <h2 className="text-xl font-bold" style={{ color: COLORS.text }}>Capability Matrix</h2>
            <p className="mt-1 text-sm" style={{ color: COLORS.subtext }}>
              Match the method to the decision horizon and the evidence you need.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-[#f9fafc]">
                  {["Method", "Speed", "Deliverables", "Best for"].map((h) => (
                    <th key={h} className="px-6 py-3" style={{ color: COLORS.subtext }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {capabilityMatrix.map((row, i) => (
                  <tr key={row.method} className="border-t" style={{ borderColor: COLORS.border }}>
                    <td className="px-6 py-3 font-medium" style={{ color: COLORS.text }}>{row.method}</td>
                    <td className="px-6 py-3" style={{ color: COLORS.subtext }}>{row.speed}</td>
                    <td className="px-6 py-3" style={{ color: COLORS.subtext }}>{row.deliverables}</td>
                    <td className="px-6 py-3" style={{ color: COLORS.subtext }}>{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* DELIVERABLES + TIMELINES */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-sm" style={{ border: `1px solid ${COLORS.border}` }}>
            <h3 className="text-lg font-semibold" style={{ color: COLORS.text }}>Typical Deliverables</h3>
            <ul className="mt-4 space-y-3">
              {deliverables.map((d) => (
                <li key={d.label} className="flex items-start gap-3">
                  <IconChip>{d.icon}</IconChip>
                  <span className="text-sm" style={{ color: COLORS.subtext }}>{d.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm" style={{ border: `1px solid ${COLORS.border}` }}>
            <h3 className="text-lg font-semibold" style={{ color: COLORS.text }}>Sample Timelines</h3>
            <div className="mt-4 grid grid-cols-1 gap-4">
              {timelines.map((t, i) => (
                <motion.div key={t.title}
                  initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="flex items-start gap-3 rounded-xl p-4"
                  style={{ background: "linear-gradient(145deg, rgba(198,27,63,0.06), rgba(14,26,43,0.04))" }}
                >
                  <IconChip>{t.icon}</IconChip>
                  <div>
                    <div className="font-semibold" style={{ color: COLORS.text }}>{t.title} • {t.days}</div>
                    <div className="text-sm" style={{ color: COLORS.subtext }}>{t.copy}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MINI CASES */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <h2 className="mb-4 text-xl font-bold" style={{ color: COLORS.text }}>Recent outcomes</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { title: "Win/Loss for Enterprise SaaS", result: "Repositioned ICP; 12-pt lift in close-rate QoQ.", tag: "B2B SaaS" },
            { title: "Payer Landscape for Novel Therapy", result: "Go-to-market greenlit with risk flags mitigated.", tag: "Healthcare" },
            { title: "Retail Ops Audit", result: "2.3% margin improvement via execution fixes.", tag: "Consumer" },
          ].map((c, i) => (
            <motion.div key={c.title}
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rounded-2xl bg-white p-6 shadow-sm hover:-translate-y-1 transition-transform"
              style={{ border: `1px solid ${COLORS.border}` }}
            >
              <div className="text-xs uppercase tracking-wide text-gray-500">{c.tag}</div>
              <h3 className="mt-1 text-lg font-semibold" style={{ color: COLORS.text }}>{c.title}</h3>
              <p className="mt-2 text-sm" style={{ color: COLORS.subtext }}>{c.result}</p>
              <a href="/insights" className="mt-3 inline-block text-sm font-semibold" style={{ color: COLORS.primary }}>
                Read more →
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS STRIP */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-2xl bg-white p-6 shadow-sm" style={{ border: `1px solid ${COLORS.border}` }}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { icon: <Zap size={18} />, title: "Scope & Brief", copy: "Clarify objectives, constraints, and decision horizon." },
              { icon: <Workflow size={18} />, title: "Source & Vet", copy: "Triangulate profiles/methods; run conflict & compliance checks." },
              { icon: <ShieldCheck size={18} />, title: "Deliver & QA", copy: "Moderation, transcripts, and synthesis—documented & auditable." },
            ].map((p, i) => (
              <motion.div key={p.title}
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-start gap-3 rounded-xl p-4"
                style={{ background: "linear-gradient(145deg, rgba(198,27,63,0.06), rgba(14,26,43,0.04))" }}
              >
                <IconChip>{p.icon}</IconChip>
                <div>
                  <div className="font-semibold" style={{ color: COLORS.text }}>{p.title}</div>
                  <div className="text-sm" style={{ color: COLORS.subtext }}>{p.copy}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <h2 className="mb-4 text-xl font-bold" style={{ color: COLORS.text }}>What clients say</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.blockquote key={i}
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-2xl bg-white p-6 shadow-sm" style={{ border: `1px solid ${COLORS.border}` }}
            >
              <p className="text-sm" style={{ color: COLORS.text }}>&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-2 text-xs" style={{ color: COLORS.subtext }}>— {t.who}</footer>
            </motion.blockquote>
          ))}
        </div>
      </section>

      {/* FAQ + CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <h2 className="mb-4 text-xl font-bold" style={{ color: COLORS.text }}>FAQs</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {faqs.map((f, i) => (
            <motion.div key={f.q}
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-2xl bg-white p-5 shadow-sm" style={{ border: `1px solid ${COLORS.border}` }}
            >
              <div className="font-semibold" style={{ color: COLORS.text }}>{f.q}</div>
              <div className="mt-1 text-sm" style={{ color: COLORS.subtext }}>{f.a}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="/book-session" className="rounded-xl px-5 py-2.5 text-sm font-semibold text-white" style={{ background: COLORS.primary }}>
            Book a Consulting Session
          </a>
          <a href="/register-expert"
             className="ml-3 rounded-xl px-5 py-2.5 text-sm font-semibold"
             style={{ background: COLORS.white, color: COLORS.text, border: `1px solid ${COLORS.border}` }}>
            Register as an Expert
          </a>
        </div>
      </section>
    </main>
    <Footer/>
    </>
  );
}

