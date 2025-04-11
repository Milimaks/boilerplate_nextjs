// app/api/files/route.ts

import fs from "fs";
import path from "path";

export async function GET() {
  const dirPath = path.join(process.cwd(), "app/data/files");
  const files = fs.readdirSync(dirPath);
  const result: Record<string, string> = {};

  // Read each file and add it to the result
  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    result[file] = fs.readFileSync(filePath, "utf-8");
  });

  // Return the result as JSON
  return new Response(JSON.stringify(result), {
    headers: { "Content-Type": "application/json" },
  });
}
