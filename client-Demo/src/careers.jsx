import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin, Briefcase, DollarSign, GraduationCap, Users, Sparkles, CheckCircle, Mail, FileText
} from "lucide-react";
import Header from "./header";
import Footer from "./footer";

const COLORS = {
  surface: "#f6f7fb",
  navy: "#191a37",
  text: "#0b1323",
  subtext: "#5a6576",
  primary: "#c61b3f",
  border: "#e5e8ef",
  white: "#ffffff",
};

const openings = [
  {
    id: "rm",
    title: "Research Manager",
    location: "Remote",
    type: "Full-time",
    comp: "$85k–$110k + bonus",
    summary: "Own client briefs end-to-end across expert calls, IDIs and surveys.",
    bullets: [
      "Scope briefs; design guides/questionnaires; ensure QA & compliance.",
      "Moderate interviews; synthesize findings into crisp client readouts.",
      "Coach associates; manage day-to-day client comms & timelines.",
    ],
  },
  {
    id: "health",
    title: "Sector Lead – Healthcare",
    location: "New York, NY",
    type: "Full-time",
    comp: "$140k–$170k + bonus",
    summary: "Lead payer/provider/biopharma programs and grow the book.",
    bullets: [
      "Shape POVs and methodologies tailored to stakeholder needs.",
      "Partner with BD on proposals, pricing, and program architecture.",
      "Mentor teams; uphold compliance, ethics, and data handling.",
    ],
  },
  {
    id: "pm-surveys",
    title: "Senior PM – Surveys",
    location: "Remote",
    type: "Full-time",
    comp: "$100k–$130k + bonus",
    summary: "Design and run B2B/B2C surveys incl. conjoint/segmentation.",
    bullets: [
      "Own instrument design, sampling plans, and data QC.",
      "Partner with analysts on dashboards and stats storytelling.",
      "Deliver clear, decision-ready insights to exec audiences.",
    ],
  },
];

const perks = [
  { title: "Remote-first culture", icon: <Users size={16} /> },
  { title: "Learning budget", icon: <GraduationCap size={16} /> },
  { title: "Inclusive, supportive team", icon: <Sparkles size={16} /> },
  { title: "Transparent compensation", icon: <DollarSign size={16} /> },
];

const process = [
  "Intro screen with Talent",
  "Hiring manager interview",
  "Case or take-home (role-dependent)",
  "Panel + founder chat",
  "Offer & references",
];

const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.5, delay: d },
});

