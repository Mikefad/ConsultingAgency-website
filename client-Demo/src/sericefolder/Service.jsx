// src/pages/services.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
import Leadersection from "./leadership";
import Journeysection from "./journey";
import Differencesection from "./differnce";
import Valuesection from "./values";

import logo2 from "../assets/logo_no_text2.png";
import mission from "../assets/david-iskander-GTnFf_44e7o-unsplash.jpg";

// Nextyn-style palette
const COLORS = {
  navy: "#191a37",
  surface: "#f6f7fb",
  text: "#0b1323",
  subtext: "#5a6576",
  primary: "#c61b3f",
  border: "#e5e8ef",
  white: "#ffffff",
};

export default function AboutUsPage() {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.55, delay },
  });

  return (
    <div className="bg-white">
      {/* Fixed header you already use */}
      <Header />

      {/* HERO */}
      <section
        className="relative pt-28"
        style={{
          background: `
            radial-gradient(1200px 600px at 100% -50%, rgba(198,27,63,0.05), transparent),
            radial-gradient(900px 500px at -10% 20%, rgba(25,26,55,0.06), transparent),
            ${COLORS.surface}
          `,
        }}
      >
        <div className="mx-auto max-w-7xl px-6 pb-10">
          <motion.div {...fadeUp(0.05)}>
            <div
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs"
              style={{ border: `1px solid ${COLORS.border}`, background: COLORS.white, color: COLORS.subtext }}
            >
              Strategy • Research • Execution
            </div>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight" style={{ color: COLORS.navy }}>
              Our Services
            </h1>
            <p className="mt-3 max-w-3xl text-lg" style={{ color: COLORS.subtext }}>
              Outcome-driven consulting that blends expert access, primary research, and hands-on delivery.
            </p>
          </motion.div>

          {/* Hero split */}
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div
              {...fadeUp(0.1)}
              className="rounded-2xl p-6 shadow-sm"
              style={{ background: COLORS.white, border: `1px solid ${COLORS.border}` }}
            >
              <h3 className="text-xl font-semibold" style={{ color: COLORS.navy }}>
                What we do
              </h3>
              <p className="mt-2 text-sm" style={{ color: COLORS.subtext }}>
                We scope the question, choose the right method, and deliver clear, defendable answers—fast. From Expert
                Calls to fully moderated programs and mixed-methods research, we tailor the approach to the decision
                you’re making.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {["Expert Calls", "IDIs", "Surveys", "Focus Groups", "Retail Audits", "CX Programs"].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full px-3 py-1 text-xs"
                    style={{ background: COLORS.white, border: `1px solid ${COLORS.border}`, color: COLORS.subtext }}
                  >
                    {chip}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex gap-3">
                <Link
                  to="/book-session"
                  className="rounded-xl px-4 py-2 text-sm font-semibold text-white"
                  style={{ background: COLORS.primary }}
                >
                  Book a Session
                </Link>
                <Link
                  to="/register-expert"
                  className="rounded-xl px-4 py-2 text-sm font-semibold"
                  style={{ border: `1px solid ${COLORS.border}`, color: COLORS.navy, background: COLORS.white }}
                >
                  Register as an Expert
                </Link>
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.15)} className="overflow-hidden rounded-2xl">
              <img
                src={mission}
                alt="Consulting collaboration"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                style={{ border: `1px solid ${COLORS.border}` }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES (enhanced) */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <motion.h2
          {...fadeUp(0.05)}
          className="text-3xl sm:text-4xl font-bold text-center mb-10"
          style={{ color: COLORS.navy }}
        >
          Core Service Pillars
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Strategy Consulting",
              copy:
                "Growth plans, market entry, positioning, and portfolio moves backed by defensible evidence.",
            },
            {
              title: "Operational Excellence",
              copy:
                "Process diagnostics, cost reduction, and execution roadmaps that stick beyond the slide.",
            },
            {
              title: "Change & Transformation",
              copy:
                "Digital + org transformation with pragmatic governance and adoption strategies.",
            },
            {
              title: "Research & Insights",
              copy:
                "Qualitative and quantitative evidence—IDIs, surveys, FGDs, audits, and VoC.",
            },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              {...fadeUp(0.08 + i * 0.05)}
              className="rounded-2xl p-6 shadow-sm hover:-translate-y-1 transition-transform"
              style={{ background: COLORS.white, border: `1px solid ${COLORS.border}` }}
            >
              <h3 className="text-lg font-semibold" style={{ color: COLORS.navy }}>
                {c.title}
              </h3>
              <p className="mt-2 text-sm" style={{ color: COLORS.subtext }}>
                {c.copy}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* YOUR EXISTING SECTIONS — refreshed styles inside each component */}
      <div
        className="py-16"
        style={{
          background:
            "linear-gradient(180deg, rgba(25,26,55,0.02), rgba(198,27,63,0.02))",
        }}
      >
        <Valuesection />
      </div>

      <div className="py-2" />

      <div className="py-16">
        <Differencesection />
      </div>

      <div className="py-16" style={{ background: COLORS.surface }}>
        <Journeysection />
      </div>

      <div className="py-16">
        <Leadersection />
      </div>

      {/* CTA STRIP */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <motion.div
          {...fadeUp(0.05)}
          className="rounded-2xl p-6 text-center"
          style={{
            background: "linear-gradient(90deg, rgba(198,27,63,0.08), rgba(25,26,55,0.06))",
            border: `1px solid ${COLORS.border}`,
          }}
        >
          <p className="text-sm" style={{ color: COLORS.navy }}>
            Not sure which path is right? We’ll help you scope the right method and talent.
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-3">
            <Link
              to="/book-session"
              className="rounded-xl px-5 py-2.5 text-sm font-semibold text-white"
              style={{ background: COLORS.primary }}
            >
              Book a Consulting Session
            </Link>
            <Link
              to="/register-expert"
              className="rounded-xl px-5 py-2.5 text-sm font-semibold"
              style={{ background: COLORS.white, color: COLORS.navy, border: `1px solid ${COLORS.border}` }}
            >
              Register as an Expert
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
