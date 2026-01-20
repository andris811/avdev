import { Link } from "react-scroll";
import { FaCode, FaMobileAlt, FaPalette, FaServer } from "react-icons/fa";

const About = () => {
  const services = [
    {
      icon: <FaCode className="text-4xl mb-4 text-purple-600 dark:text-purple-400 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />,
      title: "Full-Stack Development",
      description: "Building scalable web applications with modern frameworks like React, Next.js, Node.js, and database solutions.",
    },
    {
      icon: <FaMobileAlt className="text-4xl mb-4 text-blue-600 dark:text-blue-400 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />,
      title: "Mobile Development",
      description: "Creating native iOS apps with Swift and SwiftUI, focusing on clean UX and seamless performance.",
    },
    {
      icon: <FaPalette className="text-4xl mb-4 text-pink-600 dark:text-pink-400 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />,
      title: "UI/UX Design",
      description: "Designing beautiful, intuitive interfaces with Figma and bringing them to life with modern CSS frameworks.",
    },
    {
      icon: <FaServer className="text-4xl mb-4 text-green-600 dark:text-green-400 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />,
      title: "Backend & APIs",
      description: "Developing robust REST APIs and backend systems with Express, NestJS, Django, and Spring Boot.",
    },
  ];

  const techStack = [
    "React", "Next.js", "TypeScript", "Node.js", "Swift",
    "Python", "Java", "PostgreSQL", "MongoDB", "Tailwind CSS"
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
    >
      <div className="max-w-7xl w-full">
        {/* Section Header */}
        <div className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
            What I Do
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm a full-stack developer from Hungary, based in Shanghai. I specialize in creating elegant,
            high-performance applications that solve real-world problems.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-out h-full border border-gray-100 dark:border-gray-700 hover:-translate-y-2 hover:scale-105"
            >
              {service.icon}
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Background & Strengths */}
        <div className="grid md:grid-cols-2 gap-8 mb-16"
        >
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-4">My Background</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              With a background in education and environmental science, I transitioned into tech after
              years of working in international settings and managing teams. I bring a unique perspective
              that blends logic, creativity, and cross-cultural communication.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Outside of coding, I'm passionate about photography, gaming, and exploring the world.
              I'm always eager to learn new technologies and take on challenging projects.
            </p>
          </div>

          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-4">Key Strengths</h3>
            <ul className="space-y-3">
              {[
                "Cross-cultural communication & teamwork",
                "Fast learner and detail-oriented",
                "Creative problem solving",
                "Strong foundation in both frontend & backend",
                "User-focused design thinking"
              ].map((strength, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">{strength}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* De-emphasized Tech Stack */}
        <div className="text-center"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Technologies I work with</p>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full border border-gray-200 dark:border-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="hidden md:block mt-12 animate-bounce text-gray-400 dark:text-gray-500">
        <Link to="projects" smooth={true} duration={500} offset={-80}>
          <span className="text-2xl md:text-3xl cursor-pointer">⌄</span>
        </Link>
      </div>
    </section>
  );
};

export default About;
