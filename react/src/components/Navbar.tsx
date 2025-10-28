import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import NavList from "./NavList";
import { NavLink } from "react-router"; // ✅ using react-router-dom

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Toggle mobile menu
  const toggleMenu = (): void => {
    setIsOpen((prev) => !prev);
  };

  // Close menu
  const closeMenu = (): void => {
    setIsOpen(false);
    updateBlur(false);
  };

  // Function to apply or remove blur
  const updateBlur = (active: boolean): void => {
    const sectionSelectors = ["#home", "#features", "footer"];
    const sections = sectionSelectors
      .map((selector) => document.querySelector(selector))
      .filter((el): el is HTMLElement => el !== null);

    sections.forEach((el) => {
      el.style.transition = "filter 0.3s ease";
      el.style.filter = active ? "blur(8px)" : "";

      // Attach or detach click listener to close menu
      if (active) {
        el.addEventListener("click", closeMenu);
      } else {
        el.removeEventListener("click", closeMenu);
      }
    });

    document.body.style.overflow = active ? "hidden" : "";
  };

  // Watch for menu open state
  useEffect(() => {
    if (isOpen && window.innerWidth < 768) {
      updateBlur(true);
    } else {
      updateBlur(false);
    }
  }, [isOpen]);

  // Handle screen resizing
  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
        updateBlur(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1200px] px-4">
      {/* Navbar Container */}
      <div className="bg-blue-900 backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-between px-6 py-3 rounded-full md:px-10 md:py-2 lg:py-4 text-white">
        {/* Logo */}
        <div className="font-semibold text-xl">Ticketrax</div>

        {/* Desktop Links */}
        <NavList />

        {/* CTA Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <NavLink
            to="/auth/login"
            className="px-5 py-2 rounded-full border border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white transition"
          >
            Login
          </NavLink>
          <NavLink
            to="/auth/signup"
            className="px-5 py-2 rounded-full bg-blue-400 text-white hover:bg-blue-500 transition"
          >
            Get started
          </NavLink>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-deep-blue backdrop-blur-md border border-white/20 rounded-2xl shadow-lg py-4 px-6 text-white text-sm space-y-3">
          <a
            href="#home"
            onClick={closeMenu}
            className="block hover:text-blue-300 transition"
          >
            Home
          </a>
          <a
            href="#features"
            onClick={closeMenu}
            className="block hover:text-blue-300 transition"
          >
            Features
          </a>
          <NavLink
            to="/tickets"
            onClick={closeMenu}
            className="hover:text-blue-300 transition"
          >
            Tickets
          </NavLink>

          {/* CTA Buttons (Mobile) */}
          <div className="pt-3 border-t flex flex-col text-white border-white/20 space-y-2">
            <NavLink
              to="/auth/login"
              onClick={closeMenu}
              className="px-5 py-2 rounded-full border border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white transition"
            >
              Login
            </NavLink>
            <NavLink
              to="/auth/signup"
              onClick={closeMenu}
              className="px-5 py-2 rounded-full bg-blue-400 text-white hover:bg-blue-500 transition"
            >
              Get started
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
