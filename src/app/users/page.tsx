import { db } from "@/lib/db";
import { users, userVendors, vendors } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import UsersTable from "@/components/UsersTable";

export default async function UsersPage() {
  const allUsers = await db.select().from(users);

  const data = await Promise.all(
    allUsers.map(async (user) => {
      const vendorMappings = await db
        .select({
          id: vendors.id,
          customName: userVendors.displayName,
        })
        .from(userVendors)
        .leftJoin(vendors, eq(vendors.id, userVendors.vendorId))
        .where(eq(userVendors.userId, user.id));

      return {
        ...user,
        vendors: vendorMappings,
      };
    })
  );

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div style={{ padding: 24, flex: 1 }}>
        <h1><b>Users</b></h1>
        <UsersTable data={data} />
      </div>
    </div>
  );
}
