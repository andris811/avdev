import ReactMarkdown from 'react-markdown'

const BlogContent = ({ content }) => (
  <ReactMarkdown
    components={{
      h2: ({ children }) => (
        <h2 className='text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white'>{children}</h2>
      ),
      p: ({ children }) => (
        <p className='text-gray-700 dark:text-gray-300 mb-4 leading-relaxed'>{children}</p>
      ),
      strong: ({ children }) => (
        <strong className='font-semibold text-gray-900 dark:text-white'>{children}</strong>
      ),
      ul: ({ children }) => (
        <ul className='list-disc pl-6 space-y-2 mb-4 text-gray-700 dark:text-gray-300'>{children}</ul>
      ),
      ol: ({ children }) => (
        <ol className='list-decimal pl-6 space-y-2 mb-4 text-gray-700 dark:text-gray-300'>{children}</ol>
      ),
      a: ({ href, children }) => (
        <a href={href} className='text-emerald-700 dark:text-emerald-300 underline underline-offset-4 hover:text-emerald-600 dark:hover:text-emerald-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4'>{children}</a>
      ),
      img: ({ src, alt, title }) => (
        <img
          src={src?.startsWith('/') ? `${process.env.PUBLIC_URL}${src}` : src}
          alt={alt || ''}
          title={title}
          loading='lazy'
          decoding='async'
          className='block w-full h-auto mx-auto my-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm'
        />
      ),
    }}
  >
    {content}
  </ReactMarkdown>
)

export default BlogContent
