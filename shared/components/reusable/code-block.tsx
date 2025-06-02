"use client";
import { Copy } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";

type CodeBlockProps = {
  children: string;
  language?: string;
};

export const CodeBlock = ({ children, language = "tsx" }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="relative mt-6 mb-8 rounded-lg border-black">
      {copied ? (
        <div className="absolute right-4 top-4  text-gray px-2 py-1 text-sm rounded-md">
          Element copié
        </div>
      ) : (
        <div className="absolute right-4 top-4">
          <button
            onClick={copyToClipboard}
            className="hover:bg-gray-200 p-2 rounded-md transition-colors"
          >
            <Copy className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      )}
      <SyntaxHighlighter
        language={language}
        style={oneLight}
        wrapLongLines
        customStyle={{ border: "0.5px solid #80808078", borderRadius: "12px" }}
      >
        {children.trim()}
      </SyntaxHighlighter>
    </div>
  );
};
