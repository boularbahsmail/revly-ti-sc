import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "../src/drizzle/schema";
import { users, chains, vendors, userVendors } from "../src/drizzle/schema";
import fs from "fs/promises";
import path from "path";
import "dotenv/config";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined in environment variables");
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const db = drizzle(pool, { schema });

const seed = async () => {
  // 1. Clear existing data in proper order
  await db.delete(userVendors);
  await db.delete(users);
  await db.delete(vendors);
  await db.delete(chains);

  const chainsCsv = await fs.readFile(
    path.join(__dirname, "../data/chains.csv"),
    "utf-8"
  );
  const vendorsCsv = await fs.readFile(
    path.join(__dirname, "../data/vendors.csv"),
    "utf-8"
  );
  const usersCsv = await fs.readFile(
    path.join(__dirname, "../data/users.csv"),
    "utf-8"
  );
  const usersVendorsCsv = await fs.readFile(
    path.join(__dirname, "../data/users_vendors.csv"),
    "utf-8"
  );

  const parseCSV = (str: string) =>
    str
      .trim()
      .split("\n")
      .slice(1)
      .map((line) => line.split(","));

  const chainRows = parseCSV(chainsCsv);
  const vendorRows = parseCSV(vendorsCsv);
  const userRows = parseCSV(usersCsv);
  const usersVendorsRows = parseCSV(usersVendorsCsv);

  await db.insert(chains).values(
    chainRows.map(([id, name]) => ({
      id: id.trim(),
      name: name.trim(),
    }))
  );

  await db.insert(vendors).values(
    vendorRows.map(([chain_id, id, name, long, lat]) => ({
      id: id.trim(),
      name: name.trim(),
      chainId: chain_id.trim(),
      longitude: long.trim(),
      latitude: lat.trim(),
    }))
  );

  await db.insert(users).values(
    userRows.map(([id, name, email, active]) => ({
      id: id.trim(),
      displayName: name.trim(),
      email: email.trim(),
      isActive: active.trim() === "TRUE" ? 1 : 0,
    }))
  );

  await db.insert(userVendors).values(
    usersVendorsRows.map(([user_id, vendor_id, display_name, is_enabled]) => ({
      userId: user_id.trim(),
      vendorId: vendor_id.trim(),
      displayName: display_name.trim(),
      isEnabled: is_enabled.trim() === "TRUE" ? true : false,
    }))
  );

  console.log("✅ DB Seeded successfully");
  process.exit();
};

seed().catch((err) => {
  console.error("❌ DB Seeding failed:", err);
  process.exit(1);
});
