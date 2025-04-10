// app/api/files/route.ts

import fs from "fs";
import path from "path";

export async function GET() {
  const dirPath = path.join(process.cwd(), "app/data/files");
  const files = fs.readdirSync(dirPath);
  const result: Record<string, string> = {};

  // Lecture de chaque fichier et ajout dans le résultat
  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    result[file] = fs.readFileSync(filePath, "utf-8");
  });

  // Retourne le résultat sous forme JSON
  return new Response(JSON.stringify(result), {
    headers: { "Content-Type": "application/json" },
  });
}
