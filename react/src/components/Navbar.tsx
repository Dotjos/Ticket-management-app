import { useState } from "react";
import { Menu, X } from "lucide-react";
import NavList from "./NavList";
import { NavLink } from "react-router";
// import {  NavLink } from "react-router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] lg:w-4/5">
      {/* Navbar Container */}
      <div className="bg-blue-900 backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-between px-6 py-3 rounded-full md:px-10 md:py-2 lg:py-4 text-white">
        {/* Logo */}
        <div className="font-semibold text-xl">Ticketrax</div>

        {/* Desktop Links */}
        <NavList />

        {/* CTA Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <button className="px-5 py-2 rounded-full border border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white transition">
            Login
          </button>
          <button className="px-5 py-2 rounded-full bg-blue-400 text-white hover:bg-blue-500 transition">
            Get Started
          </button>
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
        <div className="md:hidden mt-2 b bg-deep-blue backdrop-blur-md border border-white/20 rounded-2xl shadow-lg py-4 px-6 text-white text-sm space-y-3">
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
          <NavLink to="/tickets" className="hover:text-blue-300 transition">
            Tickets
          </NavLink>

          {/* CTA Buttons (Mobile) */}
          <div className="pt-3 border-t text-white border-white/20 space-y-2">
            <button className="w-full px-5 py-2 rounded-full border bg-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white transition">
              Login
            </button>
            <button className="w-full px-5 py-2 rounded-full bg-blue-400  hover:bg-blue-500 transition">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
