import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/" || location.pathname === "/avdev" || location.pathname === "/avdev/";

  //   Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const navItems = [
    { id: "intro", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (itemId) => {
    if (!isHomePage) {
      // If not on home page, navigate to home first
      navigate("/");
      // Wait for navigation, then scroll
      setTimeout(() => {
        // First scroll to top instantly to reset position
        window.scrollTo({ top: 0, behavior: "instant" });

        // Then scroll to target section if not intro
        setTimeout(() => {
          if (itemId !== "intro") {
            const element = document.getElementById(itemId);
            if (element) {
              const offset = -80;
              const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
              window.scrollTo({ top: elementPosition + offset, behavior: "smooth" });
            }
          }
        }, 50);
      }, 100);
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 backdrop-blur-md border-b ${
        scrolled
          ? "bg-white/70 dark:bg-gray-900/70 border-gray-200 dark:border-gray-700"
          : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-center items-center relative">
        {/* Mobile name - left side */}
        <div className="md:hidden absolute left-4">
          <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">Andras</span>
        </div>

        {/* Desktop nav */}
        <div className="flex items-center">
          <ul className="hidden md:flex space-x-12 text-base md:text-lg xl:text-xl text-gray-700 dark:text-gray-300 font-medium">
            {navItems.map((item) => (
              <li key={item.id}>
                {isHomePage ? (
                  <ScrollLink
                    to={item.id}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    spyThrottle={100}
                    activeClass="text-purple-600 dark:text-purple-400 border-t-2 border-b-2 border-purple-600 dark:border-purple-400 py-1"
                    className="cursor-pointer transition duration-200 hover:text-purple-600 dark:hover:text-purple-400"
                    hashSpy={true}
                    isDynamic={true}
                  >
                    {item.label}
                  </ScrollLink>
                ) : (
                  <span
                    onClick={() => handleNavClick(item.id)}
                    className="cursor-pointer transition duration-200 hover:text-purple-600 dark:hover:text-purple-400"
                  >
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile hamburger - positioned absolutely on right */}
        <div className="md:hidden absolute right-4 flex items-center">
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
              {isHomePage ? (
                <ScrollLink
                  to={item.id}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  spyThrottle={100}
                  activeClass="text-purple-600 dark:text-purple-400 border-l-2 border-purple-600 dark:border-purple-400 pl-2"
                  className="block cursor-pointer transition duration-200 hover:text-purple-600 dark:hover:text-purple-400"
                  onClick={() => setIsOpen(false)}
                  hashSpy={true}
                  isDynamic={true}
                >
                  {item.label}
                </ScrollLink>
              ) : (
                <span
                  onClick={() => handleNavClick(item.id)}
                  className="block cursor-pointer transition duration-200 hover:text-purple-600 dark:hover:text-purple-400"
                >
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
