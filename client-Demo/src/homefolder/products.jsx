const COLORS = {
  text: "#0b1323",
  subtext: "#5a6576",
  border: "#e5e8ef",
  white: "#ffffff",
  surface: "#f6f7fb",
};

const Productsection = () => {
  return (
    <section
      id="products"
      className="relative py-20 mt-10 "
      style={{ background: COLORS.surface }}
    >
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-xl px-6 py-3 text-center shadow"
        style={{ background: COLORS.white, border: `1px solid ${COLORS.border}` }}
      >
        <h2 className="text-2xl font-bold" style={{ color: COLORS.text }}>
          Products
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="rounded-2xl border p-6 text-center bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1"
              style={{ borderColor: COLORS.border }}
            >
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: COLORS.text }}
              >
                Product Title {n}
              </h3>
              <p className="text-sm" style={{ color: COLORS.subtext }}>
                Short description of the offering and its value proposition.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Productsection;
