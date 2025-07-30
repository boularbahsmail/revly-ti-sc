import { db } from "@/lib/db";
import { vendors, chains } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import VendorsTable from "@/components/VendorsTable";

export default async function VendorsPage() {
  const data = await db
    .select({
      id: vendors.id,
      name: vendors.name,
      lat: vendors.latitude,
      lng: vendors.longitude,
      createdAt: vendors.createdAt,
      chainId: vendors.chainId,
      chainName: chains.name,
    })
    .from(vendors)
    .leftJoin(chains, eq(vendors.chainId, chains.id));

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div style={{ padding: 24, flex: 1 }}>
        <h1><b>Vendors</b></h1>
        <VendorsTable data={data} />
      </div>
    </div>
  );
}
