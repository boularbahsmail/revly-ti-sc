"use client";

import { Table, Tag, Tooltip, Button } from "antd";

export default function UsersTable({ data }: { data: any[] }) {

    const columns = [
    { title: "Email", dataIndex: "email" },
    { title: "Display Name", dataIndex: "displayName" },
    {
      title: "Is Active",
      render: (_: any, record: any) => (record.isActive ? "Yes" : "No"),
    },
    { title: "Created At", dataIndex: "createdAt" },
    {
      title: "Vendors",
      render: (_: any, record: any) => (
        <>
          {record.vendors.map((v: any) => (
            <Tooltip title={v.id} key={v.id}>
              <Tag>{v.customName}</Tag>
            </Tooltip>
          ))}
        </>
      ),
    },
    {
      title: "Actions",
      render: (_: any, record: any) => (
        <form action={`/api/users/${record.id}/toggle`} method="post">
          <Button htmlType="submit" size="middle">
            {record.isActive ? "Deactivate" : "Activate"}
          </Button>
        </form>
      ),
    },
  ];

  return <Table rowKey="id" dataSource={data} columns={columns} />;
}
