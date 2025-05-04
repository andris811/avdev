import ProjectCard from "./ProjectCard";
import projectsData from "../data/projectsData";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
    >
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-10 text-center">PROJECTS</h2>

        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 place-items-center">
          {projectsData.map((project, index) => (
            <div key={index} className="relative w-full max-w-xl">
              {/* Background glow effect */}
              <div
                className="absolute -inset-2 z-0 rounded-xl bg-gradient-to-br from-purple-400/10 to-blue-400/10 blur-xl pointer-events-none"
                aria-hidden="true"
              ></div>

              {/* Project card content */}
              <div className="relative z-10">
                <ProjectCard {...project} />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
