import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  //   Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme sync
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isOpen &&
        !e.target.closest(".mobile-menu") &&
        !e.target.closest("button[aria-label='Toggle Menu']")
      ) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const navItems = [
    { id: "intro", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 backdrop-blur-md border-b ${
        scrolled
          ? "bg-white/70 dark:bg-gray-900/70 border-gray-200 dark:border-gray-700"
          : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Site logo */}
        <span
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center cursor-pointer"
        >
          <span className="text-2xl font-mono tracking-wide flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-md shadow-sm">
            <span className="animate-pulse text-blue-500">&lt;/&gt;</span>
            <span className="font-semibold text-gray-800 dark:text-gray-100">
              AVDev
            </span>
          </span>
        </span>

        {/* Desktop nav + theme toggle */}
        <div className="flex items-center space-x-4">
          <ul className="hidden md:flex space-x-6 text-base md:text-lg xl:text-xl text-gray-700 dark:text-gray-300 font-medium">
            {navItems.map((item) => (
              <li key={item.id}>
                {item.id === "intro" ? (
                  <span
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="cursor-pointer transition duration-300 hover:text-black dark:hover:text-white"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.id}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={item.id === "contact" ? 95 : -60} // ⬅️ Adjust only for contact
                    activeClass="text-black dark:text-white underline"
                    className="cursor-pointer transition duration-300 hover:text-black dark:hover:text-white"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Theme toggle button */}
          <button
            onClick={toggleTheme}
            className="hidden md:block text-gray-700 dark:text-gray-300 hover:scale-110 transition"
            aria-label="Toggle theme"
          >
            <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
          </button>
        </div>

        {/* Mobile toggle + hamburger */}
        <div className="md:hidden flex items-center space-x-4 ml-4">
          {/* Theme toggle on mobile */}
          <button
            onClick={toggleTheme}
            className="text-gray-700 dark:text-gray-300 hover:scale-110 transition"
            aria-label="Toggle theme"
          >
            <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
          </button>

          {/* Hamburger menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-gray-100"
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
        className={`mobile-menu md:hidden absolute top-full right-4 mt-2 w-1/4 bg-white dark:bg-gray-800 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-md shadow transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-start text-base md:text-lg text-gray-700 dark:text-gray-300 p-3 space-y-3 font-medium">
          {navItems.map((item) => (
            <li key={item.id}>
              {item.id === "intro" ? (
                <span
                  onClick={() => {
                    setIsOpen(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="block cursor-pointer transition duration-300 hover:text-black dark:hover:text-white"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.id}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-50}
                  activeClass="text-black dark:text-white underline"
                  className="block cursor-pointer transition duration-300 hover:text-black dark:hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
