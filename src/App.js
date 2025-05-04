import React from 'react';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <div className="App font-sans text-gray-900 scroll-smooth">
      <Navbar />
      <main className="pt-20"> {/* space for fixed navbar */}
        <Introduction />
        <About />
        <section id="projects">
          <Projects />
        </section>
        <Contact />
        <ScrollToTopButton />
      </main>
      <Footer />
    </div>
  );
}

export default App;
