import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "./assets/Red_Modern_Law_Consulting_Firm_Logo-removebg-preview 2.png";

// Nextyn‑style, light header with requested nav + CTAs
// Nav: Solutions • Sector • Insights • Careers • Contact Us
// CTAs: Register as an Expert, Book a Consulting Session
// Branding: SEEKALPHA (no gap), no subtitle

const COLORS = {
  navy: "#0e1a2b",
  surface: "#ffffff",
  text: "#0b1323",
  subtext: "#5a6576",
  primary: "#c61b3f", // CTA red
  primaryHover: "#a31634",
  border: "#e5e8ef",
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 bg-[#191a37] `}
        aria-label="Site header"
      >
        
        <div
          className={`mx-auto  flex max-w-6xl items-center justify-between  px-5 py-5 backdrop-blur  `}
          
        >
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2" aria-label="SEEKALPHA Home">
            <img src={logo} alt="SEEKALPHA monogram" className="h-9 w-9" />
            <span className="text-base font-extrabold tracking-wide text-white" >
              SEEKALPHA
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
            <Link to="/services" className="text-sm font-medium hover:opacity-80 text-gray-200 " >
              Services
            </Link>
            <Link to="/solutions" className="text-sm font-medium hover:opacity-80 text-gray-200 " >
              Solutions
            </Link>
            <Link to="/sector" className="text-sm font-medium hover:opacity-80 text-gray-200" >
              Sector
            </Link>
            <Link to="/insights" className="text-sm font-medium hover:opacity-80 text-gray-200" >
              Insights
            </Link>
            <Link to="/blog" className="text-sm font-medium hover:opacity-80 text-gray-200" >
              Blog
            </Link>
            <Link to="/careers" className="text-sm font-medium hover:opacity-80 text-gray-200" >
              Careers
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:opacity-80 text-gray-200" >
              Contact Us
            </Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-2 md:flex">
            <Link
              to="/register-expert"
              className="rounded-xl px-4 py-2 text-sm font-semibold text-white"
              style={{ background: COLORS.primary }}
            >
              Register as an Expert
            </Link>
            <Link
              to="/book-session"
              className="rounded-xl px-4 py-2 text-sm font-semibold"
              style={{ border: `1px solid ${COLORS.border}`, color: COLORS.text, background: COLORS.surface }}
            >
              Book a Consulting Session
            </Link>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileNavOpen((s) => !s)}
            className="inline-flex items-center justify-center rounded-lg p-2 md:hidden"
            style={{ border: `1px solid ${COLORS.border}` }}
            aria-controls="mobile-nav"
            aria-expanded={isMobileNavOpen}
            aria-label="Toggle menu"
          >
            {isMobileNavOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </div>
      </header>

      {/* Mobile Nav */}
      {isMobileNavOpen && (
        <div
          id="mobile-nav"
          className="md:hidden fixed left-1/2 top-20 z-40 w-[92%] -translate-x-1/2 rounded-2xl p-4 shadow-xl"
          style={{ background: COLORS.surface, border: `1px solid ${COLORS.border}` }}
        >
          <div className="grid gap-2" aria-label="Mobile navigation links">
            <Link to="/solutions" className="rounded-md px-3 py-2 text-sm font-medium" style={{ color: COLORS.text }}>
              Solutions
            </Link>
            <Link to="/sector" className="rounded-md px-3 py-2 text-sm font-medium" style={{ color: COLORS.text }}>
              Sector
            </Link>
            <Link to="/insights" className="rounded-md px-3 py-2 text-sm font-medium" style={{ color: COLORS.text }}>
              Insights
            </Link>
            <Link to="/careers" className="rounded-md px-3 py-2 text-sm font-medium" style={{ color: COLORS.text }}>
              Careers
            </Link>
            <Link to="/contact" className="rounded-md px-3 py-2 text-sm font-medium" style={{ color: COLORS.text }}>
              Contact Us
            </Link>
          </div>
          <div className="mt-3 grid gap-2">
            <Link to="/register-expert" className="w-full rounded-xl px-4 py-2 text-center text-sm font-semibold text-white" style={{ background: COLORS.primary }}>
              Register as an Expert
            </Link>
            <Link to="/book-session" className="w-full rounded-xl px-4 py-2 text-center text-sm font-semibold" style={{ border: `1px solid ${COLORS.border}`, color: COLORS.text }}>
              Book a Consulting Session
            </Link>
          </div>
        </div>
      )}

      <style jsx global>{`
        .header-blur { backdrop-filter: saturate(150%) blur(8px); }
        a[href^="/register-expert"]:hover { background: ${COLORS.primaryHover}; }
      `}</style>
    </>
  );
};

export default Header;
