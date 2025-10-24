"use client";

import { NavLink } from "react-router";

const NavList = () => {
  return (
    <ul className="hidden md:flex items-center gap-8 text-sm">
      <li>
        <a href="#home" className="hover:text-blue-300 transition">
          Home
        </a>
      </li>
      <li>
        <a href="#features" className="hover:text-blue-300 transition">
          Features
        </a>
      </li>
      <li>
        <NavLink to="/tickets" className="hover:text-blue-300 transition">
          Tickets
        </NavLink>
      </li>
    </ul>
  );
};

export default NavList;
