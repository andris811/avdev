import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import ProjectCard from "./ProjectCard";
import projectsData from "../data/projectsData";

const Projects = () => {
  // Show only the 3 most recent projects
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <section
      id="projects"
      className="relative min-h-screen px-6 py-8 pb-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
      style={{ scrollMarginTop: '60px' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A selection of my most recent work. Explore all {projectsData.length} projects to see more.
          </p>
        </div>

        {/* Projects Grid - Only 3 projects */}
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <div key={index}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <RouterLink
            to="/projects"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow duration-200"
          >
            View All Projects ({projectsData.length - 3} more)
          </RouterLink>
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="hidden md:flex justify-center mt-12 animate-bounce text-gray-400 dark:text-gray-500">
        <ScrollLink to="contact" smooth={true} duration={500} offset={-80}>
          <span className="text-2xl md:text-3xl cursor-pointer">⌄</span>
        </ScrollLink>
      </div>
    </section>
  );
};

export default Projects;
