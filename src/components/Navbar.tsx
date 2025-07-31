"use client";

import { Menu } from "antd";
import { ShoppingBag, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const items = [
    {
      key: "/vendors",
      icon: <ShoppingBag size={15} />,
      label: <Link href="/vendors">Vendors</Link>,
    },
    {
      key: "/users",
      icon: <Users size={15} />,
      label: <Link href="/users">Users</Link>,
    },
  ];

  return (
    <Menu
      mode="vertical"
      selectedKeys={[pathname]}
      style={{ width: 250 }}
      items={items}
      className="ant-menu ant-menu-dark ant-menu-inline"
      selectable
    />
  );
}
