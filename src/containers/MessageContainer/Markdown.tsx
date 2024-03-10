import ReactMarkdown from 'react-markdown';

interface MarkdownProps {
  content: string;
}

const Markdown = ({ content }: MarkdownProps) => {
  return <ReactMarkdown className="chat-markdown">{content}</ReactMarkdown>;
};

export default Markdown;
