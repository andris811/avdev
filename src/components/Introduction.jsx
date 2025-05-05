import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import CodeSnippet from "./CodeSnippet";

const Introduction = () => {
  const [greeting, setGreeting] = useState("Hello");

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      setGreeting("Good morning");
    } else if (hour >= 12 && hour < 18) {
      setGreeting("Good afternoon");
    } else if (hour >= 18 && hour < 22) {
      setGreeting("Good evening");
    } else {
      setGreeting("Hello night owl");
    }
  }, []);

  return (
    <section
      id="intro"
      className="min-h-screen flex items-center justify-center px-6 py-20 sm:px-8 md:px-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 overflow-hidden"
    >
      {/* Content Wrapper */}
      <div className="relative w-full max-w-7xl mx-auto">
        {/* Background Glow */}
        <div
          className="absolute -inset-2 z-0 rounded-xl bg-gradient-to-br from-purple-400/10 to-blue-400/10 blur-2xl pointer-events-none"
          aria-hidden="true"
        ></div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 grid md:grid-cols-2 gap-10 items-center text-center md:text-left"
        >
          {/* Left content */}
          <div>
            <p className="text-sm tracking-widest text-gray-500 dark:text-gray-400 uppercase mb-2">
              Full-Stack Web Developer
            </p>
            <h1 className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-4 leading-tight">
              {greeting}, <br />
              I'm Andras
            </h1>
            <p className="text-base md:text-lg xl:text-xl 2xl:text-2xl text-gray-600 dark:text-gray-300 mb-6 max-w-md xl:max-w-lg 2xl:max-w-xl text-center md:text-left mx-auto md:mx-0">
              I’m a creative and curious developer from Hungary 🇭🇺 living in
              Shanghai. I love building functional and fun apps—especially ones
              that make people smile.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6 text-sm xl:text-base">
              <a
                href="https://github.com/andris811"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                <FontAwesomeIcon icon={faGithub} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/andrasv89/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                <FontAwesomeIcon icon={faLinkedin} />
                LinkedIn
              </a>
            </div>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-60}
              className="inline-block mt-2 text-sm font-medium border border-gray-400 dark:border-gray-500 rounded-full px-5 py-2 hover:scale-105 transition-transform cursor-pointer"
            >
              Let’s connect ↓
            </Link>
          </div>

          {/* Right content – code snippet */}
          <div>
            <CodeSnippet />
          </div>
        </motion.div>
      </div>
      {/* Scroll Hint – show only on md+ screens */}
      <div className="hidden md:block absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 animate-bounce text-gray-400 dark:text-gray-500">
        <Link to="about" smooth={true} duration={500} offset={-60}>
          <span className="text-2xl md:text-3xl cursor-pointer">⌄</span>
        </Link>
      </div>
    </section>
  );
};

export default Introduction;
