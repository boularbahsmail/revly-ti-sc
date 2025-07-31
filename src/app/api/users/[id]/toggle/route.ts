import { db } from "@/lib/db";
import { users } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import { NextRequest } from "next/server";

export const POST = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const userId = await params.id;
  const [user] = await db.select().from(users).where(eq(users.id, userId));
  if (!user) return new Response("User not found", { status: 404 });

  await db
    .update(users)
    .set({ isActive: user.isActive ? 0 : 1 })
    .where(eq(users.id, userId));

  return new Response(null, { status: 302, headers: { Location: "/users" } });
};
