import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User, Mail, MapPin, Briefcase, GraduationCap, Link as LinkIcon, Upload, DollarSign, ShieldCheck, CheckCircle
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

const SECTORS = [
  "Healthcare / Life Sciences", "Financial Services", "Energy & Utilities", "TMT", "Consumer & Retail",
  "Industrials / Manufacturing", "Public Sector", "Logistics & Supply Chain"
];

const METHODS = ["Expert Calls", "Moderated Calls", "Advisory Projects", "Workshops", "Interim / Fractional"];

export default function RegisterExpertPage() {
  const [submitted, setSubmitted] = useState(false);
  const [agree, setAgree] = useState(false);
  const [sectors, setSectors] = useState([]);
  const [methods, setMethods] = useState([]);

  const toggle = (value, list, setList) =>
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!agree) {
      alert("Please confirm compliance & privacy.");
      return;
    }
    // TODO: hook to backend
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
            Join the network
          </div>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight" style={{ color: COLORS.navy }}>
            Register as an Expert
          </h1>
          <p className="mt-3 max-w-3xl text-lg" style={{ color: COLORS.subtext }}>
            Work on paid calls and projects with vetted clients. We handle scheduling, compliance, and payment.
          </p>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* LEFT: Highlights */}
          <motion.aside {...fadeUp(0.08)} className="lg:col-span-1 space-y-4">
            {[
              { title: "Flexible work", text: "Calls typically 45–60 minutes. You set availability and topics." },
              { title: "Fair compensation", text: "Transparent hourly rates; paid promptly after each engagement." },
              { title: "Compliance first", text: "No MNPI. We run conflict checks and NDAs where required." },
            ].map((b, i) => (
              <div key={b.title} className="rounded-2xl bg-white p-5 shadow-sm" style={{ border: `1px solid ${COLORS.border}` }}>
                <div className="text-sm font-semibold" style={{ color: COLORS.navy }}>{b.title}</div>
                <p className="mt-1 text-sm" style={{ color: COLORS.subtext }}>{b.text}</p>
              </div>
            ))}
          </motion.aside>

          {/* RIGHT: Form */}
          <motion.div {...fadeUp(0.1)} className="lg:col-span-2 rounded-2xl bg-white p-6 shadow-sm"
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
                    <CheckCircle className="mr-2 inline" size={18} /> Application received
                  </div>
                  <p className="text-sm" style={{ color: COLORS.subtext }}>
                    We’ll review your profile and get back to you via email. Thanks for registering!
                  </p>
                </motion.div>
              ) : (
                <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={onSubmit} className="space-y-5">
                  {/* Basic info */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium" style={{ color: COLORS.text }}>
                        Full name
                      </label>
                      <div className="relative">
                        <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input required className="mt-1 w-full rounded-xl border pl-9 pr-3 py-2 text-sm"
                               style={{ borderColor: COLORS.border }} />
                      </div>
                    </div>
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
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div>
                      <label className="block text-sm font-medium" style={{ color: COLORS.text }}>
                        Location
                      </label>
                      <div className="relative">
                        <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input placeholder="City, Country" className="mt-1 w-full rounded-xl border pl-9 pr-3 py-2 text-sm"
                               style={{ borderColor: COLORS.border }} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium" style={{ color: COLORS.text }}>
                        Current role / title
                      </label>
                      <div className="relative">
                        <Briefcase size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input className="mt-1 w-full rounded-xl border pl-9 pr-3 py-2 text-sm"
                               style={{ borderColor: COLORS.border }} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium" style={{ color: COLORS.text }}>
                        Years of experience
                      </label>
                      <div className="relative">
                        <GraduationCap size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input type="number" min="0" className="mt-1 w-full rounded-xl border pl-9 pr-3 py-2 text-sm"
                               style={{ borderColor: COLORS.border }} />
                      </div>
                    </div>
                  </div>

                  {/* Expertise */}
                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium" style={{ color: COLORS.text }}>
                        Primary sectors
                      </label>
                      <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {SECTORS.map((s) => (
                          <label key={s} className="flex items-center gap-2 text-sm" style={{ color: COLORS.subtext }}>
                            <input
                              type="checkbox"
                              checked={sectors.includes(s)}
                              onChange={() => toggle(s, sectors, setSectors)}
                              className="h-4 w-4 rounded border-gray-300"
                            />
                            {s}
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium" style={{ color: COLORS.text }}>
                        Engagement types
                      </label>
                      <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {METHODS.map((m) => (
                          <label key={m} className="flex items-center gap-2 text-sm" style={{ color: COLORS.subtext }}>
                            <input
                              type="checkbox"
                              checked={methods.includes(m)}
                              onChange={() => toggle(m, methods, setMethods)}
                              className="h-4 w-4 rounded border-gray-300"
                            />
                            {m}
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Rates + Links */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div>
                      <label className="block text-sm font-medium" style={{ color: COLORS.text }}>
                        Hourly rate (USD)
                      </label>
                      <div className="relative">
                        <DollarSign size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input type="number" min="0" placeholder="e.g., 300"
                               className="mt-1 w-full rounded-xl border pl-9 pr-3 py-2 text-sm"
                               style={{ borderColor: COLORS.border }} />
                      </div>
                      <p className="mt-1 text-[11px] text-gray-500">Displayed to clients only when you accept.</p>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium" style={{ color: COLORS.text }}>
                        LinkedIn / Portfolio URL
                      </label>
                      <div className="relative">
                        <LinkIcon size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input type="url" placeholder="https://…" className="mt-1 w-full rounded-xl border pl-9 pr-3 py-2 text-sm"
                               style={{ borderColor: COLORS.border }} />
                      </div>
                    </div>
                  </div>

                  {/* Resume upload (placeholder) */}
                  <div>
                    <label className="block text-sm font-medium" style={{ color: COLORS.text }}>
                      Resume / Profile (PDF)
                    </label>
                    <label className="mt-1 flex cursor-pointer items-center justify-between rounded-xl border px-4 py-3 text-sm"
                           style={{ borderColor: COLORS.border }}>
                      <span className="flex items-center gap-2" style={{ color: COLORS.subtext }}>
                        <Upload size={16} /> Click to upload (optional)
                      </span>
                      <span className="text-xs text-gray-500">Max 10MB</span>
                      <input type="file" accept="application/pdf" className="hidden" onChange={() => {}} />
                    </label>
                  </div>

                  {/* Compliance */}
                  <div className="rounded-xl border p-4" style={{ borderColor: COLORS.border }}>
                    <div className="flex items-start gap-2">
                      <ShieldCheck size={18} className="mt-0.5 text-green-600" />
                      <p className="text-xs" style={{ color: COLORS.subtext }}>
                        I confirm I will not disclose confidential information or MNPI, and I have reviewed company
                        conflicts/contractual obligations related to outside engagements.
                      </p>
                    </div>
                    <label className="mt-3 flex items-center gap-2 text-sm" style={{ color: COLORS.subtext }}>
                      <input type="checkbox" className="h-4 w-4 rounded border-gray-300" checked={agree}
                             onChange={(e) => setAgree(e.target.checked)} />
                      I agree to the compliance and privacy terms.
                    </label>
                  </div>

                  {/* Submit */}
                  <div className="flex items-center justify-between">
                    <small className="text-gray-500">We’ll never share your details.</small>
                    <button
                      type="submit"
                      className="rounded-xl px-5 py-2.5 text-sm font-semibold text-white"
                      style={{ background: COLORS.primary }}
                    >
                      Submit registration
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </main>
    <Footer/>
    </>
  );
}
