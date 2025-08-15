import plant from "../assets/3679565.jpg";
import tech from "../assets/istockphoto-157290117-1024x1024.jpg";
import mining from "../assets/view-heavy-machinery-used-construction-industry.jpg";

const COLORS = {
  text: "#0b1323",
  subtext: "#5a6576",
  border: "#e5e8ef",
  white: "#ffffff",
};

const Viewsection = () => {
  const items = [
    {
      img: plant,
      title: "ESG Goals for Mining Industry",
      copy:
        "ESG is now a core diligence pillar—from water to workforce risk…",
    },
    {
      img: mining,
      title: "Trends that will affect future of Mining",
      copy:
        "Automation, electrification, and realtime sensing will reshape ops…",
    },
    {
      img: tech,
      title: "Technology Disrupting the Mining Industry",
      copy:
        "AI-assisted planning and digital twins accelerate decision cycles…",
    },
  ];

  return (
    <section id="insights" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-4xl font-extrabold text-center mb-12"
          style={{ color: COLORS.text }}
        >
          Our Point of View
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((it, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1"
              style={{ border: `1px solid ${COLORS.border}` }}
            >
              <img src={it.img} alt="" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: COLORS.text }}
                >
                  {it.title}
                </h3>
                <p className="text-sm" style={{ color: COLORS.subtext }}>
                  {it.copy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Viewsection;
