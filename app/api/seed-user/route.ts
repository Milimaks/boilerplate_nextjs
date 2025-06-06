import { NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import postgres from "postgres";
import { users } from "../../../shared/lib/mocks/placeholder-data";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: undefined });

async function seedUsers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
    })
  );

  return insertedUsers;
}

export async function POST(req: NextRequest) {
  try {
    const result = await seedUsers();
    return new Response(JSON.stringify({ message: "Users seeded", result }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Error seeding users" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
