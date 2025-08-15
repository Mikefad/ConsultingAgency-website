import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, Tag, Newspaper, Bookmark } from "lucide-react";
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

const allPosts = [
  { id: 1, title: "AI for Diligence: Faster, Safer, Smarter", tag: "AI", date: "Aug 2025",
    cover: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1500&auto=format&fit=crop",
    excerpt: "A pragmatic playbook for blending expert calls with AI-assisted synthesis during diligence."
  },
  { id: 2, title: "From Hype to Impact in Digital Health", tag: "Healthcare", date: "Jul 2025",
    cover: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1500&auto=format&fit=crop",
    excerpt: "Where digital therapeutics are actually working—and what adoption looks like by payer type."
  },
  { id: 3, title: "Battery Supply Chains: What’s Next", tag: "Energy", date: "Jun 2025",
    cover: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1500&auto=format&fit=crop",
    excerpt: "Localization, raw material constraints, and the new risk map for OEMs."
  },
  { id: 4, title: "AdTech Privacy: Signal Loss Playbook", tag: "TMT", date: "May 2025",
    cover: "https://images.unsplash.com/photo-1517059224940-d4af9eec41e5?q=80&w=1500&auto=format&fit=crop",
    excerpt: "How growth teams are adapting to ATT and third-party cookie deprecation."
  },
  { id: 5, title: "Retail Ops After Real-time Data", tag: "Consumer", date: "Apr 2025",
    cover: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=1500&auto=format&fit=crop",
    excerpt: "What changes when store managers actually trust the dashboards."
  },
  { id: 6, title: "Mining 4.0: Autonomy & Sensing", tag: "Industrials", date: "Mar 2025",
    cover: "https://images.unsplash.com/photo-1581091215367-59ab6b6d82cf?q=80&w=1500&auto=format&fit=crop",
    excerpt: "ROI from autonomy in harsh environments and the real constraints on rollout."
  },
  { id: 7, title: "Win/Loss at Scale for B2B SaaS", tag: "AI", date: "Feb 2025",
    cover: "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=1500&auto=format&fit=crop",
    excerpt: "Combining moderated interviews with LLM summarization to accelerate insights."
  },
  { id: 8, title: "Payer Economics for Novel Therapies", tag: "Healthcare", date: "Jan 2025",
    cover: "https://images.unsplash.com/photo-1581594693704-77dc76319c2a?q=80&w=1500&auto=format&fit=crop",
    excerpt: "A practical approach to HEOR + market access conversations."
  },
];

const FILTERS = ["All", "AI", "Healthcare", "Energy", "TMT", "Consumer", "Industrials"];

const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.5, delay: d },
});

