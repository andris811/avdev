import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { getPostById } from "../data/blog";

const BlogPostPage = () => {
  const { id } = useParams();
  const post = getPostById(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 pt-24 pb-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Link to="/blog" className="text-purple-600 dark:text-purple-400 hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const renderContent = (content) => {
    const lines = content.trim().split("\n");
    const elements = [];
    let inList = false;
    let listItems = [];

    const processBold = (text) => {
      const parts = text.split(/(\*\*[^*]+\*\*)/);
      return parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={i} className="font-semibold text-gray-900 dark:text-white">{part.slice(2, -2)}</strong>;
        }
        return part;
      });
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      if (trimmed.startsWith("## ")) {
        if (inList) {
          elements.push(<ul key={`list-${index}`} className="list-disc list-inside space-y-1 mb-4">{listItems}</ul>);
          listItems = [];
          inList = false;
        }
        elements.push(<h2 key={index} className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">{trimmed.slice(3)}</h2>);
      } else if (trimmed.startsWith("1. ") || trimmed.startsWith("2. ") || trimmed.startsWith("3. ")) {
        if (!inList) {
          inList = true;
        }
        listItems.push(<li key={index} className="text-gray-700 dark:text-gray-300">{processBold(trimmed.slice(3))}</li>);
      } else if (trimmed.startsWith("- ")) {
        if (inList) {
          elements.push(<ul key={`list-${index}`} className="list-disc list-inside space-y-1 mb-4">{listItems}</ul>);
          listItems = [];
          inList = false;
        }
        if (elements.length > 0 && elements[elements.length - 1]?.type === "ul") {
          const lastUl = elements.pop();
          elements.push(<ul key={index} className="list-disc list-inside space-y-1 mb-4">{lastUl.props.children}<li className="text-gray-700 dark:text-gray-300">{processBold(trimmed.slice(2))}</li></ul>);
        } else {
          elements.push(<ul key={index} className="list-disc list-inside space-y-1 mb-4"><li className="text-gray-700 dark:text-gray-300">{processBold(trimmed.slice(2))}</li></ul>);
        }
      } else if (trimmed === "") {
        if (inList) {
          elements.push(<ul key={`list-${index}`} className="list-disc list-inside space-y-1 mb-4">{listItems}</ul>);
          listItems = [];
          inList = false;
        }
      } else {
        if (inList) {
          elements.push(<ul key={`list-${index}`} className="list-disc list-inside space-y-1 mb-4">{listItems}</ul>);
          listItems = [];
          inList = false;
        }
        elements.push(<p key={index} className="text-gray-700 dark:text-gray-300 mb-4">{processBold(trimmed)}</p>);
      }
    });

    if (inList) {
      elements.push(<ul key="final-list" className="list-disc list-inside space-y-1 mb-4">{listItems}</ul>);
    }

    return elements;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 pt-24 pb-12 px-4 md:px-8">
      <article className="max-w-3xl mx-auto">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400 hover:underline mb-8"
        >
          ← Back to Blog
        </Link>

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <time className="text-sm text-purple-600 dark:text-purple-400 font-medium">
              {formatDate(post.date)}
            </time>
            <div className="flex gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {post.title}
          </h1>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {renderContent(post.content)}
        </div>
      </article>
    </div>
  );
};

export default BlogPostPage;