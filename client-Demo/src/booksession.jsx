import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar, Clock, Users, Target, Phone, Video, Mail, Building2, CheckCircle, AlertCircle
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

const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: d },
});

export default function BookSessionPage() {
  const [submitted, setSubmitted] = useState(false);
  const [mode, setMode] = useState("Video");
  const [duration, setDuration] = useState("60");

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: hook to backend / calendaring
    setSubmitted(true);
  };

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
      <section className="mx-auto max-w-7xl px-6 pb-12">
        {/* HERO */}
        <motion.div {...fadeUp(0.05)}>
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs"
               style={{ border: `1px solid ${COLORS.border}`, background: COLORS.white, color: COLORS.subtext }}>
            Schedule a consultation
          </div>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight" style={{ color: COLORS.navy }}>
            Book a Consulting Session
          </h1>
          <p className="mt-3 max-w-3xl text-lg" style={{ color: COLORS.subtext }}>
            Tell us what you need, pick a time, and we’ll match you with the right expert or consulting pod.
          </p>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* LEFT: Form */}
          <motion.div {...fadeUp(0.08)} className="lg:col-span-2 rounded-2xl bg-white p-6 shadow-sm"
                      style={{ border: `1px solid ${COLORS.border}` }}>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                  className="rounded-xl border p-6"
                  style={{ borderColor: COLORS.border }}
                >
                  <div className="mb-2 text-lg font-semibold" style={{ color: COLORS.navy }}>
                    <CheckCircle className="mr-2 inline" size={18} /> Request received
                  </div>
                  <p className="text-sm" style={{ color: COLORS.subtext }}>
                    We’ll email you proposed times and a consultant shortlist. You can confirm or reschedule with one click.
                  </p>
                </motion.div>
              ) : (
                <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={onSubmit} className="space-y-5">
                  {/* Contact */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium" style={{ color: COLORS.text }}>
                        Work email
                      </label>
                      <div className="relative">
                        <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input required type="email" className="mt-1 w-full rounded-xl border pl-9 pr-3 py-2 text-sm"
                               style={{ borderColor: COLORS.border }} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium" style={{ color: COLORS.text }}>
                        Company
                      </label>
                      <div className="relative">
                        <Building2 size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input className="mt-1 w-full rounded-xl border pl-9 pr-3 py-2 text-sm"
                               style={{ borderColor: COLORS.border }} />
                      </div>
                    </div>
                  </div>

                  {/* Project basics */}
                  <div>
                    <label className="block text-sm font-medium" style={{ color: COLORS.text }}>
                      Project objective
                    </label>
                    <div className="relative">
                      <Target size={16} className="absolute left-3 top-3 text-gray-400" />
                      <textarea required rows={3} className="mt-1 w-full rounded-xl border pl-9 pr-3 py-2 text-sm"
                                style={{ borderColor: COLORS.border }}
                                placeholder="What decision are you trying to make? What evidence do you need?" />
                    </div>
                  </div>

                  {/* Preferences */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div>
                      <label className="block text-sm font-medium" style={{ color: COLORS.text }}>
                        Preferred date
                      </label>
                      <div className="relative">
                        <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input required type="date" className="mt-1 w-full rounded-xl border pl-9 pr-3 py-2 text-sm"
                               style={{ borderColor: COLORS.border }} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium" style={{ color: COLORS.text }}>
                        Preferred time
                      </label>
                      <div className="relative">
                        <Clock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input required type="time" className="mt-1 w-full rounded-xl border pl-9 pr-3 py-2 text-sm"
                               style={{ borderColor: COLORS.border }} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium" style={{ color: COLORS.text }}>
                        Duration
                      </label>
                      <select value={duration} onChange={(e) => setDuration(e.target.value)}
                              className="mt-1 w-full rounded-xl border px-3 py-2 text-sm"
                              style={{ borderColor: COLORS.border }}>
                        <option value="30">30 min</option>
                        <option value="60">60 min</option>
                        <option value="90">90 min</option>
                      </select>
                    </div>
                  </div>

                  {/* Mode & participants */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium" style={{ color: COLORS.text }}>
                        Participants (names & roles)
                      </label>
                      <div className="relative">
                        <Users size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input className="mt-1 w-full rounded-xl border pl-9 pr-3 py-2 text-sm"
                               style={{ borderColor: COLORS.border }} placeholder="e.g., Jane (VP Strategy), Omar (PM)" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium" style={{ color: COLORS.text }}>
                        Meeting mode
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { label: "Video", icon: <Video size={14} /> },
                          { label: "Phone", icon: <Phone size={14} /> },
                        ].map((opt) => {
                          const active = mode === opt.label;
                          return (
                            <button
                              key={opt.label}
                              type="button"
                              onClick={() => setMode(opt.label)}
                              className="flex items-center justify-center gap-1 rounded-xl px-3 py-2 text-sm font-medium"
                              style={{
                                background: active ? COLORS.primary : COLORS.white,
                                color: active ? "white" : COLORS.subtext,
                                border: `1px solid ${COLORS.border}`,
                              }}
                            >
                              {opt.icon} {opt.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Optional details */}
                  <div>
                    <label className="block text-sm font-medium" style={{ color: COLORS.text }}>
                      Additional context (optional)
                    </label>
                    <textarea rows={3} className="mt-1 w-full rounded-xl border px-3 py-2 text-sm"
                              style={{ borderColor: COLORS.border }}
                              placeholder="Targets, regions, personas, constraints, or sample experts you'd like." />
                    <div className="mt-2 flex items-start gap-2 text-xs text-amber-600">
                      <AlertCircle size={14} /> Please do not include confidential or MNPI information.
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="flex items-center justify-between">
                    <small className="text-gray-500">We respond within one business day.</small>
                    <button
                      type="submit"
                      className="rounded-xl px-5 py-2.5 text-sm font-semibold text-white"
                      style={{ background: COLORS.primary }}
                    >
                      Request session
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* RIGHT: Sidebar */}
          <motion.aside {...fadeUp(0.1)} className="rounded-2xl bg-white p-6 shadow-sm"
                        style={{ border: `1px solid ${COLORS.border}` }}>
            <h3 className="text-lg font-semibold" style={{ color: COLORS.navy }}>What to expect</h3>
            <ul className="mt-3 list-disc pl-5 text-sm" style={{ color: COLORS.subtext }}>
              <li>Proposed times and expert shortlist sent to your email.</li>
              <li>Optional moderation and transcripts available.</li>
              <li>Clear rates before you confirm. No surprises.</li>
            </ul>

            <div className="mt-5 rounded-xl p-4"
                 style={{ background: "linear-gradient(145deg, rgba(198,27,63,0.06), rgba(14,26,43,0.04))" }}>
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">Common Sessions</div>
              <ul className="mt-2 list-disc pl-5 text-sm" style={{ color: COLORS.subtext }}>
                <li>Market scoping & hypothesis check</li>
                <li>Buyer journey / win–loss drivers</li>
                <li>Clinical, payer, or regulatory landscape</li>
              </ul>
            </div>
          </motion.aside>
        </div>
      </section>
    </main>
    <Footer/>
    </>
  );
}