export default function InsightsPage() {
  const [active, setActive] = useState("All");
  const [q, setQ] = useState("");

  const posts = useMemo(() => {
    const byTag = active === "All" ? allPosts : allPosts.filter(p => p.tag === active);
    if (!q.trim()) return byTag;
    const needle = q.toLowerCase();
    return byTag.filter(p => p.title.toLowerCase().includes(needle) || p.excerpt.toLowerCase().includes(needle));
  }, [active, q]);

  const featured = allPosts[0];

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
      {/* HERO + FEATURED */}
      <section className="mx-auto max-w-7xl px-6 pb-6">
        <motion.div {...fadeUp(0.05)}>
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs"
               style={{ border: `1px solid ${COLORS.border}`, background: COLORS.white, color: COLORS.subtext }}>
            <Newspaper size={14} /> Insights & Perspectives
          </div>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight" style={{ color: COLORS.navy }}>
            Insights
          </h1>
          <p className="mt-3 max-w-3xl text-lg" style={{ color: COLORS.subtext }}>
            Ideas, frameworks, and field notes from our network of practitioners across sectors.
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
              <img src={featured.cover} alt="" className="h-full w-full object-cover" />
              <div className="absolute right-3 top-3 rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-gray-700">
                Featured
              </div>
            </div>
            <div className="p-6">
              <div className="text-xs uppercase tracking-wide text-gray-500">{featured.tag} • {featured.date}</div>
              <h3 className="mt-1 text-2xl font-semibold" style={{ color: COLORS.text }}>{featured.title}</h3>
              <p className="mt-2 text-sm" style={{ color: COLORS.subtext }}>{featured.excerpt}</p>
              <button className="mt-4 inline-flex items-center gap-1 text-sm font-semibold"
                      style={{ color: COLORS.primary }}>
                Read article <Bookmark size={14} />
              </button>
            </div>
          </div>
        </motion.article>
      </section>

      {/* FILTER BAR */}
      <section className="mx-auto max-w-7xl px-6 pb-2">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => {
              const activeChip = active === f;
              return (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className="rounded-full px-3 py-1 text-xs font-medium"
                  style={{
                    background: activeChip ? COLORS.primary : COLORS.white,
                    color: activeChip ? "white" : COLORS.subtext,
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
              placeholder="Search insights…"
              className="w-full rounded-xl border bg-white py-2 pl-9 pr-3 text-sm outline-none"
              style={{ borderColor: COLORS.border }}
            />
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
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
                <img src={p.cover} alt="" className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Tag size={14} /> {p.tag} • {p.date}
                </div>
                <h3 className="mt-1 text-xl font-semibold" style={{ color: COLORS.text }}>{p.title}</h3>
                <p className="mt-2 text-sm" style={{ color: COLORS.subtext }}>{p.excerpt}</p>
                <button className="mt-3 text-sm font-semibold" style={{ color: COLORS.primary }}>Read more →</button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* simple load more placeholder */}
        <div className="mt-10 text-center">
          <button
            className="rounded-xl px-5 py-2.5 text-sm font-semibold"
            style={{ background: COLORS.white, border: `1px solid ${COLORS.border}`, color: COLORS.text }}
            onClick={() => alert("Hook this to your CMS / pagination.")}
          >
            Load more
          </button>
        </div>
      </section>

      {/* SIDEBAR BANDS */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <motion.div
            {...fadeUp(0.05)}
            className="rounded-2xl bg-white p-6 shadow-sm"
            style={{ border: `1px solid ${COLORS.border}` }}
          >
            <h4 className="text-lg font-semibold" style={{ color: COLORS.navy }}>Popular Tags</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {["AI", "Healthcare", "Energy", "TMT", "Consumer", "Industrials"].map((t) => (
                <span key={t} className="rounded-full px-3 py-1 text-xs"
                      style={{ background: COLORS.white, border: `1px solid ${COLORS.border}`, color: COLORS.subtext }}>
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...fadeUp(0.08)}
            className="rounded-2xl bg-white p-6 shadow-sm"
            style={{ border: `1px solid ${COLORS.border}` }}
          >
            <h4 className="text-lg font-semibold" style={{ color: COLORS.navy }}>Newsletter</h4>
            <p className="mt-2 text-sm" style={{ color: COLORS.subtext }}>
              Monthly operator-grade insights. No spam.
            </p>
            <form
              onSubmit={(e) => { e.preventDefault(); alert("Subscribed!"); }}
              className="mt-4 flex gap-2"
            >
              <input className="flex-1 rounded-xl border px-3 py-2 text-sm"
                     placeholder="Work email"
                     style={{ borderColor: COLORS.border }} />
              <button className="rounded-xl px-4 text-sm font-semibold text-white"
                      style={{ background: COLORS.primary }}>
                Join
              </button>
            </form>
          </motion.div>

          <motion.div
            {...fadeUp(0.11)}
            className="rounded-2xl bg-white p-6 shadow-sm"
            style={{ border: `1px solid ${COLORS.border}` }}
          >
            <h4 className="text-lg font-semibold" style={{ color: COLORS.navy }}>Contribute</h4>
            <p className="mt-2 text-sm" style={{ color: COLORS.subtext }}>
              Are you an operator with a POV? Pitch us an article or a case note.
            </p>
            <button
              onClick={() => alert("Open contribute flow")}
              className="mt-4 rounded-xl px-4 py-2 text-sm font-semibold text-white"
              style={{ background: COLORS.primary }}
            >
              Pitch an Idea
            </button>
          </motion.div>
        </div>
      </section>
    </main>
    <Footer/>
    </>
  );
}
