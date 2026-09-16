import { Link } from "react-router-dom";
import { book } from "../data/book";

const BookCard = () => (
  <aside
    aria-labelledby="featured-book-title"
    className="mb-12 overflow-hidden rounded-2xl border border-emerald-200 bg-emerald-50/50 p-6 dark:border-emerald-900 dark:bg-gray-800/60 sm:p-8"
  >
    <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
      <Link
        to={book.articlePath}
        className="shrink-0 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600"
      >
        <img
          src={book.cover}
          alt={`${book.title} book cover`}
          width="160"
          height="240"
          className="w-32 rounded-sm shadow-lg sm:w-40"
        />
      </Link>
      <div className="text-center sm:text-left">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-emerald-700 dark:text-emerald-300">
          A book by Andras Varga
        </p>
        <h2
          id="featured-book-title"
          className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl"
        >
          {book.title}
        </h2>
        <p className="mt-2 font-medium text-gray-700 dark:text-gray-200">
          {book.subtitle}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
          {book.description}
        </p>
        <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
          Available as PDF + EPUB on Payhip and Kindle on Amazon
        </p>
        <p className="mt-4 text-sm text-emerald-800 dark:text-emerald-200">
          Launch offer: <strong>$10 USD off</strong> with code{" "}
          <code className="rounded bg-emerald-100 px-2 py-1 font-semibold dark:bg-emerald-900">
            LAUNCH10
          </code>{" "}
          at checkout on Payhip.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3 sm:justify-start">
          <a
            href={book.payhipUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600 dark:bg-emerald-400 dark:text-gray-950 dark:hover:bg-emerald-300"
          >
            Buy on Payhip →
          </a>

          <a
            href={book.amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-800 transition-colors hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
          >
            Buy on Amazon →
          </a>
        </div>
        <div className="mt-3">
          <Link
            to={book.articlePath}
            className="inline-block rounded-sm py-1 text-sm text-gray-600 underline underline-offset-4 transition-colors hover:text-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600 dark:text-gray-400 dark:hover:text-emerald-300"
          >
            Why I wrote it →
          </Link>
        </div>
      </div>
    </div>
  </aside>
);

export default BookCard;
