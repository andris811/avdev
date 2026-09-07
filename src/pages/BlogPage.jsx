import { Link, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { getAllPosts } from "../data/blog";

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedTag = searchParams.get("tag");
  
  const allPosts = getAllPosts();
  const posts = selectedTag 
    ? allPosts.filter(post => post.tags.includes(selectedTag))
    : allPosts;

  const allTags = [...new Set(allPosts.flatMap(post => post.tags))].sort();

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleTagClick = (tag, e) => {
    e.preventDefault();
    e.stopPropagation();
    if (selectedTag === tag) {
      setSearchParams({});
    } else {
      setSearchParams({ tag });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 pt-24 pb-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16 text-center pt-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-emerald-600 to-sky-600 dark:from-emerald-300 dark:to-sky-300 bg-clip-text text-transparent pb-2">
            Blog
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Thoughts on software development, product management, and life in tech
          </p>
        </header>

        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSearchParams({})}
              className={`text-sm px-3 py-1.5 rounded-full transition-colors ${
                !selectedTag
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-600 dark:hover:text-emerald-300"
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={(e) => handleTagClick(tag, e)}
                className={`text-sm px-3 py-1.5 rounded-full transition-colors ${
                  selectedTag === tag
                    ? "bg-emerald-600 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-600 dark:hover:text-emerald-300"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {posts.length === 0 ? (
          <p className="text-center text-gray-500">No posts found for tag: {selectedTag}</p>
        ) : (
          <div className="space-y-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-emerald-600 dark:hover:border-emerald-300 transition-colors"
              >
                <Link to={`/blog/${post.id}`} className="block">
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <time className="text-sm text-emerald-600 dark:text-emerald-300 font-medium">
                      {formatDate(post.date)}
                    </time>
                    <div className="flex flex-wrap gap-2">
                       {post.tags.map((tag) => (
                        <span
                          key={tag}
                          onClick={(e) => handleTagClick(tag, e)}
                          className={`text-xs px-2 py-0.5 rounded cursor-pointer transition-colors ${
                            selectedTag === tag
                              ? "bg-emerald-600 text-white"
                              : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-600 dark:hover:text-emerald-300"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 dark:text-gray-400">{post.excerpt}</p>

                  <span className="inline-block mt-4 text-sm font-medium text-emerald-600 dark:text-emerald-300">
                    Read more →
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;