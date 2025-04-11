import React from "react";
import { Copy } from "lucide-react";

interface CodeProps {
  children: string;
  language?: string;
}

export function Code({ children, language = "typescript" }: CodeProps) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(children);
  };

  return (
    <div className="relative mt-6 mb-8">
      <div className="absolute right-4 top-4">
        <button
          onClick={copyToClipboard}
          className="hover:bg-gray-800 p-2 rounded-md transition-colors"
        >
          <Copy className="w-4 h-4 text-gray-400" />
        </button>
      </div>
      <pre className="overflow-x-auto rounded-lg bg-gray-900 py-4 px-6 text-sm text-gray-100">
        <code className={`language-${language}`}>{children}</code>
      </pre>
    </div>
  );
}
