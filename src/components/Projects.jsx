import projectsData from "../data/projectsData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-center"
    >
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="flex flex-wrap justify-center gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
