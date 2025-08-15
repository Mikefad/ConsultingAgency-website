// src/pages/journey.jsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import logo2 from "../assets/Red_Modern_Law_Consulting_Firm_Logo-removebg-preview 2.png";

const COLORS = {
  navy: "#191a37",
  subtext: "#5a6576",
  border: "#e5e8ef",
  white: "#ffffff",
};

export default function Journeysection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const step = (delay = 0) => ({
    initial: { opacity: 0, x: -20 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.5, delay },
  });

  const items = [
    {
      title: "Global Retail Giant: Strategic Expansion",
      text:
        "Entered three APAC markets with a data-led expansion strategy, delivering +22% YoY in year one.",
    },
    {
      title: "Fintech Startup: Operational Optimization",
      text:
        "Streamlined workflows; −30% cost, +40% delivery speed in six months with execution sprints.",
    },
    {
      title: "Healthcare Group: Digital Transformation",
      text:
        "Launched a patient engagement platform; +45% satisfaction via service design + adoption.",
    },
    {
      title: "Government Agency: Policy Innovation Lab",
      text:
        "Co-built a policy lab delivering four pilots across climate and digital equity.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-12"
        style={{ color: COLORS.navy }}
      >
        Client Success Stories
      </motion.h2>

      <div className="relative border-l-4 pl-6 md:pl-10" style={{ borderColor: COLORS.navy }}>
        <img
          src={logo2}
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-contain opacity-5 mix-blend-multiply"
        />

        {items.map((item, i) => (
          <motion.div key={item.title} {...step(0.1 + i * 0.1)} className="relative mb-8">
            <div
              className="absolute -left-[22px] top-2 h-5 w-5 rounded-full border-4"
              style={{ borderColor: COLORS.white, background: COLORS.navy }}
            />
            <div
              className="ml-1 rounded-xl border bg-white p-5 shadow-sm"
              style={{ borderColor: COLORS.border }}
            >
              <h3 className="text-lg font-semibold" style={{ color: COLORS.navy }}>
                {item.title}
              </h3>
              <p className="mt-1 text-sm" style={{ color: COLORS.subtext }}>
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
