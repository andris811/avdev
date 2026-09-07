import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-scroll";

const Introduction = () => {
  const prefersReducedMotion = useReducedMotion();
  const profileImage = `${process.env.PUBLIC_URL}/images/profile.png`;
  const columns = 5;
  const rows = 6;
  const heroSignals = [
    { value: "6", label: "App Store releases" },
    { value: "16", label: "Portfolio projects" },
    { value: "SwiftUI", label: "+ React products" },
  ];
  const textMotion = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
      };
  const tiles = Array.from({ length: columns * rows }, (_, index) => {
    const column = index % columns;
    const row = Math.floor(index / columns);
    const xFromCenter = column - (columns - 1) / 2;
    const yFromCenter = row - (rows - 1) / 2;
    const drift = 34 + ((index * 11) % 28);

    return {
      index,
      column,
      row,
      x: xFromCenter * drift,
      y: yFromCenter * drift - 18,
      rotate: ((index % 2 === 0 ? 1 : -1) * (10 + ((index * 7) % 16))),
      radius: index % 3 === 0 ? "58% 42% 56% 44%" : index % 3 === 1 ? "44% 56% 48% 52%" : "52% 48% 42% 58%",
    };
  });

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
              <motion.div
                className="relative z-10 scale-110 w-full"
                style={{ aspectRatio: "352 / 592" }}
                initial={prefersReducedMotion ? false : { opacity: 0.92 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div
                  className="absolute inset-0 grid"
                  style={{
                    gridTemplateColumns: `repeat(${columns}, 1fr)`,
                    gridTemplateRows: `repeat(${rows}, 1fr)`,
                  }}
                  aria-hidden="true"
                >
                  {tiles.map((tile) => (
                    <motion.div
                      key={tile.index}
                      className="will-change-transform"
                      style={{
                        backgroundImage: `url(${profileImage})`,
                        backgroundSize: `${columns * 100}% ${rows * 100}%`,
                        backgroundPosition: `${(tile.column / (columns - 1)) * 100}% ${(tile.row / (rows - 1)) * 100}%`,
                      }}
                      initial={
                        prefersReducedMotion
                          ? false
                          : {
                              opacity: 0,
                              x: tile.x,
                              y: tile.y,
                              rotate: tile.rotate,
                              scale: 0.82,
                              borderRadius: tile.radius,
                            }
                      }
                      animate={{
                        opacity: 1,
                        x: 0,
                        y: 0,
                        rotate: 0,
                        scale: 1,
                        borderRadius: "0%",
                      }}
                      transition={{
                        duration: 0.75,
                        delay: prefersReducedMotion ? 0 : 0.05 + tile.index * 0.018,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  ))}
                </div>
                <motion.img
                  src={profileImage}
                  alt="Andras Varga - iOS and Full-Stack Developer"
                  className="absolute inset-0 w-full h-full object-contain"
                  initial={prefersReducedMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.25,
                    delay: prefersReducedMotion ? 0 : 1.05,
                  }}
                />
              </motion.div>
              {/* White background rectangle - same height as image, behind it */}
              <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-t-3xl shadow-2xl ring-1 ring-gray-200 dark:ring-gray-700 -z-10 scale-90 origin-top"></div>
            </div>
          </div>

          {/* Right content - Text & CTA */}
          <div className="order-1 md:order-2 text-center md:text-left">
            <motion.p
              {...textMotion}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-sm tracking-widest text-emerald-600 dark:text-emerald-300 uppercase mb-3 font-semibold"
            >
              iOS & Full-Stack Developer
            </motion.p>

            <motion.h1
              {...textMotion}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
            >
              Hello, <br />
              I'm Andras
            </motion.h1>

            <motion.p
              {...textMotion}
              transition={{ duration: 0.55, delay: 0.35 }}
              className="text-base md:text-lg xl:text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-xl mx-auto md:mx-0 leading-relaxed"
            >
              I'm a creative and curious developer from Hungary 🇭🇺 living in
              Shanghai. I build polished native iOS apps and full-stack web
              products that solve real problems and create delightful user
              experiences.
            </motion.p>

            <motion.div
              {...textMotion}
              transition={{ duration: 0.55, delay: 0.45 }}
              className="flex flex-wrap justify-center md:justify-start gap-3 max-w-xl mx-auto md:mx-0 mb-8"
            >
              {heroSignals.map((signal) => (
                <div
                  key={signal.label}
                  className="inline-flex items-baseline gap-2 rounded-full border border-gray-200 bg-white/70 px-4 py-2 shadow-sm dark:border-gray-700 dark:bg-gray-800/60"
                >
                  <span className="text-sm font-bold text-gray-900 dark:text-white">
                    {signal.value}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {signal.label}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div
              {...textMotion}
              transition={{ duration: 0.55, delay: 0.55 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start mb-6"
            >
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="inline-block px-8 py-3 text-base font-semibold bg-gradient-to-r from-emerald-600 to-sky-600 text-white rounded-lg hover:shadow-lg transition-shadow duration-200 cursor-pointer"
              >
                Let's Connect →
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-80}
                className="inline-block px-8 py-3 text-base font-semibold rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 hover:shadow-lg transition-shadow duration-200 cursor-pointer"
              >
                View Projects
              </Link>
            </motion.div>

            <motion.div
              {...textMotion}
              transition={{ duration: 0.55, delay: 0.65 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
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
            </motion.div>
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
