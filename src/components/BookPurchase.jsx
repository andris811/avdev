import { useEffect } from 'react'
import { book } from '../data/book'

const BookPurchase = () => {
  useEffect(() => {
    // Keep one copy across article visits; Payhip owns its checkout handlers.
    if (document.querySelector('script[src="https://payhip.com/payhip.js"]')) return
    const script = document.createElement('script')
    script.src = 'https://payhip.com/payhip.js'
    script.async = true
    script.onerror = () => script.remove()
    document.head.appendChild(script)
  }, [])

  return (
    <section aria-labelledby="get-the-book" className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-700">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
        <img src={book.cover} alt={`${book.title} by Andras Varga`} width="120" height="180" loading="lazy" className="w-28 self-start rounded-sm shadow-md" />
        <div>
          <h2 id="get-the-book" className="text-2xl font-semibold text-gray-900 dark:text-white">Read a sample or get the book</h2>
          <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-300">Explore the free sample on Payhip. The full book includes 18 chapters and practical AI prompts, available in PDF and EPUB.</p>
          <p className="mt-4 text-sm text-emerald-800 dark:text-emerald-200">
            Launch offer: <strong>$10 USD off</strong> with code{' '}
            <code className="rounded bg-emerald-100 px-2 py-1 font-semibold dark:bg-emerald-900">LAUNCH10</code> at checkout on Payhip.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-4">
          <a href={book.payhipUrl} target="_blank" rel="noopener noreferrer" data-theme="none" data-product="6gKJm" className="payhip-buy-button inline-flex rounded-lg bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600 dark:bg-emerald-400 dark:text-gray-950 dark:hover:bg-emerald-300">
            Buy on Payhip
          </a>
          <a href="https://payhip.com/preview/6gKJm" target="_blank" rel="noopener noreferrer" className="rounded-sm py-2 text-sm font-semibold text-emerald-700 underline underline-offset-4 hover:text-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600 dark:text-emerald-300 dark:hover:text-emerald-200">
            Read a sample on Payhip ↗
          </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookPurchase
