"use client";
import React, { useState } from "react";
import NavLink from "../components/NavLink";
import { FiMenu, FiX } from "react-icons/fi";
const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Login",
    path: "#login",
  },
  {
    title: "Register",
    path: "#register",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <nav className="fixed mx-auto rounded-lg top-10 left-10 right-10 z-10 bg-[#1a1a1a] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <div className="text-white text-2xl md:text-5xl">
          <span style={{ fontWeight: "bold" }}>Job</span>Portal
        </div>
        <div className="mobile-menu block md:hidden">
          <button
            onClick={toggleNavbar}
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
          >
            {navbarOpen ? (
              <FiX className="h-5 w-5" />
            ) : (
              <FiMenu className="h-5 w-5" />
            )}
          </button>
        </div>
        <div className={`menu ${navbarOpen ? "block" : "hidden"} md:block md:w-auto`} id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;