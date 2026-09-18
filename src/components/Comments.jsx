import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
// import CommentToolbar from "./CommentToolbar";
import CommentEditor from "./CommentEditor";
import DOMPurify from "dompurify";

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [website, setWebsite] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState("");
  const [replySubmitting, setReplySubmitting] = useState(false);
  const [replyMessage, setReplyMessage] = useState("");
  const [replyName, setReplyName] = useState("");

  useEffect(() => {
    const loadComments = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("blog_comments")
        .select("id, name, content, created_at, parent_id")
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

  const getPlainText = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  const commentTextLength = getPlainText(comment).length;
  const replyTextLength = getPlainText(replyText).length;

  const buildCommentTree = (comments) => {
    const commentMap = {};
    const rootComments = [];

    comments.forEach((comment) => {
      commentMap[comment.id] = {
        ...comment,
        replies: [],
      };
    });

    comments.forEach((comment) => {
      if (comment.parent_id && commentMap[comment.parent_id]) {
        commentMap[comment.parent_id].replies.push(commentMap[comment.id]);
      } else {
        rootComments.push(commentMap[comment.id]);
      }
    });

    return rootComments;
  };

  const commentTree = buildCommentTree(comments);

  const handleReplySubmit = async (e, parentId) => {
    e.preventDefault();

    const trimmedName = replyName.trim();
    const trimmedReply = replyText.trim();
    const plainReply = getPlainText(trimmedReply).trim();

    if (website) return;

    if (trimmedName.length < 2 || trimmedName.length > 50) {
      setReplyMessage("Name must be between 2 and 50 characters.");
      return;
    }

    if (plainReply.length < 3 || plainReply.length > 1500) {
      setReplyMessage("Reply must be between 3 and 1500 characters.");
      return;
    }

    const cooldownKey = `blog-comment-time-${postId}`;
    const lastCommentTime = Number(localStorage.getItem(cooldownKey) || 0);
    const now = Date.now();

    if (now - lastCommentTime < 30000) {
      setReplyMessage("Please wait a moment before posting another comment.");
      return;
    }

    setReplySubmitting(true);
    setReplyMessage("");

    const { data, error } = await supabase
      .from("blog_comments")
      .insert({
        post_id: postId,
        parent_id: parentId,
        name: trimmedName,
        content: trimmedReply,
        approved: true,
      })
      .select("id, name, content, created_at, parent_id")
      .single();

    if (error) {
      console.error("Failed to post reply:", error);
      setReplyMessage("Something went wrong. Please try again.");
      setReplySubmitting(false);
      return;
    }

    setComments((currentComments) => [...currentComments, data]);

    localStorage.setItem(cooldownKey, String(now));

    setReplyText("");
    setReplyingTo(null);
    setReplyMessage("");
    setReplySubmitting(false);
  };

  const renderCommentContent = (content) => {
    if (!content) return null;

    const trimmedContent = content.trim();

    // TipTap-generated comments contain HTML elements.
    // Older comments are Markdown, so we continue rendering those
    // through ReactMarkdown.
    const isHtml = /<\/?[a-z][\s\S]*>/i.test(trimmedContent);

    if (isHtml) {
      const sanitizedHtml = DOMPurify.sanitize(trimmedContent, {
        ALLOWED_TAGS: [
          "p",
          "strong",
          "em",
          "a",
          "blockquote",
          "ul",
          "ol",
          "li",
          "code",
          "br",
        ],
        ALLOWED_ATTR: ["href", "target", "rel"],
      });

      return (
        <div
          className="published-comment"
          dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
        />
      );
    }

    return (
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,

          strong: ({ children }) => (
            <strong className="font-semibold text-gray-900 dark:text-white">
              {children}
            </strong>
          ),

          em: ({ children }) => <em>{children}</em>,

          blockquote: ({ children }) => (
            <blockquote className="my-2 border-l-2 border-gray-300 pl-3 text-gray-500 dark:border-gray-600 dark:text-gray-400">
              {children}
            </blockquote>
          ),

          ul: ({ children }) => (
            <ul className="my-2 list-disc space-y-1 pl-5">{children}</ul>
          ),

          ol: ({ children }) => (
            <ol className="my-2 list-decimal space-y-1 pl-5">{children}</ol>
          ),

          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 underline underline-offset-2 hover:text-emerald-700 dark:text-emerald-300"
            >
              {children}
            </a>
          ),

          code: ({ children }) => (
            <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-xs text-gray-800 dark:bg-gray-800 dark:text-gray-200">
              {children}
            </code>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    );
  };

const renderComment = (comment, isReply = false) => {
  const getAllReplies = (parentComment) => {
    const replies = [];

    parentComment.replies?.forEach((reply) => {
      replies.push({
        ...reply,
        replyingToName: parentComment.name,
      });

      replies.push(...getAllReplies(reply));
    });

    return replies;
  };

  const conversationReplies = !isReply ? getAllReplies(comment) : [];

  const renderSingleComment = (
    currentComment,
    reply = false,
    replyingToName = null,
  ) => (
    <div
      key={currentComment.id}
      className={
        reply
          ? "border-l-2 border-gray-200 py-3 pl-4 dark:border-gray-700 sm:pl-5"
          : "pb-3"
      }
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <p className="font-semibold text-gray-900 dark:text-white">
          {currentComment.name}
        </p>

        <time
          dateTime={currentComment.created_at}
          className="text-xs text-gray-500 dark:text-gray-400"
        >
          {formatDate(currentComment.created_at)}
        </time>
      </div>

      <div className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
        {reply && replyingToName && (
          <span className="mr-1 font-medium text-emerald-600 dark:text-emerald-300">
            @{replyingToName}
          </span>
        )}

        {renderCommentContent(currentComment.content)}
      </div>

      <button
        type="button"
        onClick={() => {
          const isClosing = replyingTo === currentComment.id;

          setReplyingTo(isClosing ? null : currentComment.id);
          setReplyText("");
          setReplyMessage("");

          if (!isClosing && name.trim()) {
            setReplyName(name.trim());
          }
        }}
        className="mt-2 text-xs font-medium text-gray-500 transition-colors hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-300"
      >
        {replyingTo === currentComment.id ? "Cancel" : "Reply"}
      </button>

      {replyingTo === currentComment.id && (
        <form
          onSubmit={(e) => handleReplySubmit(e, currentComment.id)}
          className="mt-3"
        >
          <input
            type="text"
            value={replyName}
            onChange={(e) => setReplyName(e.target.value)}
            maxLength={50}
            required
            placeholder="Your name"
            className="mb-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          />

          <CommentEditor
            value={replyText}
            onChange={setReplyText}
            placeholder={`Reply to ${currentComment.name}...`}
          />

          <div className="mt-1 flex items-center justify-between gap-4">
            <span
              className={`text-xs ${
                replyTextLength > 1500 ? "text-red-500" : "text-gray-400"
              }`}
            >
              {replyTextLength}/1500
            </span>

            <button
              type="submit"
              disabled={replySubmitting}
              className="rounded-lg bg-emerald-700 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-emerald-400 dark:text-gray-950 dark:hover:bg-emerald-300"
            >
              {replySubmitting ? "Posting..." : "Post reply"}
            </button>
          </div>

          {replyMessage && (
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              {replyMessage}
            </p>
          )}
        </form>
      )}
    </div>
  );

  return (
    <div key={comment.id}>
      {renderSingleComment(comment)}

      {conversationReplies.length > 0 && (
        <div className="ml-3 sm:ml-5">
          {conversationReplies.map((reply) =>
            renderSingleComment(
              reply,
              true,
              reply.replyingToName,
            ),
          )}
        </div>
      )}
    </div>
  );
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedComment = comment.trim();
    const plainComment = getPlainText(trimmedComment).trim();

    // Honeypot — real users never fill this field.
    if (website) return;

    if (trimmedName.length < 2 || trimmedName.length > 50) {
      setMessage("Name must be between 2 and 50 characters.");
      return;
    }

    if (plainComment.length < 3 || plainComment.length > 1500) {
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
      .select("id, name, content, created_at, parent_id")
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

          <CommentEditor
            value={comment}
            onChange={setComment}
            placeholder="Write a comment..."
          />

          <div
            className={`mt-1 text-right text-xs ${
              commentTextLength > 1500 ? "text-red-500" : "text-gray-400"
            }`}
          >
            {commentTextLength}/1500
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
          {commentTree.map((comment) => (
            <div
              key={comment.id}
              className="border-b border-gray-100 pb-1 last:border-b-0 dark:border-gray-800"
            >
              {renderComment(comment)}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Comments;
