// src/pages/BlogPage.jsx (or replace your current blog file)
import React, { useMemo, useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, Tag, Newspaper, Bookmark } from "lucide-react";

import Header from "./header";
import Footer from "./footer";

// Assets you already have
import logo2 from "./assets/logo_no_text2.png";
import strategyConsulting from "./assets/patrick-tomasso-fMntI8HAAB8-unsplash.jpg";
import digitalTransformation from "./assets/ux-indonesia-2NDWFiD0UMM-unsplash.jpg";
import marketResearch from "./assets/arlington-research-Kz8nHVg_tGI-unsplash.jpg";
import operationsExcellence from "./assets/acrelia-gcXbTYQcJIs-unsplash.jpg";
import financialAdvisory from "./assets/campaign-creators-gMsnXqILjp4-unsplash.jpg";
import talentManagement from "./assets/successful-businessman.jpg";
import teamPhoto from "./assets/top-view-people-working-with-laptops.jpg";

// ---- Palette
const COLORS = {
  surface: "#f6f7fb",
  navy: "#191a37",
  text: "#0b1323",
  subtext: "#5a6576",
  primary: "#c61b3f",
  border: "#e5e8ef",
  white: "#ffffff",
};

// ---- Helpers
const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.5, delay: d },
});

// ---- Mock posts (mapped to your images)
const POSTS = [
  {
    id: 1,
    title: "Rethinking Strategy in a Post-Digital World",
    tag: "Strategy",
    date: "Aug 2025",
    cover: strategyConsulting,
    excerpt:
      "Why traditional frameworks fall short—and how adaptive strategy is redefining leadership.",
  },
  {
    id: 2,
    title: "Inside Digital Transformation: What No One Tells You",
    tag: "Transformation",
    date: "Aug 2025",
    cover: digitalTransformation,
    excerpt:
      "Culture, data, and delivery: the hidden blockers and how high-performers navigate them.",
  },
  {
    id: 3,
    title: "The New Ops Playbook: From Efficiency to Resilience",
    tag: "Operations",
    date: "Jul 2025",
    cover: operationsExcellence,
    excerpt:
      "Designing processes that bend without breaking across volatile demand and supply.",
  },
  {
    id: 4,
    title: "The Future of Finance: Beyond the Numbers",
    tag: "Finance",
    date: "Jul 2025",
    cover: financialAdvisory,
    excerpt:
      "Why today’s CFOs are growth architects—and how they partner with product & GTM.",
  },
  {
    id: 5,
    title: "Leading Through Uncertainty: Talent in 2025",
    tag: "People",
    date: "Jun 2025",
    cover: talentManagement,
    excerpt:
      "Pipelines, upskilling, and culture moves that actually shift the curve.",
  },
  {
    id: 6,
    title: "What the Data Says: Market Signals for 2025",
    tag: "Research",
    date: "Jun 2025",
    cover: marketResearch,
    excerpt:
      "From consumer sentiment to geo-macro shifts—signal versus noise for operators.",
  },
];

// ---- Filters
const FILTERS = ["All", "Strategy", "Transformation", "Operations", "Finance", "People", "Research"];

