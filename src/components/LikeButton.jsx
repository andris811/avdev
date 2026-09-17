import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

const LikeButton = ({ postId }) => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(true);

  const storageKey = `blog-liked-${postId}`;

  useEffect(() => {
    const loadLikes = async () => {
      setLiked(localStorage.getItem(storageKey) === "true");

      const { data, error } = await supabase
        .from("blog_post_likes")
        .select("likes")
        .eq("post_id", postId)
        .maybeSingle();

      if (error) {
        console.error("Failed to load likes:", error);
      } else {
        setLikes(data?.likes ?? 0);
      }

      setLoading(false);
    };

    loadLikes();
  }, [postId, storageKey]);

  const handleLike = async () => {
    if (liked || loading) return;

    setLoading(true);

    const { data, error } = await supabase.rpc("increment_blog_like", {
      target_post_id: postId,
    });

    if (error) {
      console.error("Failed to like post:", error);
      setLoading(false);
      return;
    }

    setLikes(data);
    setLiked(true);
    localStorage.setItem(storageKey, "true");

    setLoading(false);
  };

  return (
    <button
      type="button"
      onClick={handleLike}
      disabled={liked || loading}
      aria-label={liked ? "You liked this post" : "Like this post"}
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
        liked
          ? "border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-300"
          : "border-gray-300 text-gray-600 hover:border-emerald-500 hover:text-emerald-600 dark:border-gray-600 dark:text-gray-300 dark:hover:border-emerald-400 dark:hover:text-emerald-300"
      }`}
    >
      <span aria-hidden="true">{liked ? "♥" : "♡"}</span>

      <span>
        {loading ? "..." : likes} {likes === 1 ? "like" : "likes"}
      </span>
    </button>
  );
};

export default LikeButton;