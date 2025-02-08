import { useState, useEffect } from "react";
import axios from "axios";
import DOMPurify from "dompurify";

const API_URL = "http://localhost:5000/api/convert";

interface MarkdownResponse {
  html: string;
}

const validateMarkdown = (markdown: string): string | null => {
  if (!markdown.trim()) return null; // No error if empty

  if ((markdown.match(/\*\*/g) || []).length % 2 !== 0)
    return "Unmatched '**' found!";
  if ((markdown.match(/_/g) || []).length % 2 !== 0)
    return "Unmatched '_' found!";
  if ((markdown.match(/#/g) || []).length > 6)
    return "Too many '#' (Markdown supports up to H6)!";

  return null;
};

const useMarkdownConverter = (markdown: string) => {
  const [html, setHtml] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [markdownError, setMarkdownError] = useState<string | null>(null);

  useEffect(() => {
    // Validate Markdown and set errors
    const errorMessage = validateMarkdown(markdown);
    setMarkdownError(errorMessage);

    if (errorMessage) return; // Skip API call if there’s a syntax error

    const convertMarkdown = async () => {
      if (!markdown.trim()) {
        setHtml("");
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await axios.post<MarkdownResponse>(API_URL, {
          markdown,
        });
        setHtml(DOMPurify.sanitize(response.data.html));
      } catch (err) {
        setError("Failed to convert Markdown. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    const timeoutId = setTimeout(convertMarkdown, 300);
    return () => clearTimeout(timeoutId);
  }, [markdown]);

  return { html, loading, error, markdownError };
};

export default useMarkdownConverter;
