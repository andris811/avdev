import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "intro", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Site logo */}
        <Link
          to="intro"
          smooth={true}
          duration={500}
          offset={-60}
          className="flex items-center cursor-pointer"
        >
          <span className="text-2xl font-mono tracking-wide flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-md shadow-sm">
            <span className="animate-pulse text-blue-500">&lt;/&gt;</span>
            <span className="font-semibold text-gray-800 dark:text-gray-100">
              AVDev
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex space-x-6 text-sm text-gray-700">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                smooth={true}
                duration={500}
                spy={true}
                offset={-60}
                activeClass="text-black underline"
                className="cursor-pointer transition duration-300 hover:text-black"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen
            ? "max-h-96 opacity-100 scale-100"
            : "max-h-0 opacity-0 scale-95"
        }`}
      >
        <ul className="bg-white px-4 pb-4 pt-2 text-sm text-gray-700 space-y-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                smooth={true}
                duration={500}
                spy={true}
                offset={-60}
                activeClass="text-black underline"
                className="block cursor-pointer transition duration-300 hover:text-black"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
