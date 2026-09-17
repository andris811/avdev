import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [website, setWebsite] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const loadComments = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("blog_comments")
        .select("id, name, content, created_at")
        .eq("post_id", postId)
        .eq("approved", true)
        .order("created_at", { ascending: true });

      if (error) {
        console.error("Failed to load comments:", error);
      } else {
        setComments(data ?? []);
      }

      setLoading(false);
    };

    loadComments();
  }, [postId]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedComment = comment.trim();

    // Honeypot — real users never fill this field.
    if (website) return;

    if (trimmedName.length < 2 || trimmedName.length > 50) {
      setMessage("Name must be between 2 and 50 characters.");
      return;
    }

    if (trimmedComment.length < 3 || trimmedComment.length > 1500) {
      setMessage("Comment must be between 3 and 1500 characters.");
      return;
    }

    const cooldownKey = `blog-comment-time-${postId}`;
    const lastCommentTime = Number(localStorage.getItem(cooldownKey) || 0);
    const now = Date.now();

    // 30 second cooldown between comments on the same article.
    if (now - lastCommentTime < 30000) {
      setMessage("Please wait a moment before posting another comment.");
      return;
    }

    setSubmitting(true);
    setMessage("");

    const { data, error } = await supabase
      .from("blog_comments")
      .insert({
        post_id: postId,
        name: trimmedName,
        content: trimmedComment,
        approved: true,
      })
      .select("id, name, content, created_at")
      .single();

    if (error) {
      console.error("Failed to post comment:", error);
      setMessage("Something went wrong. Please try again.");
      setSubmitting(false);
      return;
    }

    setComments((currentComments) => [...currentComments, data]);

    localStorage.setItem(cooldownKey, String(now));

    setComment("");
    setMessage("Comment posted!");
    setSubmitting(false);
  };

  return (
    <section
      aria-labelledby="comments-title"
      className="mt-10 border-t border-gray-200 pt-8 dark:border-gray-700"
    >
      <h2
        id="comments-title"
        className="text-xl font-semibold text-gray-900 dark:text-white"
      >
        Comments {comments.length > 0 && `(${comments.length})`}
      </h2>

      <form onSubmit={handleSubmit} className="mt-6">
        {/* Honeypot — intentionally hidden from users */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor={`website-${postId}`}>Website</label>
          <input
            id={`website-${postId}`}
            type="text"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div>
          <label
            htmlFor={`comment-name-${postId}`}
            className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Name
          </label>

          <input
            id={`comment-name-${postId}`}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={50}
            required
            placeholder="Your name"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          />
        </div>

        <div className="mt-4">
          <label
            htmlFor={`comment-content-${postId}`}
            className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Comment
          </label>

          <textarea
            id={`comment-content-${postId}`}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            minLength={3}
            maxLength={1500}
            required
            rows={4}
            placeholder="Write a comment..."
            className="w-full resize-y rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          />

          <div className="mt-1 text-right text-xs text-gray-400">
            {comment.length}/1500
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-4">
          <button
            type="submit"
            disabled={submitting}
            className="rounded-lg bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-emerald-400 dark:text-gray-950 dark:hover:bg-emerald-300"
          >
            {submitting ? "Posting..." : "Post comment"}
          </button>

          {message && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {message}
            </p>
          )}
        </div>
      </form>

      {loading ? (
        <p className="mt-5 text-sm text-gray-500 dark:text-gray-400">
          Loading comments...
        </p>
      ) : comments.length === 0 ? (
        <p className="mt-5 text-sm text-gray-500 dark:text-gray-400">
          No comments yet. Be the first to comment.
        </p>
      ) : (
        <div className="mt-6 space-y-6">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="border-b border-gray-100 pb-6 last:border-b-0 dark:border-gray-800"
            >
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <p className="font-semibold text-gray-900 dark:text-white">
                  {comment.name}
                </p>

                <time
                  dateTime={comment.created_at}
                  className="text-xs text-gray-500 dark:text-gray-400"
                >
                  {formatDate(comment.created_at)}
                </time>
              </div>

              <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                {comment.content}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Comments;
