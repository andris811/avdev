import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-900 shadow-md hover:scale-110 transition ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Back to top"
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTopButton;
