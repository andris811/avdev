import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProjectCard = ({ title, description, image, images, liveLink, repoLink, tech }) => {
  const renderImages = () => {
    if (images && images.length > 1) {
      return (
        <Carousel
          showThumbs={false}
          infiniteLoop
          showStatus={false}
          autoPlay
          interval={3000}
          transitionTime={600}
          stopOnHover
          showArrows
          className="mb-4 rounded-md h-56"
        >
          {images.map((img, i) => (
            <div key={i} className="h-56">
              <img
                src={typeof img === "string" ? img : URL.createObjectURL(img)}
                alt={`${title} ${i + 1}`}
                className="h-full w-full object-cover rounded-md"
              />
            </div>
          ))}
        </Carousel>
      );
    } else if (image || (images && images.length === 1)) {
      const fallback = images?.[0] || image;
      return (
        <img
          src={fallback}
          alt={title}
          className="h-56 w-full object-cover rounded-md mb-4"
        />
      );
    } else {
      return (
        <div className="h-56 w-full bg-gray-300 dark:bg-gray-700 rounded-md mb-4 flex items-center justify-center text-gray-600 dark:text-gray-400 text-sm">
          No image available
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col justify-between bg-gray-100 dark:bg-gray-800 p-5 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl duration-300 w-full max-w-xl min-h-[500px]">
      <div>
        {renderImages()}

        {/* Work in Progress badge */}
        {/* {!liveLink && (
          <span className="inline-block mb-2 text-xs text-yellow-700 dark:text-yellow-300 bg-yellow-100 dark:bg-yellow-800 px-2 py-1 rounded-full font-medium">
            🚧 Work in Progress
          </span>
        )} */}

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
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 mt-4">
        {liveLink ? (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 transition"
          >
            <FaExternalLinkAlt className="text-sm" />
            <span className="text-sm font-semibold">Live</span>
          </a>
        ) : (
          <span className="px-3 py-1.5 rounded-md bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-semibold opacity-70 cursor-not-allowed">
            🚧 Coming Soon
          </span>
        )}

        <a
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          <FaGithub className="text-sm" />
          <span className="text-sm font-semibold">Code</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
