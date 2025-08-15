import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import logo2 from "../assets/Red_Modern_Law_Consulting_Firm_Logo-removebg-preview 2.png";
import analytic from "../assets/analytic.png";
import rating from "../assets/customer.png";
import shape from "../assets/shape.png";

const COLORS = {
  text: "#0b1323",
  subtext: "#5a6576",
  primary: "#c61b3f",
  border: "#e5e8ef",
  white: "#ffffff",
};

const Offersection = () => {
  const headRef = useRef(null);
  const isInView4 = useInView(headRef, { once: true });

  const cards = [
    {
      icon: shape,
      title: "Top Consultants",
      bullets: [
        "Operator-grade expertise across sectors",
        "Global coverage with local nuance",
        "Rapid turnarounds, quality assured",
        "Clear compliance guardrails",
      ],
    },
    {
      icon: analytic,
      title: "Client-Focused Service",
      bullets: [
        "Dedicated PM from brief to delivery",
        "Flexible engagement models",
        "Transparent sourcing & vetting",
        "Secure data handling",
      ],
    },
    {
      icon: rating,
      title: "Quality Assurance",
      bullets: [
        "Structured interview guides",
        "Recorded/transcribed (on request)",
        "Triangulated insights",
        "Post-call Q&A support",
      ],
    },
  ];

  return (
    <section id="solutions" className="relative py-24 bg-white overflow-hidden">
      {/* watermark */}
      <img
        src={logo2}
        alt="SEEKALPHA watermark"
        className="absolute inset-0 w-full h-full object-contain opacity-[0.06] pointer-events-none z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView4 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2
            className="text-4xl md:text-5xl max-w-4xl mx-auto font-extrabold mb-4"
            style={{ color: COLORS.text }}
          >
            Access expert networks and primary research—on demand
          </h2>
          <p
            className="text-lg max-w-3xl mx-auto mb-10"
            style={{ color: COLORS.subtext }}
          >
            Connect with vetted operators and specialists for calls, surveys,
            panels, and custom diligence. Fast, compliant, and precise.
          </p>
          <hr
            className="w-16 h-1 mx-auto mb-12 border-0"
            style={{ background: COLORS.primary }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <div
              key={i}
              className=" p-8   transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              style={{ borderColor: COLORS.border }}
            >
              <img src={c.icon} alt="" className="w-16 h-16 mb-6" />
              <h3
                className="text-2xl font-semibold mb-3"
                style={{ color: COLORS.text }}
              >
                {c.title}
              </h3>
              <ul className="space-y-2 text-sm" style={{ color: COLORS.subtext }}>
                {c.bullets.map((b, bi) => (
                  <li key={bi} className="flex gap-2">
                    <span
                      className="mt-2 inline-block h-2 w-2 rounded-full"
                      style={{ background: COLORS.primary }}
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offersection;
