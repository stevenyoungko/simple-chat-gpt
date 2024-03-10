import { useEffect } from "react";
import ReactMarkdown from "react-markdown";

interface MarkdownProps {
  content: string;
}

const Markdown = ({ content }: MarkdownProps) => {
  useEffect(() => {
    console.log("content", content);
  }, [content]);

  return <ReactMarkdown>{content}</ReactMarkdown>;
};

export default Markdown;
