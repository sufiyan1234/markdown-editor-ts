import React, { useState } from "react";
import useMarkdownConverter from "../hooks/useMarkdownConverter";
import Spinner from "./Spinner";
import ErrorBoundary from "./ErrorBoundary";
import "../styles.css";

const MarkdownEditor: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>("");
  const { html, loading, error, markdownError } =
    useMarkdownConverter(markdown);

  return (
    <div className="editor-container">
      {/* Apply error class dynamically if Markdown is incorrect */}
      <textarea
        className="editor"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Type Markdown here..."
      />

      {/* Show error message below input */}
      {markdownError && <p className="markdown-error">{markdownError}</p>}

      <ErrorBoundary>
        <div className="preview">
          {loading ? (
            <Spinner />
          ) : error ? (
            <p className="error">{error}</p>
          ) : (
            <div dangerouslySetInnerHTML={{ __html: html }} />
          )}
        </div>
      </ErrorBoundary>
    </div>
  );
};

export default MarkdownEditor;
