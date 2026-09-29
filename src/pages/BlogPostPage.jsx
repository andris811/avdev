import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import BlogContent from '../components/BlogContent'
import { getPostById } from "../data/blog";
import BookPurchase from "../components/BookPurchase";
import BlogShare from "../components/BlogShare";
import LikeButton from "../components/LikeButton";
import Comments from "../components/Comments";

const BlogPostPage = () => {
  const { id } = useParams();
  const post = getPostById(id);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (post) {
      document.title = `${post.title} | AVDev`;
    }

    return () => {
      document.title = "AV Dev";
    };
  }, [id, post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 pt-24 pb-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Link
            to="/blog"
            className="text-emerald-600 dark:text-emerald-300 hover:underline"
          >
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


  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 pt-24 pb-12 px-4 md:px-8">
      <article className="max-w-3xl mx-auto">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-300 hover:underline mb-8"
        >
          ← Back to Blog
        </Link>

        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <time className="text-sm text-emerald-600 dark:text-emerald-300 font-medium">
              {formatDate(post.date)}
            </time>
            <div className="flex flex-wrap gap-2">
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
        <img
          src={post.socialImage || "/images/blog/default-social.jpg"}
          alt={`${post.title} - AVDev Blog`}
          className="w-full aspect-[1200/630] object-cover rounded-xl mb-8 shadow-sm"
        />
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <BlogContent content={post.content} />
        </div>

        <BlogShare title={post.title} />

        <div className="mt-6">
          <LikeButton postId={post.id} />
        </div>

        {post.featuredBook && <BookPurchase />}

        <Comments postId={post.id} />
      </article>
    </div>
  );
};

export default BlogPostPage;
