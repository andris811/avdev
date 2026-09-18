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
  value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

module.exports = async (req, res) => {
  const id = Array.isArray(req.query.id) ? req.query.id[0] : req.query.id;

  const post = posts[id] || DEFAULT_META;

  const canonicalUrl = id
    ? `https://andrasvarga.dev/blog/${encodeURIComponent(id)}`
    : "https://andrasvarga.dev/blog";

  const title = escapeHtml(post.title);
  const description = escapeHtml(post.description);
  const image = escapeHtml(post.image);
  const url = escapeHtml(canonicalUrl);

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <title>${title}</title>
  <meta name="description" content="${description}" />

  <meta property="og:type" content="article" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:image" content="${image}" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="${image}" />

  <meta http-equiv="refresh" content="0;url=${url}" />
</head>

<body>
  <p>
    Opening
    <a href="${url}">${title}</a>...
  </p>
</body>
</html>
  `;

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=86400",
  );

  return res.status(200).send(html);
};
