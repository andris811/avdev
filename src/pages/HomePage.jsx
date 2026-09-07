import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Introduction from "../components/Introduction";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import ScrollToTopButton from "../components/ScrollToTopButton";

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    const sectionIds = ["intro", "about", "projects", "contact"];
    const routeSection = location.pathname.slice(1);
    const hashSection = window.location.hash.slice(1);
    const section = sectionIds.includes(routeSection) ? routeSection : hashSection;

    if (sectionIds.includes(section)) {
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          const offset = -80;
          const position = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({ top: position + offset, behavior: "smooth" });
        }
      }, 100);
    }
  }, [location.pathname]);

  return (
    <main className="md:pt-20">
      <Introduction />
      <About />
      <Projects />
      <Contact />
      <ScrollToTopButton />
    </main>
  );
};

export default HomePage;
