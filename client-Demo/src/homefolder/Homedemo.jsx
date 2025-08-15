import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Header from "../header";
import Footer from "../footer";
import Worksection from "./work";
import Viewsection from "./view";
import Offersection from "./offer";
import Productsection from "./products";

// Assets
import logo from "../assets/Black White Minimalist Simple Monogram Typography Logo (3).png";
import logo2 from "../assets/Black_White_Minimalist_Simple_Monogram_Typography_Logo__2_-removebg-preview.png";
import logo3 from "../assets/Red_Modern_Law_Consulting_Firm_Logo-removebg-preview 2.png";

// import newbanner from "../assets/89627-614703091_small.mp4";

import newbanner from "../assets/144586-785095790_small.mp4";

import CountUp from "react-countup";

import arrow from "../assets/focus-on-results.png";
import pie from "../assets/pie-chart.png";
import groupsmile from "../assets/istockphoto-2094337698-1024x1024.jpg";

/**
 * HOMEPAGE — Nextyn-style layout + AI hero banner
 *
 * Implements client feedback:
 *  - Light theme overall; deep-navy header; red primary CTA (Nextyn-inspired)
 *  - Hero keeps an abstract AI video/image background (dynamic), but with light readable overlay
 *  - Replace CTAs with: "Register as an Expert" and "Book a Consulting Session"
 *  - Remove gap in brand name → "SEEKALPHA" and remove "Consulting Agency" subtitle
 *  - Add subtle motion/hover effects for a modern, tech feel
 *  - Accessibility improvements (semantic landmarks, aria-labels, alt text)
 */

// Color tokens (approximate Nextyn vibe)
const COLORS = {
  navy: "#0e1a2b",          // header/footers accents
  navySoft: "#12203a",      // card background on dark blocks
  surface: "#f6f7fb",       // page background
  text: "#0b1323",          // primary text
  subtext: "#5a6576",       // secondary text
  primary: "#c61b3f",       // red CTA
  primaryHover: "#a31634",
  border: "#e5e8ef",
};

const HeroBadge = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium"
        style={{ borderColor: COLORS.border, color: COLORS.subtext }}>
    {children}
  </span>
);

const StatCard = ({ value, label }) => (
  <div className="rounded-2xl p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 bg-[#f7f7f7]"
       style={{ border: `1px solid ${COLORS.border}` }}>
    <div className="text-5xl font-extrabold " style={{ color: COLORS.text }}>
      <CountUp start={0} end={value} duration={2.4} separator="," />+
    </div>
    <p className="mt-2 text-sm" style={{ color: COLORS.subtext }}>{label}</p>
  </div>
);

