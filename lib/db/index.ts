import postgres from "postgres";

if (!process.env.POSTGRES_URL) {
  throw new Error("POSTGRES_URL is not defined");
}

// Configuration unique de la connexion à la base de données
const sql = postgres(process.env.POSTGRES_URL, {
  ssl: process.env.NODE_ENV === "production" ? "require" : false,
});

export default sql;
