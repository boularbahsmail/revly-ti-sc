"use client";

import { Table, Tag, Tooltip, Button } from "antd";

export default function UsersTable({ data }: { data: any[] }) {
  const columns = [
    { title: "Email", dataIndex: "email" },
    { title: "Display Name", dataIndex: "displayName" },
    {
      title: "Is Active",
      render: (_: any, record: any) => (
        <Tag color={record.isActive ? "green" : "red"}>
          {record.isActive ? "Active" : "Inactive"}
        </Tag>
      ),
    },
    {
      title: "Created At",
      render: (_: any, record: any) => <span>{record.createdAt}</span>,
      dataIndex: "createdAt",
    },
    {
      title: "Vendors",
      render: (_: any, record: any) => (
        <>
          {record.vendors.map((v: any) => (
            <Tooltip title={v.id} key={v.id}>
              <Tag color="blue">{v.customName}</Tag>
            </Tooltip>
          ))}
        </>
      ),
    },
    {
      title: "Actions",
      render: (_: any, record: any) => (
        <form action={`/api/users/${record.id}/toggle`} method="post">
          <Button
            type={record.isActive ? "default" : "primary"}
            htmlType="submit"
          >
            {record.isActive ? "Deactivate" : "Activate"}
          </Button>
        </form>
      ),
    },
  ];

  return <Table rowKey="id" dataSource={data} columns={columns} />;
}
