import { useEffect, useMemo } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProjectCard = ({
  title,
  description,
  image,
  images,
  liveLink,
  repoLink,
  tech,
}) => {
  // Create object URLs and store them for cleanup
  const processedImages = useMemo(() => {
    if (!images) return null;

    return images.map((img) => {
      if (typeof img === "string") {
        return { url: img, isObjectURL: false };
      } else {
        return { url: URL.createObjectURL(img), isObjectURL: true };
      }
    });
  }, [images]);

  // Clean up object URLs on unmount
  useEffect(() => {
    return () => {
      if (processedImages) {
        processedImages.forEach(({ url, isObjectURL }) => {
          if (isObjectURL) {
            URL.revokeObjectURL(url);
          }
        });
      }
    };
  }, [processedImages]);

  const renderImages = () => {
    if (processedImages && processedImages.length > 1) {
      return (
        <Carousel
          showThumbs={false}
          infiniteLoop
          showStatus={false}
          autoPlay={false}
          transitionTime={600}
          showArrows
          useKeyboardArrows
          swipeable
          emulateTouch
          className="mb-4 rounded-md h-56"
          ariaLabel={`${title} project images`}
        >
          {processedImages.map(({ url }, i) => (
            <div key={i} className="h-56 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center">
              <img
                src={url}
                alt={`${title} screenshot ${i + 1} of ${processedImages.length}`}
                className="h-full w-auto object-contain rounded-md"
                loading="lazy"
              />
            </div>
          ))}
        </Carousel>
      );
    } else if (image || (processedImages && processedImages.length === 1)) {
      const fallback = processedImages?.[0]?.url || image;
      return (
        <div className="h-56 bg-gray-200 dark:bg-gray-700 rounded-md mb-4 flex items-center justify-center">
          <img
            src={fallback}
            alt={`${title} project screenshot`}
            className="h-full w-auto object-contain rounded-md"
            loading="lazy"
          />
        </div>
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
    <div className="relative z-10 flex flex-col justify-between bg-gray-100 dark:bg-gray-800 p-5 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl duration-300 w-full max-w-xl min-h-[500px]">
      <div>
        {renderImages()}

        {/* Work in Progress badge */}
        {/* {!liveLink && (
          <span className="inline-block mb-2 text-xs text-yellow-700 dark:text-yellow-300 bg-yellow-100 dark:bg-yellow-800 px-2 py-1 rounded-full font-medium">
            🚧 Work in Progress
          </span>
        )} */}

        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
          {description}
        </p>

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

        {repoLink ? (
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            <FaGithub className="text-sm" />
            <span className="text-sm font-semibold">Code</span>
          </a>
        ) : (
          <span className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-semibold opacity-70 cursor-not-allowed">
            <FaGithub className="text-sm" />
            <span>Coming Soon</span>
          </span>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
