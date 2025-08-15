// src/pages/values.jsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import medal from "../assets/medal.png";
import thumbsup from "../assets/thumbs-up.png";
import shuttle from "../assets/shuttle.png";

const COLORS = {
  navy: "#191a37",
  subtext: "#5a6576",
  border: "#e5e8ef",
  white: "#ffffff",
};

export default function Valuesection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const items = [
    {
      icon: medal,
      title: "Insight-Driven",
      text: "Decisions grounded in defensible evidence, not anecdotes.",
    },
    {
      icon: thumbsup,
      title: "Hands-On",
      text: "We co-build with your team and stay accountable to outcomes.",
    },
    {
      icon: shuttle,
      title: "ROI-Focused",
      text: "Clear success metrics and readouts—measurable impact first.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-6"
        style={{ color: COLORS.navy }}
      >
        Our Approach
      </motion.h2>
      <p className="mx-auto mb-10 max-w-3xl text-center text-sm" style={{ color: COLORS.subtext }}>
        We align methods to the decision you’re making—then deliver crisp, defensible outputs your stakeholders can trust.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="rounded-2xl p-8 text-center shadow-sm"
            style={{ background: COLORS.white, border: `1px solid ${COLORS.border}` }}
          >
            <img
              src={it.icon}
              alt=""
              className="mx-auto mb-4 h-14 w-14 filter hue-rotate-[270deg] saturate-[140%]"
            />
            <h3 className="text-lg font-semibold" style={{ color: COLORS.navy }}>
              {it.title}
            </h3>
            <p className="mt-2 text-sm" style={{ color: COLORS.subtext }}>
              {it.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
