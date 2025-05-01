import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";

const Introduction = () => {
  return (
    <section
      id="intro"
      className="relative min-h-[85vh] flex flex-col justify-center items-center text-center px-4 bg-white dark:bg-gray-900"
    >
      {/* Logo */}
      <img
        src={`${process.env.PUBLIC_URL}/logo.png`}
        alt="AV logo"
        className="w-48 md:w-56 mb-3 drop-shadow-md"
      />

      {/* Web developer title */}
      <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mb-1 tracking-wide uppercase">
        Full-Stack Web Developer
      </p>

      {/* Headline */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-2">
        Hi, I'm Andras 👋
      </h1>

      {/* Code-style intro */}
      <p className="text-sm md:text-base font-mono text-gray-600 dark:text-gray-400 leading-relaxed max-w-md mb-4">
        const me = &#123; <br />
        &nbsp;&nbsp;origin: "Hungary 🇭🇺",
        <br />
        &nbsp;&nbsp;location: "Shanghai",
        <br />
        &nbsp;&nbsp;skills: ["React", "JavaScript", "Tailwind"],
        <br />
        &nbsp;&nbsp;coffeeLover: true,
        <br />
        &nbsp;&nbsp;alwaysLearning: true
        <br />
        &#125;
      </p>

      {/* Social icons */}
      <div className="flex space-x-4 mb-4">
        <a
          href="https://github.com/andris811"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-black transition"
        >
          <FontAwesomeIcon icon={faGithub} size="lg" className="grayscale" />
        </a>
        <a
          href="https://www.linkedin.com/in/andrasv89/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition"
        >
          <FontAwesomeIcon icon={faLinkedin} size="lg" className="grayscale" />
        </a>
      </div>

      {/* Tech stack */}
      <div className="flex flex-wrap justify-center gap-3 text-gray-700 dark:text-gray-300 text-sm font-semibold mb-6">
        <span className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded">
          React
        </span>
        <span className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded">
          JavaScript
        </span>
        <span className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded">
          Tailwind
        </span>
        <span className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded">
          Node.js
        </span>
        <span className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded">
          Python
        </span>
        <span className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded">
          Express
        </span>
      </div>

      {/* Call to action */}
      <Link
        to="contact"
        smooth={true}
        duration={500}
        offset={-60}
        className="inline-block mt-2 text-sm text-gray-700 dark:text-gray-300 font-medium border border-gray-400 dark:border-gray-500 rounded-full px-5 py-2 hover:scale-105 transition-transform duration-300 cursor-pointer"
      >
        Let’s connect ↓
      </Link>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-4xl text-gray-400 select-none leading-none">
        <div className="flex flex-col items-center">
          <span className="opacity-30">⌄</span>
          <span className="opacity-60">⌄</span>
          <span className="opacity-100">⌄</span>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
