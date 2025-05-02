const ProjectCard = ({ title, description, image, liveLink, repoLink }) => {
    return (
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow w-full max-w-md">
        <img src={image} alt={title} className="rounded mb-4" />
        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{description}</p>
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