function BlogPage() {
  // Loading mask for your existing UX (kept minimal)
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    let resolved = false;
    const waitForImages = () => {
      const images = Array.from(document.images);
      return Promise.all(
        images.map((img) => {
          if (img.complete && img.naturalHeight !== 0) return Promise.resolve();
          return new Promise((res) => {
            img.onload = res;
            img.onerror = res;
          });
        })
      );
    };
    const timeout = setTimeout(() => { if (!resolved) setIsLoading(false); }, 1500);
    waitForImages().then(() => { resolved = true; clearTimeout(timeout); setIsLoading(false); });
    return () => clearTimeout(timeout);
  }, []);

  // Search & filter
  const [active, setActive] = useState("All");
  const [q, setQ] = useState("");

  const posts = useMemo(() => {
    const byTag = active === "All" ? POSTS : POSTS.filter((p) => p.tag === active);
    if (!q.trim()) return byTag;
    const needle = q.toLowerCase();
    return byTag.filter(
      (p) =>
        p.title.toLowerCase().includes(needle) ||
        p.excerpt.toLowerCase().includes(needle) ||
        p.tag.toLowerCase().includes(needle)
    );
  }, [active, q]);

  const featured = POSTS[0];

  return (
    <div className="bg-white">
      <Header />

      {/* HERO */}
      <section
        className="pt-28"
        style={{
          background: `radial-gradient(1200px 600px at 100% -50%, rgba(198,27,63,0.05), transparent),
                       radial-gradient(900px 500px at -10% 20%, rgba(25,26,55,0.06), transparent),
                       ${COLORS.surface}`,
        }}
      >
        <div className="mx-auto max-w-7xl px-6 pb-10">
          <motion.div {...fadeUp(0.05)}>
            <div
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs"
              style={{ border: `1px solid ${COLORS.border}`, background: COLORS.white, color: COLORS.subtext }}
            >
              <Newspaper size={14} /> Blog
            </div>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight" style={{ color: COLORS.navy }}>
              Blogs & Perspectives
            </h1>
            <p className="mt-3 max-w-3xl text-lg" style={{ color: COLORS.subtext }}>
              Field notes, frameworks, and operator-grade takes from our network across sectors.
            </p>
          </motion.div>

          {/* Featured banner */}
          <motion.article
            {...fadeUp(0.12)}
            className="mt-8 overflow-hidden rounded-2xl bg-white shadow-sm"
            style={{ border: `1px solid ${COLORS.border}` }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative">
                <img src={teamPhoto} alt="" className="h-full w-full object-cover" />
                <div className="absolute right-3 top-3 rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-gray-700">
                  Featured
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wide text-gray-500">
                  {featured.tag} • {featured.date}
                </div>
                <h3 className="mt-1 text-2xl font-semibold" style={{ color: COLORS.text }}>
                  {featured.title}
                </h3>
                <p className="mt-2 text-sm" style={{ color: COLORS.subtext }}>
                  {featured.excerpt}
                </p>
                <Link to="#" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold"
                      style={{ color: COLORS.primary }}>
                  Read article <Bookmark size={14} />
                </Link>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => {
              const isActive = active === f;
              return (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className="rounded-full px-3 py-1 text-xs font-medium"
                  style={{
                    background: isActive ? COLORS.primary : COLORS.white,
                    color: isActive ? "white" : COLORS.subtext,
                    border: `1px solid ${COLORS.border}`,
                  }}
                >
                  {f}
                </button>
              );
            })}
          </div>

          <div className="relative w-full sm:w-80">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search posts…"
              className="w-full rounded-xl border bg-white py-2 pl-9 pr-3 text-sm outline-none"
              style={{ borderColor: COLORS.border }}
            />
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {posts.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="overflow-hidden rounded-2xl bg-white shadow-sm hover:-translate-y-1 transition-transform"
              style={{ border: `1px solid ${COLORS.border}` }}
            >
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img
                  src={p.cover}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Tag size={14} /> {p.tag} • {p.date}
                </div>
                <h3 className="mt-1 text-xl font-semibold" style={{ color: COLORS.text }}>
                  {p.title}
                </h3>
                <p className="mt-2 text-sm" style={{ color: COLORS.subtext }}>
                  {p.excerpt}
                </p>
                <Link to="#" className="mt-3 inline-block text-sm font-semibold" style={{ color: COLORS.primary }}>
                  Read more →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load more placeholder */}
        <div className="mt-10 text-center">
          <button
            className="rounded-xl px-5 py-2.5 text-sm font-semibold"
            style={{ background: COLORS.white, border: `1px solid ${COLORS.border}`, color: COLORS.text }}
            onClick={() => alert("Hook to your CMS / pagination")}
          >
            Load more
          </button>
        </div>
      </section>

      {/* SIDEBAR BANDS (3-up below the grid for simplicity on all screen sizes) */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <motion.div
            {...fadeUp(0.05)}
            className="rounded-2xl bg-white p-6 shadow-sm"
            style={{ border: `1px solid ${COLORS.border}` }}
          >
            <h4 className="text-lg font-semibold" style={{ color: COLORS.navy }}>
              Popular Tags
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {FILTERS.slice(1).map((t) => (
                <button
                  key={t}
                  onClick={() => setActive(t)}
                  className="rounded-full px-3 py-1 text-xs"
                  style={{ background: COLORS.white, border: `1px solid ${COLORS.border}`, color: COLORS.subtext }}
                >
                  {t}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...fadeUp(0.08)}
            className="rounded-2xl bg-white p-6 shadow-sm"
            style={{ border: `1px solid ${COLORS.border}` }}
          >
            <h4 className="text-lg font-semibold" style={{ color: COLORS.navy }}>
              Newsletter
            </h4>
            <p className="mt-2 text-sm" style={{ color: COLORS.subtext }}>
              Monthly operator-grade insights. No fluff.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Subscribed!");
              }}
              className="mt-4 flex gap-2"
            >
              <input
                className="flex-1 rounded-xl border px-3 py-2 text-sm"
                placeholder="Work email"
                style={{ borderColor: COLORS.border }}
              />
              <button
                className="rounded-xl px-4 text-sm font-semibold text-white"
                style={{ background: COLORS.primary }}
              >
                Join
              </button>
            </form>
          </motion.div>

          <motion.div
            {...fadeUp(0.11)}
            className="overflow-hidden rounded-2xl bg-white shadow-sm"
            style={{ border: `1px solid ${COLORS.border}` }}
          >
            <div className="aspect-[16/9] w-full overflow-hidden">
              <img src={teamPhoto} alt="Team" className="h-full w-full object-cover" />
            </div>
            <div className="p-6">
              <h4 className="text-lg font-semibold" style={{ color: COLORS.navy }}>
                Write for Us
              </h4>
              <p className="mt-2 text-sm" style={{ color: COLORS.subtext }}>
                Are you an operator with a POV? Pitch us an article or case note.
              </p>
              <button
                onClick={() => alert("Open contribute flow")}
                className="mt-3 rounded-xl px-4 py-2 text-sm font-semibold text-white"
                style={{ background: COLORS.primary }}
              >
                Pitch an Idea
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default BlogPage;
