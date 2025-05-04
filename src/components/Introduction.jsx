import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";
import CodeSnippet from "./CodeSnippet";

const Introduction = () => {
  return (
    <section
      id="intro"
      className="min-h-screen flex items-center justify-center text-center px-4 bg-white dark:bg-gray-900 relative"
    >
      <div className="max-w-xl w-full z-10">
        {/* Logo with glow */}
        <div className="relative inline-block mb-6 group">
          <div
            className="absolute inset-0 scale-125 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 blur-[80px] opacity-50 group-hover:opacity-90 transition duration-700 ease-in-out z-0"
            aria-hidden="true"
          ></div>
          <img
            src={`${process.env.PUBLIC_URL}/logo.png`}
            alt="AV logo"
            draggable="false"
            className="select-none touch-none w-48 md:w-56 relative z-10 drop-shadow-md"
          />
        </div>

        {/* Title */}
        <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mb-1 tracking-wide uppercase">
          Full-Stack Web Developer
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Hi, I'm Andras
        </h1>

        {/* Animated Code Snippet */}
        <CodeSnippet />

        {/* Socials */}
        <div className="flex justify-center space-x-4 mb-6">
          <a
            href="https://github.com/andris811"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-black transition"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/andrasv89/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
        </div>

        {/* CTA */}
        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-60}
          className="inline-block mt-2 text-sm text-gray-700 dark:text-gray-300 font-medium border border-gray-400 dark:border-gray-500 rounded-full px-5 py-2 hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          Let’s connect ↓
        </Link>

        {/* Scroll hint */}
        <div className="mt-10 text-4xl text-gray-400 select-none leading-none">
          <div className="flex flex-col items-center">
            <span className="opacity-30">⌄</span>
            <span className="opacity-60">⌄</span>
            <span className="opacity-100">⌄</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
