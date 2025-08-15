// src/pages/leadership.jsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import founder from "../assets/successful-businessman.jpg";

const COLORS = {
  navy: "#191a37",
  subtext: "#5a6576",
  border: "#e5e8ef",
  white: "#ffffff",
};

export default function Leadersection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="max-w-7xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-10"
        style={{ color: COLORS.navy }}
      >
        Meet Our Leadership
      </motion.h2>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl border shadow-sm"
          style={{ borderColor: COLORS.border }}
        >
          <img
            src={founder}
            alt="Founder"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="self-center"
        >
          <h3 className="text-2xl font-semibold" style={{ color: COLORS.navy }}>
            Jane Doe, CEO & Founder
          </h3>
          <p className="mt-2 text-sm" style={{ color: COLORS.subtext }}>
            With two decades across strategy and transformation, Jane founded Seek Alpha Consulting to deliver
            operator-grade expertise and pragmatic outcomes. Her team blends rigor, speed, and partnership.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#"
              className="rounded-full px-4 py-2 text-sm font-semibold text-white"
              style={{ background: "#0a66c2" }}
            >
              Connect on LinkedIn
            </a>
            <a
              href="#"
              className="rounded-full px-4 py-2 text-sm font-semibold"
              style={{ border: `1px solid ${COLORS.border}`, color: COLORS.navy, background: COLORS.white }}
            >
              Our Team
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
