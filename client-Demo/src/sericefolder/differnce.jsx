// src/pages/differnce.jsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import quality from "../assets/nathan-dumlao-VJHb4QPBgV4-unsplash.jpg";
import logo from "../assets/Black_White_Minimalist_Simple_Monogram_Typography_Logo__4_-removebg-preview.png";

const COLORS = {
  navy: "#191a37",
  subtext: "#5a6576",
  border: "#e5e8ef",
  white: "#ffffff",
};

export default function Differencesection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const fadeUp = (d = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.5, delay: d },
  });

  return (
    <section className="max-w-7xl mx-auto px-6">
      <motion.h2
        {...fadeUp(0.05)}
        className="text-3xl sm:text-4xl font-bold text-center mb-10"
        style={{ color: COLORS.navy }}
      >
        Our Core Services
      </motion.h2>

      <div className="relative grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* List */}
        <div ref={ref} className="relative">
          <img
            src={logo}
            alt="Decor"
            className="pointer-events-none absolute -left-6 -top-6 w-40 opacity-10"
          />
          <ul className="space-y-5">
            {[
              {
                title: "Strategy Consulting",
                text:
                  "Define goals, de-risk moves, and build evidence-backed roadmaps for growth, entry, and positioning.",
              },
              {
                title: "Operational Excellence",
                text:
                  "Identify bottlenecks and cost-outs; design executable improvements with accountable owners.",
              },
              {
                title: "Change & Transformation",
                text:
                  "Align org, tech, and culture to deliver digital transformation that lasts beyond the pilot.",
              },
              {
                title: "Market Research & Insights",
                text:
                  "Qual + quant to uncover customer needs, size markets, and validate willingness-to-pay.",
              },
            ].map((item, i) => (
              <motion.li
                key={item.title}
                {...fadeUp(0.08 + i * 0.05)}
                className="rounded-2xl border p-5 shadow-sm"
                style={{ borderColor: COLORS.border, background: COLORS.white }}
              >
                <div className="text-lg font-semibold" style={{ color: COLORS.navy }}>
                  {item.title}
                </div>
                <p className="mt-1 text-sm" style={{ color: COLORS.subtext }}>
                  {item.text}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Image */}
        <motion.div
          {...fadeUp(0.12)}
          className="overflow-hidden rounded-2xl border shadow-sm"
          style={{ borderColor: COLORS.border }}
        >
          <img
            src={quality}
            alt="Quality work"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
          />
        </motion.div>
      </div>
    </section>
  );
}
