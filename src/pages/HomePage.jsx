import React from "react";
import Introduction from "../components/Introduction";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import ScrollToTopButton from "../components/ScrollToTopButton";

const HomePage = () => {
  return (
    <main className="pt-20">
      <Introduction />
      <About />
      <Projects />
      <Contact />
      <ScrollToTopButton />
    </main>
  );
};

export default HomePage;
