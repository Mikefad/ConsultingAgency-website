// src/pages/ContactPage.jsx (replace your current file)
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";

import Header from "./header";
import Footer from "./footer";

// Assets you already have
import logo2 from "./assets/logo_no_text2.png";
// Optional: swap to local images if you prefer
const HERO_IMG =
  "https://res.cloudinary.com/dcbk2d6pl/image/upload/f_auto,q_auto,w_1600/v1751818400/business-team-watching-discussing-project-presentation_rbmx41.jpg";

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
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.5, delay: d },
});

export default function ContactPage() {
  // simple page fade-in (keeps your brand’s smooth feel without heavy loader)
  const [boot, setBoot] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setBoot(false), 350);
    return () => clearTimeout(t);
  }, []);

  // form state
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = useMemo(
    () => () => {
      const e = {};
      if (!form.name.trim()) e.name = "Please enter your name.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
      if (!form.subject.trim()) e.subject = "Please add a subject.";
      if (form.message.trim().length < 10) e.message = "Message should be at least 10 characters.";
      return e;
    },
    [form]
  );

  const onSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    // TODO: hook to your backend/email service
    setSubmitted(true);
  };

  // in-view hooks for animations
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const faqRef = useRef(null);
  const inViewForm = useInView(formRef, { once: true, amount: 0.25 });
  const inViewInfo = useInView(infoRef, { once: true, amount: 0.25 });
  const inViewFaq = useInView(faqRef, { once: true, amount: 0.25 });

  return (
    <div className="bg-white">
      <Header />

      {/* HERO */}
      <section className="relative pt-28">
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: boot ? 0 : 1, y: boot ? 12 : 0 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-3xl"
            style={{ border: `1px solid ${COLORS.border}` }}
          >
            <div className="relative h-[42vh] min-h-[320px] w-full">
              <img src={HERO_IMG} alt="" className="h-full w-full object-cover" />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(25,26,55,0.46) 0%, rgba(25,26,55,0.25) 40%, rgba(25,26,55,0.15) 100%)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                <div>
                  <div
                    className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs"
                    style={{ border: `1px solid #ffffff66`, color: "white", background: "#ffffff22" }}
                  >
                    We’d love to hear from you
                  </div>
                  <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                    Let’s Talk
                  </h1>
                  <p className="mx-auto mt-3 max-w-2xl text-white/85">
                    Tell us about your challenge and we’ll match you with the right expert or consulting pod.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section
        className="py-8"
        style={{
          background: `radial-gradient(900px 400px at 100% -20%, rgba(198,27,63,0.06), transparent),
                       ${COLORS.surface}`,
        }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              { icon: <Mail size={16} />, label: "Email", value: "hello@seekalpha.example" },
              { icon: <Phone size={16} />, label: "Phone", value: "+1 (555) 123-4567" },
              { icon: <Clock size={16} />, label: "Hours", value: "Mon–Fri • 9:00–17:00" },
            ].map((c, i) => (
              <motion.div
                key={c.label}
                {...fadeUp(0.04 + i * 0.05)}
                className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm"
                style={{ border: `1px solid ${COLORS.border}` }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-xl"
                    style={{
                      background:
                        "linear-gradient(145deg, rgba(198,27,63,0.10), rgba(14,26,43,0.06))",
                      border: `1px solid ${COLORS.border}`,
                    }}
                  >
                    {c.icon}
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-gray-500">{c.label}</div>
                    <div className="text-sm font-medium" style={{ color: COLORS.text }}>
                      {c.value}
                    </div>
                  </div>
                </div>
                <img src={logo2} alt="" className="h-6 w-6 opacity-20" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM + INFO */}
      <main className="py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 lg:grid-cols-3">
          {/* FORM */}
          <motion.section
            ref={formRef}
            {...fadeUp(0.02)}
            animate={inViewForm ? { opacity: 1, y: 0 } : {}}
            className="lg:col-span-2 rounded-2xl bg-white p-6 shadow-sm"
            style={{ border: `1px solid ${COLORS.border}` }}
          >
            <h2 className="text-2xl font-semibold" style={{ color: COLORS.navy }}>
              Send us a message
            </h2>
            <p className="mt-1 text-sm" style={{ color: COLORS.subtext }}>
              We typically respond within one business day.
            </p>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-5 rounded-xl border p-5"
                  style={{ borderColor: COLORS.border }}
                >
                  <div className="mb-2 text-lg font-semibold" style={{ color: COLORS.navy }}>
                    <CheckCircle className="mr-2 inline" size={18} />
                    Message sent
                  </div>
                  <div className="text-sm" style={{ color: COLORS.subtext }}>
                    Thanks for reaching out — we’ll get back to you at {form.email}.
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={onSubmit}
                  className="mt-5 space-y-4"
                >
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium" style={{ color: COLORS.text }}>
                        Name
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        className="mt-1 w-full rounded-xl border px-3 py-2 text-sm outline-none"
                        style={{ borderColor: errors.name ? "#ef4444" : COLORS.border }}
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <div className="mt-1 flex items-center gap-1 text-xs text-red-600">
                          <AlertCircle size={12} /> {errors.name}
                        </div>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium" style={{ color: COLORS.text }}>
                        Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={onChange}
                        className="mt-1 w-full rounded-xl border px-3 py-2 text-sm outline-none"
                        style={{ borderColor: errors.email ? "#ef4444" : COLORS.border }}
                        placeholder="you@company.com"
                      />
                      {errors.email && (
                        <div className="mt-1 flex items-center gap-1 text-xs text-red-600">
                          <AlertCircle size={12} /> {errors.email}
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium" style={{ color: COLORS.text }}>
                      Subject
                    </label>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={onChange}
                      className="mt-1 w-full rounded-xl border px-3 py-2 text-sm outline-none"
                      style={{ borderColor: errors.subject ? "#ef4444" : COLORS.border }}
                      placeholder="How can we help?"
                    />
                    {errors.subject && (
                      <div className="mt-1 flex items-center gap-1 text-xs text-red-600">
                        <AlertCircle size={12} /> {errors.subject}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium" style={{ color: COLORS.text }}>
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={onChange}
                      className="mt-1 w-full rounded-xl border px-3 py-2 text-sm outline-none"
                      style={{ borderColor: errors.message ? "#ef4444" : COLORS.border }}
                      placeholder="Share a few details about your project or question…"
                    />
                    {errors.message && (
                      <div className="mt-1 flex items-center gap-1 text-xs text-red-600">
                        <AlertCircle size={12} /> {errors.message}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <small className="text-gray-500">
                      Please don’t include confidential or MNPI information.
                    </small>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white"
                      style={{ background: COLORS.primary }}
                    >
                      <Send size={16} /> Send message
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.section>

          {/* INFO + MAP + FAQ */}
          <div className="space-y-6">
            <motion.section
              ref={infoRef}
              {...fadeUp(0.03)}
              animate={inViewInfo ? { opacity: 1, y: 0 } : {}}
              className="rounded-2xl bg-white p-6 shadow-sm"
              style={{ border: `1px solid ${COLORS.border}` }}
            >
              <h3 className="text-lg font-semibold" style={{ color: COLORS.navy }}>
                Our office
              </h3>
              <div className="mt-2 text-sm" style={{ color: COLORS.subtext }}>
                123 Consultant Ave, Suite 400
                <br />
                City, State, ZIP
              </div>

              <div className="mt-4 overflow-hidden rounded-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.292945892556!2d144.9631!3d-37.8162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0ee1c17b%3A0x6d3d9d3d3d3d3d3d!2sMelbourne%20VIC!5e0!3m2!1sen!2sus!4v1678912345678"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="office-map"
                />
              </div>
            </motion.section>

            <motion.section
              ref={faqRef}
              {...fadeUp(0.04)}
              animate={inViewFaq ? { opacity: 1, y: 0 } : {}}
              className="rounded-2xl bg-white p-6 shadow-sm"
              style={{ border: `1px solid ${COLORS.border}` }}
            >
              <h3 className="text-lg font-semibold" style={{ color: COLORS.navy }}>
                FAQ
              </h3>
              <div className="mt-3 divide-y" style={{ borderColor: COLORS.border }}>
                {[
                  {
                    q: "How soon will you respond?",
                    a: "We respond within one business day. Urgent? Mention your deadline in the subject.",
                  },
                  {
                    q: "Can you source experts in niche areas?",
                    a: "Yes. We maintain a broad network and run targeted outreach to find the right operator for your brief.",
                  },
                  {
                    q: "Do you provide transcripts and moderation?",
                    a: "Both are available on request. We also handle scheduling, compliance, and payment.",
                  },
                ].map((f, i) => (
                  <details key={f.q} className="group py-3">
                    <summary className="cursor-pointer list-none text-sm font-medium" style={{ color: COLORS.text }}>
                      {f.q}
                    </summary>
                    <div className="mt-1 text-sm" style={{ color: COLORS.subtext }}>
                      {f.a}
                    </div>
                  </details>
                ))}
              </div>
            </motion.section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

