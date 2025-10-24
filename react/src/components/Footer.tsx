import NavList from "./NavList";

export default function Footer() {
  return (
    <footer className="bg-blue-900 backdrop-blur-md border-t border-white/20 mt-20 py-8 text-center text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Section: Navigation Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
          <div className="font-semibold text-xl">Ticketrax</div>

          <NavList />

          {/* CTA */}
          <a
            href="#get-started"
            className="px-5 py-2 rounded-full bg-blue-400 text-white hover:bg-blue-500 transition text-sm"
          >
            Get Started
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-6"></div>

        {/* Bottom Section: Credits */}
        <div className="text-sm text-white/70 flex flex-col md:flex-row justify-between items-center gap-2">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-white">Ticketrax</span>. All
            rights reserved.
          </p>
          <p>
            Built with 💙 by{" "}
            <a
              href="https://github.com/Dotjos"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300"
            >
              Oladotun Joseph
            </a>{" "}
            — HNG Internship Stage 2
          </p>
        </div>
      </div>
    </footer>
  );
}
