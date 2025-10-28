"use client";
import { NavLink } from "react-router";
import FeaturesSection from "../components/Features";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <>
      <section className="min-h-screen relative bg-linear-to-b from-blue-800 to-blue-900 text-white overflow-hidden">
        <div
          className="
    absolute shadow-2xl rounded-full bg-indigo-500/40 
    w-60 h-60
    md:bottom-20 md:right-10 
    md:translate-x-0 md:translate-y-0
    left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
    md:left-auto md:top-auto
  "
        ></div>

        <Navbar />

        {/* <!-- Hero Content --> */}
        <div
          id="home"
          className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] text-center px-4"
        >
          <h1 className="text-5xl font-bold mb-4">Ticketrax</h1>
          <p className="text-lg max-w-xl mb-6">
            Manage, track, and resolve tickets efficiently — across all teams.
          </p>
          <NavLink
            to="auth/signup"
            className="bg-white text-deep-blue font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
          >
            Get Started
          </NavLink>
        </div>

        {/* <!-- SVG Wave at Bottom --> */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,160L80,186.7C160,213,320,267,480,272C640,277,800,235,960,208C1120,181,1280,171,1360,165.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
        {/* <!-- Hero Content --> */}
      </section>

      <FeaturesSection />

      <Footer />
    </>
  );
};

export default HomePage;