export default function Homedemopage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [isLoading, setIsLoading] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload <img> tags
  useEffect(() => {
    const images = Array.from(document.images);
    const promises = images.map((img) => {
      if (img.complete && img.naturalHeight !== 0) return Promise.resolve();
      return new Promise((res) => {
        img.onload = res;
        img.onerror = res;
      });
    });
    Promise.all(promises).then(() => setImagesLoaded(true));
  }, []);

  // Loader timeout
  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 6000);
    if (videoLoaded && imagesLoaded) {
      clearTimeout(t);
      setIsLoading(false);
    }
    return () => clearTimeout(t);
  }, [videoLoaded, imagesLoaded]);

  if (isLoading) {
    return (
      <section className="min-h-screen w-full" style={{ background: COLORS.navy, color: "white" }} aria-busy>
        <div className="flex min-h-screen flex-col items-center justify-center">
          <div className="mb-8 flex items-center gap-3">
            <img src={logo3} alt="SEEKALPHA logo" className="h-16 w-16" />
            <h1 className="text-3xl font-extrabold tracking-wide">SEEKALPHA</h1>
          </div>
          <div className="h-1 w-56 overflow-hidden rounded-full bg-white/20">
            <div className="h-full w-1/3 animate-pulse rounded-full bg-white/80" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Header expects to render the requested nav: Solutions, Sector, Insights, Careers, Contact Us */}
      <Header />

      {/* HERO */}
      <section id="intro" className="relative isolate" aria-label="Hero">
  {/* HERO FRAME — overlays only live inside this box */}
  <div className="relative h-[88vh] w-full overflow-hidden">
    {/* Background video */}
    <video
      src="https://res.cloudinary.com/dcbk2d6pl/video/upload/q_auto:good,vc_auto,f_auto/v1755269768/144586-785095790_small_lahscq.mp4
"
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 h-full w-full object-cover"
      onLoadedData={() => setVideoLoaded(true)}
    />

    {/* Overlays (now constrained to 88vh) */}
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-black/55 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#191a37]/40 via-transparent to-[#191a37]/70 pointer-events-none" />
    </div>

    {/* Hero content centered within the frame */}
    <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-4 flex gap-3">
          <HeroBadge>Expert Network • Primary Research</HeroBadge>
          <HeroBadge>AI-informed Insights</HeroBadge>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
        >
          We help clients drive growth through Primary
          <span className="bg-gradient-to-r from-white to-[#c61b3f] bg-clip-text text-transparent">
            {" "}Research
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-5 max-w-2xl text-base sm:text-lg text-white/85 drop-shadow"
        >
          SEEKALPHA connects you with vetted subject-matter experts for expert calls, surveys,
          and bespoke research—delivered quickly and securely.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a
            href="register-expert"
            className="rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-lg focus:outline-none focus-visible:ring"
            style={{ background: COLORS.primary }}
          >
            Register as an Expert
          </a>
          <a
            href="book-session"
            className="rounded-xl px-5 py-3 text-sm font-semibold bg-white text-[#191a37] shadow-lg focus:outline-none focus-visible:ring"
            style={{ border: `1px solid ${COLORS.border}` }}
          >
            Book a Consulting Session
          </a>
        </motion.div>
      </div>
    </div>
  </div>

  {/* STATS live outside the hero frame (so overlays don't cover them) */}
  <div className="mx-auto mt-12 max-w-7xl px-6">
    <div className="grid grid-cols-1 gap-9 sm:grid-cols-3">
      <StatCard value={22000} label="Expert Calls Facilitated" />
      <StatCard value={1800} label="On-Demand Meetings" />
      <StatCard value={34} label="Industry Moderators" />
    </div>
  </div>
</section>


      {/* BRAND STRIP */}
      <section aria-label="Brand" className="py-14">
        <div className="mx-auto flex max-w-5xl items-center justify-center gap-4 px-6">
          <img src={logo3} alt="SEEKALPHA monogram" className="h-20 w-20" />
          <h2 className="text-4xl font-extrabold tracking-tight text-[#191a37]" >SEEKALPHA</h2>
        </div>
      </section>

      {/* ABOUT / WHO WE ARE */}
      <section aria-labelledby="who-title" className="pb-6 pt-2">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 sm:grid-cols-3">
          <div className="sm:col-span-2">
            <img
              src={groupsmile}
              alt="Our consultants collaborating with clients"
              className="h-[360px] w-full rounded-2xl object-cover"
            />
          </div>
          <div>
            <motion.h3
              id="who-title"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold"
              style={{ color: COLORS.text }}
            >
              Who We Are
            </motion.h3>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm" style={{ color: COLORS.subtext }}>
              <li>Global expert network connecting corporates, investment firms, and professional services to real‑world operators.</li>
              <li>Primary research at speed: expert calls, surveys, moderated panels, and custom diligence.</li>
              <li>Compliance‑first process with transparent sourcing and documented vetting.</li>
              <li>Modern stack (React + Vercel) for performance, security, and scalability.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* VALUE STRIPE */}
      <section aria-label="Value" className="py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-8"
            style={{ background: COLORS.navy, color: "white" }}
          >
            <img src={arrow} alt="Results icon" className="mb-4 h-16 w-16 invert" />
            <h3 className="text-xl font-semibold">Custom, Flexible, and Scalable Solutions</h3>
            <p className="mt-2 text-sm text-white/80">
              One‑time expert calls, long‑term consulting, or large‑scale surveys—choose a model that fits your needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-8"
            style={{ background: COLORS.navySoft, color: "white" }}
          >
            <img src={pie} alt="Insights icon" className="mb-4 h-14 w-14 invert" />
            <h3 className="text-xl font-semibold">Holistic Approach to Primary Research</h3>
            <p className="mt-2 text-sm text-white/85">
              Right insights, right time, right methodology—covering every aspect of your business intelligence needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Existing sections retained */}
      <Offersection />
      <Productsection />
      <Worksection />

      <hr className="mx-auto my-16 w-1/2" style={{ borderColor: COLORS.border }} />

      <Viewsection />

      <Footer />

      <style jsx global>{`
        :root {
          --navy: ${COLORS.navy};
          --surface: ${COLORS.surface};
          --text: ${COLORS.text};
          --subtext: ${COLORS.subtext};
          --primary: ${COLORS.primary};
          --primaryHover: ${COLORS.primaryHover};
          --border: ${COLORS.border};
        }
        body { background: var(--surface); color: var(--text); }
        a[aria-label="Register as an Expert"]:hover { background: var(--primaryHover); }
        a[aria-label="Book a Consulting Session"]:hover { box-shadow: 0 1px 0 rgba(0,0,0,0.03), 0 3px 12px rgba(0,0,0,0.06); }
      `}</style>
    </>
  );
}