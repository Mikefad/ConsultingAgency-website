const COLORS = {
  navy: "#0e1a2b",
  borderDark: "#21314a",
};

const Footer = () => {
  return (
    <footer style={{ background: COLORS.navy, color: "white" }}>
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        <div>
          <h3 className="text-2xl font-bold mb-3">Say hello</h3>
          <p className="text-white/75">hello@seekalpha.com</p>
          <p className="text-white/75">support@seekalpha.com</p>
          <p className="text-white/75 mt-4">Call</p>
          <p className="text-white/75">+1 (000) 000-0000</p>
        </div>

        <div className="grid grid-cols-2 gap-x-16 gap-y-4 text-left md:text-right">
          <div>
            <h4 className="text-lg font-semibold mb-2">Menu</h4>
            <ul className="space-y-1 text-white/75">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/solutions" className="hover:underline">Solutions</a></li>
              <li><a href="/insights" className="hover:underline">Insights</a></li>
              <li><a href="/careers" className="hover:underline">Careers</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Social</h4>
            <ul className="space-y-1 text-white/75">
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
              <li><a href="#" className="hover:underline">Dribbble</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="text-center text-sm py-6 border-t"
        style={{ borderColor: COLORS.borderDark }}
      >
        <p className="text-white/60">© {new Date().getFullYear()} SEEKALPHA. All rights reserved.</p>
        <p className="mt-1 space-x-4 text-white/60">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
