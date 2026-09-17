import {
  FaBold,
  FaItalic,
  FaLink,
  FaQuoteLeft,
  FaCode,
  FaListUl,
} from "react-icons/fa";

const CommentToolbar = ({ value, setValue, textareaId }) => {
  const applyFormat = (before, after = "", placeholder = "text") => {
    const textarea = document.getElementById(textareaId);

    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    const selectedText = value.substring(start, end);
    const text = selectedText || placeholder;

    const newValue =
      value.substring(0, start) +
      before +
      text +
      after +
      value.substring(end);

    setValue(newValue);

    requestAnimationFrame(() => {
      textarea.focus();

      const selectionStart = start + before.length;
      const selectionEnd = selectionStart + text.length;

      textarea.setSelectionRange(selectionStart, selectionEnd);
    });
  };

  const buttonClass =
    "flex h-8 w-8 items-center justify-center rounded-md text-sm text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white";

  return (
    <div className="mb-2 flex flex-wrap items-center gap-1">
      <button
        type="button"
        onClick={() => applyFormat("**", "**", "bold text")}
        title="Bold"
        aria-label="Bold"
        className={buttonClass}
      >
        <FaBold />
      </button>

      <button
        type="button"
        onClick={() => applyFormat("*", "*", "italic text")}
        title="Italic"
        aria-label="Italic"
        className={buttonClass}
      >
        <FaItalic />
      </button>

      <button
        type="button"
        onClick={() => applyFormat("[", "](https://)", "link text")}
        title="Link"
        aria-label="Add link"
        className={buttonClass}
      >
        <FaLink />
      </button>

      <button
        type="button"
        onClick={() => applyFormat("> ", "", "quote")}
        title="Quote"
        aria-label="Quote"
        className={buttonClass}
      >
        <FaQuoteLeft />
      </button>

      <button
        type="button"
        onClick={() => applyFormat("`", "`", "code")}
        title="Inline code"
        aria-label="Inline code"
        className={buttonClass}
      >
        <FaCode />
      </button>

      <button
        type="button"
        onClick={() => applyFormat("- ", "", "list item")}
        title="Bullet list"
        aria-label="Bullet list"
        className={buttonClass}
      >
        <FaListUl />
      </button>
    </div>
  );
};

export default CommentToolbar;