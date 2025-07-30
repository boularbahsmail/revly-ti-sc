import {
  pgTable,
  text,
  integer,
  boolean,
  primaryKey,
} from "drizzle-orm/pg-core";

// USERS
export const users = pgTable("users", {
  id: text("id").primaryKey(),
  email: text("email").notNull(),
  displayName: text("display_name"),
  isActive: integer("is_active").default(1),
  createdAt: text("created_at"),
});

// CHAINS
export const chains = pgTable("chains", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
});

// VENDORS
export const vendors = pgTable("vendors", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  chainId: text("chain_id"),
  latitude: text("latitude"),
  longitude: text("longitude"),
  createdAt: text("created_at"),
});

// USER_VENDORS
export const userVendors = pgTable(
  "user_vendors",
  {
    userId: text("user_id")
      .notNull()
      .references(() => users.id),
    vendorId: text("vendor_id")
      .notNull()
      .references(() => vendors.id),
    displayName: text("display_name"),
    isEnabled: boolean("is_enabled"),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.userId, table.vendorId] }),
  })
);
