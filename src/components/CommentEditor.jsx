import { useEffect } from "react";
import { useEditor, EditorContent, useEditorState } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";

import {
  FaBold,
  FaItalic,
  FaLink,
  FaQuoteLeft,
  FaCode,
  FaListUl,
} from "react-icons/fa";

const CommentEditor = ({
  value,
  onChange,
  placeholder = "Write a comment...",
}) => {
  const editor = useEditor({
    extensions: [
      StarterKit,

      Link.configure({
        openOnClick: false,
        autolink: true,
        linkOnPaste: true,
      }),

      Placeholder.configure({
        placeholder,
      }),
    ],

    content: value,

    editorProps: {
      attributes: {
        class:
          "comment-editor min-h-[120px] w-full px-4 py-3 text-sm leading-relaxed text-gray-900 outline-none dark:text-white",
      },
    },

    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (!editor) return;

    if (value === "" && !editor.isEmpty) {
      editor.commands.clearContent();
    }
  }, [value, editor]);

  const editorState = useEditorState({
    editor,
    selector: ({ editor }) => ({
      isBold: editor?.isActive("bold") ?? false,
      isItalic: editor?.isActive("italic") ?? false,
      isLink: editor?.isActive("link") ?? false,
      isBlockquote: editor?.isActive("blockquote") ?? false,
      isCode: editor?.isActive("code") ?? false,
      isBulletList: editor?.isActive("bulletList") ?? false,
    }),
  });
  if (!editor) return null;

  const buttonClass = (active = false) =>
    `flex h-8 w-8 items-center justify-center rounded-md text-sm transition-colors ${
      active
        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
        : "text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
    }`;

  const addLink = () => {
    if (!editor) return;

    const { from, to } = editor.state.selection;
    const previousUrl = editor.getAttributes("link").href || "";

    const url = window.prompt("Enter URL:", previousUrl);

    if (url === null) {
      editor.chain().focus().setTextSelection({ from, to }).run();
      return;
    }

    if (url.trim() === "") {
      editor
        .chain()
        .focus()
        .setTextSelection({ from, to })
        .extendMarkRange("link")
        .unsetLink()
        .run();

      return;
    }

    let finalUrl = url.trim();

    if (!finalUrl.startsWith("http://") && !finalUrl.startsWith("https://")) {
      finalUrl = `https://${finalUrl}`;
    }

    editor
      .chain()
      .focus()
      .setTextSelection({ from, to })
      .setLink({ href: finalUrl })
      .run();
  };

  return (
    <div className="overflow-hidden rounded-lg border border-gray-300 bg-white transition focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-500/20 dark:border-gray-600 dark:bg-gray-800">
      <div className="flex flex-wrap items-center gap-1 border-b border-gray-200 px-2 py-1.5 dark:border-gray-700">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          title="Bold"
          aria-label="Bold"
          className={buttonClass(editorState.isBold)}
        >
          <FaBold />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          title="Italic"
          aria-label="Italic"
          className={buttonClass(editorState.isItalic)}
        >
          <FaItalic />
        </button>

        <button
          type="button"
          onClick={addLink}
          title="Link"
          aria-label="Add link"
          className={buttonClass(editorState.isLink)}
        >
          <FaLink />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          title="Quote"
          aria-label="Quote"
          className={buttonClass(editorState.isBlockquote)}
        >
          <FaQuoteLeft />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleCode().run()}
          title="Inline code"
          aria-label="Inline code"
          className={buttonClass(editorState.isCode)}
        >
          <FaCode />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          title="Bullet list"
          aria-label="Bullet list"
          className={buttonClass(editorState.isBulletList)}
        >
          <FaListUl />
        </button>
      </div>

      <EditorContent editor={editor} />
    </div>
  );
};

export default CommentEditor;