export default function CareersPage() {
  const [active, setActive] = useState(null);
  const [query, setQuery] = useState("");
  const [modal, setModal] = useState({ open: false, role: null });
  const [submitted, setSubmitted] = useState(false);

  const filtered = useMemo(() => {
    if (!query.trim()) return openings;
    const needle = query.toLowerCase();
    return openings.filter(
      (r) =>
        r.title.toLowerCase().includes(needle) ||
        r.summary.toLowerCase().includes(needle) ||
        r.location.toLowerCase().includes(needle)
    );
  }, [query]);

  return (
    <>
    <Header/>
    <main
      className="min-h-screen pt-28"
      style={{
        background: `radial-gradient(1200px 600px at 100% -50%, rgba(198,27,63,0.05), transparent),
                     radial-gradient(900px 500px at -10% 20%, rgba(25,26,55,0.06), transparent),
                     ${COLORS.surface}`,
      }}
    >
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 pb-10">
        <motion.div {...fadeUp(0.05)}>
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs"
               style={{ border: `1px solid ${COLORS.border}`, background: COLORS.white, color: COLORS.subtext }}>
            We’re hiring
          </div>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight" style={{ color: COLORS.navy }}>
            Careers
          </h1>
          <p className="mt-3 max-w-3xl text-lg" style={{ color: COLORS.subtext }}>
            Join a team that blends rigor, speed, and empathy to deliver primary research that matters.
          </p>
        </motion.div>

        {/* quick perks */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((p, i) => (
            <motion.div key={p.title} {...fadeUp(0.08 + i * 0.05)}
              className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm"
              style={{ border: `1px solid ${COLORS.border}` }}>
              <span className="flex h-9 w-9 items-center justify-center rounded-xl"
                    style={{ background: "linear-gradient(145deg, rgba(198,27,63,0.10), rgba(14,26,43,0.06))", border: `1px solid ${COLORS.border}` }}>
                {p.icon}
              </span>
              <div className="text-sm font-medium" style={{ color: COLORS.text }}>{p.title}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ROLES */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        {/* search */}
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <input
            placeholder="Search roles (e.g., Healthcare, Remote)…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-xl border bg-white px-3 py-2 text-sm outline-none sm:w-96"
            style={{ borderColor: COLORS.border }}
          />
          <div className="text-xs" style={{ color: COLORS.subtext }}>
            {filtered.length} roles found
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm" style={{ border: `1px solid ${COLORS.border}` }}>
          <h2 className="text-xl font-semibold" style={{ color: COLORS.navy }}>Open Roles</h2>
          <div className="mt-4 divide-y" style={{ borderColor: COLORS.border }}>
            {filtered.map((r) => (
              <div key={r.id} className="py-4">
                <button onClick={() => setActive(active === r.id ? null : r.id)}
                        className="flex w-full items-center justify-between text-left">
                  <div>
                    <div className="font-semibold" style={{ color: COLORS.text }}>{r.title}</div>
                    <div className="text-sm" style={{ color: COLORS.subtext }}>
                      <span className="inline-flex items-center gap-1 mr-3"><MapPin size={14} /> {r.location}</span>
                      <span className="inline-flex items-center gap-1 mr-3"><Briefcase size={14} /> {r.type}</span>
                      <span className="inline-flex items-center gap-1"><DollarSign size={14} /> {r.comp}</span>
                    </div>
                  </div>
                  <span className="text-sm" style={{ color: COLORS.primary }}>
                    {active === r.id ? "Hide" : "View"}
                  </span>
                </button>

                <AnimatePresence>
                  {active === r.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-3 rounded-xl border p-4" style={{ borderColor: COLORS.border }}>
                        <p className="text-sm" style={{ color: COLORS.subtext }}>{r.summary}</p>
                        <ul className="mt-3 list-disc pl-5 text-sm" style={{ color: COLORS.subtext }}>
                          {r.bullets.map((b) => <li key={b}>{b}</li>)}
                        </ul>
                        <div className="mt-4 flex gap-2">
                          <button
                            onClick={() => { setModal({ open: true, role: r }); setSubmitted(false); }}
                            className="rounded-lg px-4 py-2 text-sm font-semibold text-white"
                            style={{ background: COLORS.primary }}
                          >
                            Apply now
                          </button>
                          <button className="rounded-lg px-4 py-2 text-sm font-semibold"
                                  style={{ border: `1px solid ${COLORS.border}` }}>
                            Download JD <FileText size={14} className="inline ml-1" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERVIEW PROCESS */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-2xl bg-white p-6 shadow-sm" style={{ border: `1px solid ${COLORS.border}` }}>
          <h3 className="text-xl font-semibold" style={{ color: COLORS.navy }}>Interview Process</h3>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-5">
            {process.map((p, i) => (
              <motion.div key={p} {...fadeUp(0.05 + i * 0.04)}
                className="rounded-xl p-4"
                style={{ background: "linear-gradient(145deg, rgba(198,27,63,0.06), rgba(14,26,43,0.04))" }}>
                <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">Step {i + 1}</div>
                <div className="mt-1 text-sm font-medium" style={{ color: COLORS.text }}>{p}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { q: "Do you hire remotely?", a: "Yes—remote-first with optional office hubs. Work where you’re most effective." },
            { q: "Sponsorship?", a: "Role-dependent and region-dependent. Please mention in your application." },
            { q: "Application tips?", a: "Attach relevant work (redacted) and highlight measurable outcomes." },
          ].map((f, i) => (
            <motion.div key={f.q} {...fadeUp(0.05 + i * 0.05)}
              className="rounded-2xl bg-white p-5 shadow-sm" style={{ border: `1px solid ${COLORS.border}` }}>
              <div className="font-semibold" style={{ color: COLORS.text }}>{f.q}</div>
              <div className="mt-1 text-sm" style={{ color: COLORS.subtext }}>{f.a}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="mailto:talent@seekalpha.example" className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white"
             style={{ background: COLORS.primary }}>
            <Mail size={16} /> talent@seekalpha.example
          </a>
        </div>
      </section>

      {/* APPLY MODAL */}
      <AnimatePresence>
        {modal.open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 p-3"
            onClick={() => setModal({ open: false, role: null })}
          >
            <motion.div
              initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 24, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl"
              style={{ border: `1px solid ${COLORS.border}` }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-4">
                <div className="text-xs uppercase tracking-wide text-gray-500">Apply for</div>
                <h4 className="text-xl font-semibold" style={{ color: COLORS.navy }}>
                  {modal.role?.title}
                </h4>
              </div>

              {submitted ? (
                <div className="rounded-xl border p-4 text-sm" style={{ borderColor: COLORS.border, color: COLORS.subtext }}>
                  <div className="mb-1 font-semibold" style={{ color: COLORS.text }}>
                    <CheckCircle className="inline mr-1" size={16} /> Application received
                  </div>
                  We’ll review and get back to you by email. Thanks for applying!
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-sm font-medium" style={{ color: COLORS.text }}>Full name</label>
                    <input className="mt-1 w-full rounded-xl border px-3 py-2 text-sm"
                           style={{ borderColor: COLORS.border }} required />
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium" style={{ color: COLORS.text }}>Email</label>
                      <input type="email" className="mt-1 w-full rounded-xl border px-3 py-2 text-sm"
                             style={{ borderColor: COLORS.border }} required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium" style={{ color: COLORS.text }}>Location</label>
                      <input className="mt-1 w-full rounded-xl border px-3 py-2 text-sm"
                             style={{ borderColor: COLORS.border }} placeholder="City, Country" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium" style={{ color: COLORS.text }}>LinkedIn / Portfolio</label>
                    <input type="url" className="mt-1 w-full rounded-xl border px-3 py-2 text-sm"
                           style={{ borderColor: COLORS.border }} placeholder="https://…" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium" style={{ color: COLORS.text }}>Cover note</label>
                    <textarea rows={4} className="mt-1 w-full rounded-xl border px-3 py-2 text-sm"
                              style={{ borderColor: COLORS.border }}
                              placeholder="Briefly tell us why you’re a great fit…" />
                  </div>

                  <div className="flex items-center justify-between">
                    <small className="text-gray-500">We’ll never share your details.</small>
                    <button type="submit" className="rounded-xl px-5 py-2.5 text-sm font-semibold text-white"
                            style={{ background: COLORS.primary }}>
                      Submit application
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
    <Footer/>
    </>
  );
}
