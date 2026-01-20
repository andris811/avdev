import { useMemo, useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaAppStore, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProjectCard = ({
  title,
  description,
  image,
  images,
  liveLink,
  repoLink,
  tech,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAllTech, setShowAllTech] = useState(false);

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

  // Check if this is an iOS app
  const isIOSApp = tech?.includes("Swift");

  const nextImage = () => {
    if (processedImages) {
      setCurrentIndex((prev) => (prev + 1) % processedImages.length);
    }
  };

  const prevImage = () => {
    if (processedImages) {
      setCurrentIndex((prev) => (prev - 1 + processedImages.length) % processedImages.length);
    }
  };

  const renderImages = () => {
    if (processedImages && processedImages.length > 1) {
      return (
        <div className="relative h-56 bg-gray-200 dark:bg-gray-700 rounded-xl mb-4 overflow-hidden group">
          <img
            src={processedImages[currentIndex].url}
            alt={`${title} screenshot ${currentIndex + 1} of ${processedImages.length}`}
            className="h-full w-full object-cover rounded-xl"
            loading="lazy"
            decoding="async"
          />

          {/* Navigation buttons */}
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-150"
            aria-label="Previous image"
          >
            <FaChevronLeft className="text-sm" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-150"
            aria-label="Next image"
          >
            <FaChevronRight className="text-sm" />
          </button>

          {/* Dots indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {processedImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-150 ${
                  i === currentIndex
                    ? "bg-white w-4"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </div>
      );
    } else if (image || (processedImages && processedImages.length === 1)) {
      const fallback = processedImages?.[0]?.url || image;
      return (
        <div className="h-56 bg-gray-200 dark:bg-gray-700 rounded-xl mb-4 overflow-hidden">
          <img
            src={fallback}
            alt={`${title} project screenshot`}
            className="h-full w-full object-cover rounded-xl"
            loading="lazy"
            decoding="async"
          />
        </div>
      );
    } else {
      return (
        <div className="h-56 w-full bg-gray-300 dark:bg-gray-700 rounded-xl mb-4 flex items-center justify-center text-gray-600 dark:text-gray-400 text-sm">
          No image available
        </div>
      );
    }
  };

  return (
    <div className="relative z-10 flex flex-col justify-between bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-out h-full min-h-[580px] border border-gray-100 dark:border-gray-700 hover:-translate-y-2 hover:scale-[1.02] overflow-visible"
    >
      <div>
        {renderImages()}

        <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech?.slice(0, 4).map((item) => (
            <span
              key={item}
              className="text-xs bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 px-2 py-1 rounded-md font-medium border border-purple-200 dark:border-purple-800"
            >
              {item}
            </span>
          ))}
          {tech && tech.length > 4 && (
            <div className="relative">
              <span
                className="text-xs text-purple-600 dark:text-purple-400 px-2 py-1 cursor-pointer hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                onMouseEnter={() => setShowAllTech(true)}
                onMouseLeave={() => setShowAllTech(false)}
              >
                +{tech.length - 4} more
              </span>
              {showAllTech && (
                <div
                  className="absolute bottom-full left-0 mb-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg shadow-2xl p-3 min-w-[200px] max-w-[250px] pointer-events-none"
                  style={{ zIndex: 9999 }}
                >
                  <p className="text-xs font-semibold mb-2 text-gray-700 dark:text-gray-200">All Technologies:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {tech.slice(4).map((item) => (
                      <span
                        key={item}
                        className="text-xs bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 px-2 py-1 rounded-md font-medium border border-purple-200 dark:border-purple-800"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 mt-auto pt-4">
        {liveLink ? (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 font-semibold"
          >
            <FaExternalLinkAlt className="text-sm" />
            <span className="text-sm">{isIOSApp ? "View" : "Live"}</span>
          </a>
        ) : (
          <span className="flex-1 flex items-center justify-center px-4 py-2.5 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-sm font-semibold cursor-not-allowed">
            Coming Soon
          </span>
        )}

        {repoLink && (
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 font-semibold"
          >
            {isIOSApp ? <FaAppStore className="text-sm" /> : <FaGithub className="text-sm" />}
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
