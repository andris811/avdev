const context = require.context(".", false, /\.js$/)

const blogPosts = context.keys()
  .filter((key) => key !== "./index.js")
  .map((key) => context(key).default)

export const getPostById = (id) => blogPosts.find((post) => post.id === id)

export const getAllPosts = () => blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date))