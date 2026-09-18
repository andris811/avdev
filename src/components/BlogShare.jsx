import { FaLinkedin, FaFacebook, FaXTwitter, FaLink } from "react-icons/fa6";
import { useState } from "react";

const BlogShare = ({ title }) => {
  const [copied, setCopied] = useState(false);

  const url = window.location.href;
  const postId = window.location.pathname.split("/blog/")[1];

  const shareUrl = postId
    ? `${window.location.origin}/api/share?id=${encodeURIComponent(postId)}`
    : url;

  const canNativeShare = typeof navigator !== "undefined" && !!navigator.share;

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    x: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodeURIComponent(
      url,
    )}`,

    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,

    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy link:", error);
    }
  };

  const nativeShare = async () => {
    if (!navigator.share) return;

    try {
      await navigator.share({
        title,
        text: `Check out "${title}" by Andras Varga`,
        url,
      });
    } catch (error) {
      // Ignore cancellation
      if (error.name !== "AbortError") {
        console.error("Sharing failed:", error);
      }
    }
  };

  return (
    <div className="mt-10 border-t border-gray-200 pt-6 dark:border-gray-700">
      <p className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
        Share this post
      </p>

      <div className="flex flex-wrap gap-3">
        {canNativeShare && (
          <button
            onClick={nativeShare}
            aria-label="Share this post"
            className="flex h-10 items-center justify-center gap-2 rounded-full border border-gray-300 px-4 text-sm font-medium transition hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800"
          >
            Share ↗
          </button>
        )}
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 transition hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800"
        >
          <FaLinkedin />
        </a>

        <a
          href={shareLinks.x}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on X"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 transition hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800"
        >
          <FaXTwitter />
        </a>

        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Facebook"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 transition hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800"
        >
          <FaFacebook />
        </a>

        <button
          onClick={copyLink}
          aria-label="Copy link"
          className="flex h-10 items-center justify-center gap-2 rounded-full border border-gray-300 px-4 text-sm transition hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800"
        >
          <FaLink />
          {copied ? "Copied!" : "Copy link"}
        </button>
      </div>
    </div>
  );
};

export default BlogShare;
