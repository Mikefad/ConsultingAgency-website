import logo3 from "../assets/Black_White_Minimalist_Simple_Monogram_Typography_Logo__4_-removebg-preview.png";
import thumbsup from "../assets/thumbs-up.png";
import medal from "../assets/medal.png";
import shuttle from "../assets/shuttle.png";
import success from "../assets/success.png";
import businessman from "../assets/successful-businessman.jpg";

const COLORS = {
  text: "#0b1323",
  subtext: "#5a6576",
  border: "#e5e8ef",
  surface: "#f6f7fb",
  white: "#ffffff",
  primary: "#c61b3f",
};

const steps = [
  {
    icon: thumbsup,
    title: "Tell us your requirements",
    copy: "Submit your brief; we confirm scope, outcomes, and timelines.",
  },
  {
    icon: shuttle,
    title: "Start your work",
    copy: "We source and shortlist the best available operators for you.",
  },
  {
    icon: medal,
    title: "Choose your favorite",
    copy: "Interview candidates and select the ideal expert for your needs.",
  },
  {
    icon: success,
    title: "Taste the success",
    copy: "From onboarding to delivery, we ensure quality and accountability.",
  },
];

const Worksection = () => {
  return (
    <section
      id="how-it-works"
      className="relative py-16 overflow-hidden"
      style={{ background: COLORS.surface }}
    >
      <img
        src={logo3}
        alt=""
        className="absolute right-10 top-10 w-64 h-64 opacity-10 pointer-events-none"
      />

      <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className="text-4xl font-extrabold mb-2"
            style={{ color: COLORS.text }}
          >
            How it works?
          </h2>
          <p className="text-lg mb-6" style={{ color: COLORS.subtext }}>
            We match you to the right expert in four simple steps.
          </p>
          <hr
            className="w-14 h-1 mx-auto mb-10 border-0"
            style={{ background: COLORS.primary }}
          />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-6 items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:col-span-2">
            {steps.map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border p-6 shadow-sm"
                style={{ borderColor: COLORS.border }}
              >
                <img src={s.icon} alt="" className="w-14 h-14 mb-2" />
                <h3
  className="text-xl font-bold mb-1 bg-gradient-to-r from-gray-800 via-[#7a0e1f] to-[#c61b3f] bg-clip-text text-transparent"
>
  {s.title}
</h3>

                <p className="text-sm" style={{ color: COLORS.subtext }}>
                  {s.copy}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center">
            <img
              src={businessman}
              alt="Consultant"
              className="w-full max-w-sm h-auto object-cover rounded-xl shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Worksection;
