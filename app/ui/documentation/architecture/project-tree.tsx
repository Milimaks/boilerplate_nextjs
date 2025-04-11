"use client";
import {
  ChevronRight,
  Code,
  Database,
  FileText,
  Folder,
  Layers,
  Layout,
  Settings,
  Terminal,
} from "lucide-react";
import { useEffect, useState } from "react";

type TreeNode = {
  name: string;
  description?: string;
  type: "folder" | "file";
  children?: TreeNode[];
  content?: string;
};

const sampleProject: TreeNode = {
  name: "clean-architecture-project",
  type: "folder",
  children: [
    {
      name: "app",
      description: "Next.js app directory - Frameworks & Drivers ",
      type: "folder",
      children: [
        {
          name: "auth",
          type: "folder",
          children: [
            {
              name: "sign-in",
              type: "folder",
              children: [{ name: "page.tsx", type: "file" }],
            },
            {
              name: "sign-up",
              type: "folder",
              children: [{ name: "page.tsx", type: "file" }],
            },
            { name: "action.ts", type: "file" },
          ],
        },
        { name: "_components", type: "folder", children: [] },
      ],
    },
    { name: "assets", type: "folder", children: [] },
    {
      name: "di",
      description: "Dependency Injection",
      type: "folder",
      children: [{ name: "modules", type: "folder", children: [] }],
    },
    {
      name: "drizzle",
      type: "folder",
      children: [{ name: "migrations", type: "folder", children: [] }],
    },
    { name: "public", type: "folder", children: [] },
    {
      name: "src",
      type: "folder",
      children: [
        {
          name: "application",
          type: "folder",
          children: [
            {
              name: "repositories",
              type: "folder",
              children: [
                {
                  name: "todos.repository.interface.ts",
                  type: "file",
                  content: "todos.repository.interface.ts",
                },
                {
                  name: "users.repository.interface.ts",
                  type: "file",
                  content: "users.repository.interface.ts",
                },
              ],
            },
            { name: "services", type: "folder", children: [] },
            { name: "use-cases", type: "folder", children: [] },
          ],
        },
        {
          name: "entities",
          type: "folder",
          children: [
            { name: "errors", type: "folder", children: [] },
            { name: "models", type: "folder", children: [] },
          ],
        },
        {
          name: "infrastructure",
          type: "folder",
          children: [
            { name: "repositories", type: "folder", children: [] },
            { name: "services", type: "folder", children: [] },
          ],
        },
        {
          name: "interface-adapters",
          type: "folder",
          children: [
            {
              name: "controllers",
              type: "folder",
              children: [
                { name: "auth", type: "folder", children: [] },
                { name: "todos", type: "folder", children: [] },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "tests",
      type: "folder",
      children: [
        {
          name: "unit",
          type: "folder",
          children: [
            {
              name: "application",
              type: "folder",
              children: [{ name: "use-cases", type: "folder", children: [] }],
            },
            {
              name: "interface-adapters",
              type: "folder",
              children: [{ name: "controllers", type: "folder", children: [] }],
            },
          ],
        },
      ],
    },
    { name: "package.json", type: "file" },
    { name: "tsconfig.json", type: "file" },
  ],
};

const getFileIcon = (fileName: string) => {
  if (fileName.endsWith(".ts") || fileName.endsWith(".tsx"))
    return <Code className="w-4 h-4 text-blue-500" />;
  if (fileName.includes("Repository"))
    return <Database className="w-4 h-4 text-purple-500" />;
  if (fileName.includes(".json"))
    return <Settings className="w-4 h-4 text-yellow-500" />;
  if (fileName.includes("component") || fileName.includes("page"))
    return <Layout className="w-4 h-4 text-green-500" />;
  return <FileText className="w-4 h-4 text-gray-500" />;
};

const TreeNode: React.FC<{
  fileContents: Record<string, string>;
  node: TreeNode;
  level: number;
  onFileSelect: (content: string, fileName: string) => void;
  expandedLevel: number;
}> = ({ node, level, onFileSelect, fileContents, expandedLevel }) => {
  const [isOpen, setIsOpen] = useState(true);
  const paddingLeft = `${level * 1.5}rem`;

  useEffect(() => {
    setIsOpen(expandedLevel === Infinity || level <= expandedLevel);
  }, [expandedLevel, level]);

  if (node.type === "file") {
    const isViewable = node.name.endsWith(".ts") || node.name.endsWith(".tsx");

    return (
      <div
        className={`flex items-center py-1.5 transition-colors duration-200 ease-in-out ${
          isViewable ? "hover:bg-gray-100 cursor-pointer" : ""
        }`}
        style={{ paddingLeft }}
        onClick={() => {
          if (isViewable && node.content) {
            const fileContent = fileContents[node.content];
            onFileSelect(fileContent, node.name);
          }
        }}
      >
        <div className="transform transition-transform duration-200 ease-in-out hover:scale-110">
          {getFileIcon(node.name)}
        </div>
        <span className="ml-2 text-sm text-gray-700 transition-colors duration-200 ease-in-out hover:text-gray-900">
          {node.name}
        </span>
      </div>
    );
  }

  return (
    <div>
      <div
        className="flex items-center py-1.5 cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in-out"
        style={{ paddingLeft }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`transform transition-transform duration-200 ease-in-out ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
        >
          <ChevronRight className="w-4 h-4 text-gray-500" />
        </div>
        <div className="transform transition-transform duration-200 ease-in-out hover:scale-110">
          <Folder className="w-4 h-4 text-yellow-500 ml-1" />
        </div>
        <span className="ml-2 text-sm font-medium text-gray-700 transition-colors duration-200 ease-in-out hover:text-gray-900">
          {node.name}
        </span>
      </div>
      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {node.children && (
          <div>
            {node.children.map((child, index) => (
              <TreeNode
                key={index}
                node={child}
                level={level + 1}
                onFileSelect={onFileSelect}
                fileContents={fileContents}
                expandedLevel={expandedLevel}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const ProjectTree: React.FC<{ fileContents: Record<string, string> }> = ({
  fileContents,
}) => {
  const [selectedFileContent, setSelectedFileContent] = useState<string>("");
  const [selectedFileName, setSelectedFileName] = useState<string>("");
  const [expandedLevel, setExpandedLevel] = useState<number>(1);

  const handleFileSelect = (content: string, fileName: string) => {
    setSelectedFileContent(content);
    setSelectedFileName(fileName);
  };

  const handleExpandLevel = (level: number | "all") => {
    setExpandedLevel(level === "all" ? Infinity : level);
  };

  return (
    <div className="flex gap-6">
      <div className="w-1/2 p-6 bg-white rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:shadow-xl">
        <h2 className="text-xl font-bold mb-4 flex items-center text-gray-800">
          <Terminal className="w-5 h-5 mr-2 transform transition-transform duration-200 ease-in-out hover:rotate-12" />
          <span className="transition-colors duration-200 ease-in-out hover:text-gray-900">
            Project Structure - Clean Architecture
          </span>
        </h2>
        <div className="flex gap-2 mb-4 overflow-x-auto">
          {[1, 2, 3].map((level) => (
            <button
              key={level}
              onClick={() => handleExpandLevel(level)}
              className={`px-3 py-1.5 rounded-md transition-all duration-200 ease-in-out flex items-center gap-2 ${
                expandedLevel === level
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <Layers className="w-4 h-4" />
              <span className="text-xs">Level {level}</span>
            </button>
          ))}
          <button
            onClick={() => handleExpandLevel("all")}
            className={`px-3 py-1.5 rounded-md transition-all duration-200 ease-in-out flex items-center gap-2 ${
              expandedLevel === Infinity
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <Layers className="w-4 h-4" />
            <span className="text-xs">All</span>
          </button>
        </div>
        <div className="border rounded-lg overflow-hidden transition-all duration-200 ease-in-out hover:border-gray-300">
          <TreeNode
            node={sampleProject}
            level={1}
            onFileSelect={handleFileSelect}
            fileContents={fileContents}
            expandedLevel={expandedLevel}
          />
        </div>
      </div>
      <div className="w-1/2 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4 flex items-center text-gray-800">
          <Code className="w-5 h-5 mr-2" />
          <span>{selectedFileName || "File Content"}</span>
        </h2>
        <div className="border rounded-lg p-4 bg-gray-50 font-mono text-sm overflow-auto max-h-[600px]">
          {selectedFileContent ? (
            <pre className="whitespace-pre-wrap">{selectedFileContent}</pre>
          ) : (
            <div className="text-gray-500 italic">
              Select a .ts or .tsx file to view its content
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectTree;
