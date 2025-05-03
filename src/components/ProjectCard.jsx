const ProjectCard = ({ title, description, image, liveLink, repoLink, tech }) => {
    return (
      <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl duration-300 w-full max-w-xl">
        <img src={image} alt={title} className="rounded-md mb-4" />
        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{description}</p>
  
        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech?.map((item) => (
            <span
              key={item}
              className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-md text-gray-700 dark:text-gray-300 font-medium"
            >
              {item}
            </span>
          ))}
        </div>
  
        <div className="flex gap-4">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Live
          </a>
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Code
          </a>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;
  