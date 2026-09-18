const posts = {
  "idea-to-app-store": {
    title: "Why I Wrote Idea → App Store",
    description:
      "AI helped me build faster. Shipping still meant learning to cut scope, review code, prepare for App Store review, and keep improving after launch. Those lessons became a book.",
    image: "https://andrasvarga.dev/images/blog/default-social.jpg",
  },
};

const DEFAULT_META = {
  title: "AVDev Blog",
  description:
    "Articles about app development, indie development, AI-assisted coding, and shipping software.",
  image: "https://andrasvarga.dev/images/blog/default-social.jpg",
};

const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

module.exports = (req, res) => {
  const id = Array.isArray(req.query.id)
    ? req.query.id[0]
    : req.query.id;

  const post = posts[id] || DEFAULT_META;

  const canonicalUrl = id
    ? `https://andrasvarga.dev/blog/${encodeURIComponent(id)}`
    : "https://andrasvarga.dev/blog";

  const title = escapeHtml(post.title);
  const description = escapeHtml(post.description);
  const image = escapeHtml(post.image);
  const url = escapeHtml(canonicalUrl);

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=86400"
  );

  return res.status(200).send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />

  <title>${title}</title>
  <meta name="description" content="${description}" />

  <link rel="canonical" href="${url}" />

  <meta property="og:type" content="article" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:image" content="${image}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="${image}" />
</head>

<body>
  <p>
    <a href="${url}">Read ${title}</a>
  </p>
</body>
</html>
  `);
};