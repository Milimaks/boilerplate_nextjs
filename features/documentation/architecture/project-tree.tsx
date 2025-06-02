"use client";
import { sampleProject } from "@/features/documentation/architecture/data/architecture-tree";
import { CodeBlock } from "@/components/reusable/code-block";
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
  section?: string;
};

// Icon components depending on the file type
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

// TreeNode component to render each node in the tree structure
const TreeNode: React.FC<{
  fileContents: Record<string, string>;
  node: TreeNode;
  level: number;
  onFileSelect: (content: string, fileName: string) => void;
  expandedLevel: number;
}> = ({ node, level, onFileSelect, fileContents, expandedLevel }) => {
  const [isOpen, setIsOpen] = useState(false);
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

// Function to filter the project tree by section
const filterProjectBySection = (
  project: TreeNode,
  section?: string
): TreeNode => {
  if (!section) return project;

  // Recursive function to find all nodes matching the section
  const findSections = (node: TreeNode): TreeNode[] => {
    let matchingNodes: TreeNode[] = [];

    // If the current node matches the section, add it to the result
    if (node.section === section) {
      matchingNodes.push(node);
    }

    // If the node has children, recursively search them
    if (node.children) {
      for (const child of node.children) {
        matchingNodes = matchingNodes.concat(findSections(child));
      }
    }

    return matchingNodes;
  };

  // Collect all matching nodes
  const matchingNodes = findSections(project);

  // If no matching nodes are found, return the original project
  if (matchingNodes.length === 0) return project;

  // Return a new tree structure containing only the matching nodes
  return {
    name: project.name,
    type: "folder",
    children: matchingNodes,
  };
};

// Main ProjectTree component
const ProjectTree: React.FC<{
  fileContents: Record<string, string>;
  section?: string;
}> = ({ fileContents, section }) => {
  const [selectedFileContent, setSelectedFileContent] = useState<string>("");
  const [selectedFileName, setSelectedFileName] = useState<string>("");
  const [expandedLevel, setExpandedLevel] = useState<number>(1);

  const filteredProject = filterProjectBySection(sampleProject, section);

  const handleFileSelect = (content: string, fileName: string) => {
    setSelectedFileContent(content);
    setSelectedFileName(fileName);
  };

  const handleExpandLevel = (level: number | "all") => {
    setExpandedLevel(level === "all" ? Infinity : level);
  };

  return (
    <div className="flex gap-6 w-full">
      <section className="w-1/2 p-6 bg-white rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:shadow-xl">
        <h2 className="text-xl font-bold mb-4 flex items-center text-gray-800">
          <Terminal className="w-5 h-5 mr-2 transform transition-transform duration-200 ease-in-out hover:rotate-12" />
          <span className="transition-colors duration-200 ease-in-out hover:text-gray-900">
            {section
              ? `Project Structure - ${
                  section.charAt(0).toUpperCase() + section.slice(1)
                }`
              : "Project Structure - Clean Architecture"}
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
            node={filteredProject}
            level={1}
            onFileSelect={handleFileSelect}
            expandedLevel={expandedLevel}
            fileContents={fileContents}
          />
        </div>
      </section>
      <section className="w-1/2 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4 flex items-center text-gray-800">
          <Code className="w-5 h-5 mr-2" />
          <span>{selectedFileName || "File Content"}</span>
        </h2>
        <div className="border rounded-lg p-4 bg-gray-50 font-mono text-sm overflow-auto max-h-[600px]">
          {selectedFileContent ? (
            <CodeBlock>{selectedFileContent}</CodeBlock>
          ) : (
            <div className="text-gray-500 italic">
              Select a .ts or .tsx file to view its content
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProjectTree;
