"use client";
import {
  ChevronRight,
  Code,
  Database,
  FileText,
  Folder,
  Layout,
  Settings,
  Terminal,
} from "lucide-react";
import React, { useState } from "react";

type TreeNode = {
  name: string;
  type: "folder" | "file";
  children?: TreeNode[];
  content?: string;
};

const sampleProject: TreeNode = {
  name: "clean-architecture-project",
  type: "folder",
  children: [
    {
      name: "src",
      type: "folder",
      children: [
        {
          name: "domain",
          type: "folder",
          children: [
            {
              name: "entities",
              type: "folder",
              children: [
                {
                  name: "User.ts",
                  type: "file",
                  content: `User.ts`,
                },
                {
                  name: "Product.ts",
                  type: "file",
                  content: `Product.ts`,
                },
              ],
            },
            {
              name: "repositories",
              type: "folder",
              children: [
                {
                  name: "IUserRepository.ts",
                  type: "file",
                  content: `import { User } from '../entities/User';

export interface IUserRepository {
  findById(id: string): Promise<User | null>;
  findAll(): Promise<User[]>;
  save(user: User): Promise<void>;
  delete(id: string): Promise<void>;
}`,
                },
                {
                  name: "IProductRepository.ts",
                  type: "file",
                  content: `import { Product } from '../entities/Product';

export interface IProductRepository {
  findById(id: string): Promise<Product | null>;
  findAll(): Promise<Product[]>;
  save(product: Product): Promise<void>;
  delete(id: string): Promise<void>;
}`,
                },
              ],
            },
            {
              name: "usecases",
              type: "folder",
              children: [
                {
                  name: "CreateUser.ts",
                  type: "file",
                  content: `import { User, UserImpl } from '../entities/User';
import { IUserRepository } from '../repositories/IUserRepository';

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(email: string, name: string): Promise<User> {
    const user = new UserImpl(
      crypto.randomUUID(),
      email,
      name,
      new Date()
    );
    
    await this.userRepository.save(user);
    return user;
  }
}`,
                },
                {
                  name: "GetProducts.ts",
                  type: "file",
                  content: `import { Product } from '../entities/Product';
import { IProductRepository } from '../repositories/IProductRepository';

export class GetProductsUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(): Promise<Product[]> {
    return this.productRepository.findAll();
  }
}`,
                },
              ],
            },
          ],
        },
        {
          name: "infrastructure",
          type: "folder",
          children: [
            {
              name: "database",
              type: "folder",
              children: [
                {
                  name: "UserRepository.ts",
                  type: "file",
                  content: `import { User } from '../../domain/entities/User';
import { IUserRepository } from '../../domain/repositories/IUserRepository';

export class UserRepository implements IUserRepository {
  private users: User[] = [];

  async findById(id: string): Promise<User | null> {
    return this.users.find(user => user.id === id) || null;
  }

  async findAll(): Promise<User[]> {
    return [...this.users];
  }

  async save(user: User): Promise<void> {
    const index = this.users.findIndex(u => u.id === user.id);
    if (index >= 0) {
      this.users[index] = user;
    } else {
      this.users.push(user);
    }
  }

  async delete(id: string): Promise<void> {
    this.users = this.users.filter(user => user.id !== id);
  }
}`,
                },
                {
                  name: "ProductRepository.ts",
                  type: "file",
                  content: `import { Product } from '../../domain/entities/Product';
import { IProductRepository } from '../../domain/repositories/IProductRepository';

export class ProductRepository implements IProductRepository {
  private products: Product[] = [];

  async findById(id: string): Promise<Product | null> {
    return this.products.find(product => product.id === id) || null;
  }

  async findAll(): Promise<Product[]> {
    return [...this.products];
  }

  async save(product: Product): Promise<void> {
    const index = this.products.findIndex(p => p.id === product.id);
    if (index >= 0) {
      this.products[index] = product;
    } else {
      this.products.push(product);
    }
  }

  async delete(id: string): Promise<void> {
    this.products = this.products.filter(product => product.id !== id);
  }
}`,
                },
              ],
            },
            {
              name: "config",
              type: "folder",
              children: [
                {
                  name: "database.ts",
                  type: "file",
                  content: `export const databaseConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'clean_architecture_db'
};`,
                },
              ],
            },
          ],
        },
        {
          name: "presentation",
          type: "folder",
          children: [
            {
              name: "components",
              type: "folder",
              children: [
                {
                  name: "UserList.tsx",
                  type: "file",
                  content: `import React, { useEffect, useState } from 'react';
import { User } from '../../domain/entities/User';

interface Props {
  users: User[];
  onDelete: (id: string) => void;
}

export const UserList: React.FC<Props> = ({ users, onDelete }) => {
  return (
    <div className="space-y-4">
      {users.map(user => (
        <div key={user.id} className="flex justify-between items-center p-4 bg-white shadow rounded">
          <div>
            <h3 className="font-medium">{user.name}</h3>
            <p className="text-gray-500">{user.email}</p>
          </div>
          <button
            onClick={() => onDelete(user.id)}
            className="text-red-500 hover:text-red-700"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};`,
                },
                {
                  name: "ProductCard.tsx",
                  type: "file",
                  content: `import React from 'react';
import { Product } from '../../domain/entities/Product';

interface Props {
  product: Product;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <h3 className="text-lg font-medium">{product.name}</h3>
      <p className="text-gray-600 mt-2">{product.description}</p>
      <div className="mt-4">
        <span className="text-2xl font-bold">
          
        </span>
      </div>
    </div>
  );
};`,
                },
              ],
            },
            {
              name: "pages",
              type: "folder",
              children: [
                {
                  name: "Home.tsx",
                  type: "file",
                  content: `import React from 'react';
import { ProductCard } from '../components/ProductCard';
import { useProducts } from '../hooks/useProducts';

export const Home: React.FC = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};`,
                },
                {
                  name: "Dashboard.tsx",
                  type: "file",
                  content: `import React from 'react';
import { UserList } from '../components/UserList';
import { useUsers } from '../hooks/useUsers';

export const Dashboard: React.FC = () => {
  const { users, deleteUser, loading, error } = useUsers();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">User Dashboard</h1>
      <UserList users={users} onDelete={deleteUser} />
    </div>
  );
};`,
                },
              ],
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
}> = ({ node, level, onFileSelect, fileContents }) => {
  const [isOpen, setIsOpen] = useState(true);
  const paddingLeft = `${level * 1.5}rem`;

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

  const handleFileSelect = (content: string, fileName: string) => {
    setSelectedFileContent(content);
    setSelectedFileName(fileName);
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
        <div className="border rounded-lg overflow-hidden transition-all duration-200 ease-in-out hover:border-gray-300">
          <TreeNode
            node={sampleProject}
            level={1}
            onFileSelect={handleFileSelect}
            fileContents={fileContents}
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
