import React, { useEffect } from "react";
import Introduction from "../components/Introduction";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import ScrollToTopButton from "../components/ScrollToTopButton";

const HomePage = () => {
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const offset = -80;
          const position = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({ top: position + offset, behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

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
