type TreeNode = {
  name: string;
  description?: string;
  type: "folder" | "file";
  children?: TreeNode[];
  content?: string;
  section?: string;
};

export const sampleProject: TreeNode = {
  name: "clean-architecture-project",
  type: "folder",
  children: [
    {
      name: "app",
      description: "Next.js app directory - Frameworks & Drivers ",
      section: "framework",
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
        { name: "action.ts", type: "file" },
        { name: "add-todo.tsx", type: "file" },
        { name: "layout.tsx", type: "file", content: "layout.tsx" },
        { name: "page.tsx", type: "file", content: "page.tsx" },
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
          section: "application",
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
            {
              name: "services",
              type: "folder",
              children: [
                {
                  name: "authentication.service.interface.ts",
                  type: "file",
                  content: "authentication.service.interface.ts",
                },
              ],
            },
            {
              name: "use-cases",
              type: "folder",
              children: [
                {
                  name: "sign-in.use-case.ts",
                  type: "file",
                  content: "sign-in.use-case.ts",
                },
                {
                  name: "sign-up.use-case.ts",
                  type: "file",
                  content: "sign-up.use-case.ts",
                },
                {
                  name: "sign-out.use-case.ts",
                  type: "file",
                  content: "sign-out.use-case.ts",
                },
              ],
            },
          ],
        },
        {
          name: "entities",
          type: "folder",
          section: "entities",
          children: [
            {
              name: "errors",
              type: "folder",
              children: [
                {
                  name: "auth.ts",
                  type: "file",
                  content: "auth.ts",
                },
                {
                  name: "common.ts",
                  type: "file",
                  content: "common.ts",
                },
              ],
            },
            {
              name: "models",
              type: "folder",
              children: [
                {
                  name: "cookie.ts",
                  type: "file",
                  content: "cookie.ts",
                },
                {
                  name: "session.ts",
                  type: "file",
                  content: "session.ts",
                },
                {
                  name: "todo.ts",
                  type: "file",
                  content: "todo.ts",
                },
                {
                  name: "transaction.interface.ts",
                  type: "file",
                  content: "transaction.interface.ts",
                },
                {
                  name: "user.ts",
                  type: "file",
                  content: "entity-user.ts",
                },
              ],
            },
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
          section: "adapters",
          type: "folder",
          children: [
            {
              name: "auth",
              type: "folder",
              children: [
                {
                  name: "sign-in.controller.ts",
                  type: "file",
                  content: "sign-in.controller.ts",
                },
                {
                  name: "sign-out.controller.ts",
                  type: "file",
                  content: "sign-out.controller.ts",
                },
                {
                  name: "sign-up.controller.ts",
                  type: "file",
                  content: "sign-up.controller.ts",
                },
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
