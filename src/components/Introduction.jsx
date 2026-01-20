import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";

const Introduction = () => {

  return (
    <section
      id="intro"
      className="min-h-screen flex items-center justify-center px-6 py-20 sm:px-8 md:px-12 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100 overflow-hidden"
    >
      {/* Content Wrapper */}
      <div className="relative w-full max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="relative z-10 grid md:grid-cols-2 gap-12 lg:gap-16 items-center animate-fade-in"
        >
          {/* Left content - Profile Photo */}
          <div className="relative order-2 md:order-1">
            <div className="relative w-full max-w-sm mx-auto">
              {/* Photo container - larger, pops out of frame */}
              <div className="relative z-10 scale-110">
                <img
                  src={`${process.env.PUBLIC_URL}/images/profile.png`}
                  alt="Andras Varga - Full-Stack Developer"
                  className="w-full h-auto object-contain"
                />
              </div>
              {/* White background rectangle - same height as image, behind it */}
              <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-t-3xl shadow-2xl ring-1 ring-gray-200 dark:ring-gray-700 -z-10 scale-90 origin-top"></div>
            </div>
          </div>

          {/* Right content - Text & CTA */}
          <div className="order-1 md:order-2 text-center md:text-left">
            <p className="text-sm tracking-widest text-purple-600 dark:text-purple-400 uppercase mb-3 font-semibold">
              Full-Stack Web Developer
            </p>

            <h1 className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Hello, <br />
              I'm Andras
            </h1>

            <p className="text-base md:text-lg xl:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
              I'm a creative and curious developer from Hungary 🇭🇺 living in
              Shanghai. I love building functional and elegant applications that
              solve real problems and create delightful user experiences.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <a
                href="https://github.com/andris811"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 hover:shadow-lg transition-shadow duration-200"
              >
                <FontAwesomeIcon icon={faGithub} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/andrasv89/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 hover:shadow-lg transition-shadow duration-200"
              >
                <FontAwesomeIcon icon={faLinkedin} />
                LinkedIn
              </a>
            </div>

            <div>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="inline-block px-8 py-3 text-base font-semibold bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-shadow duration-200 cursor-pointer"
              >
                Let's Connect →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="hidden md:block absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 animate-bounce text-gray-400 dark:text-gray-500">
        <Link to="about" smooth={true} duration={500} offset={-80}>
          <span className="text-2xl md:text-3xl cursor-pointer">⌄</span>
        </Link>
      </div>
    </section>
  );
};

export default Introduction;
