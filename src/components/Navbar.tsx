"use client";

import { Menu } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const items = [
    {
      key: "/vendors",
      label: <Link href="/vendors">Vendors</Link>,
    },
    {
      key: "/users",
      label: <Link href="/users">Users</Link>,
    },
  ];

  return (
    <Menu
      mode="vertical"
      selectedKeys={[pathname]}
      style={{ height: "100vh", width: 200 }}
      items={items}
    />
  );
}
