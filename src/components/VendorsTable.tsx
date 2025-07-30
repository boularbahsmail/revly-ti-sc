"use client";

import { Table } from "antd";

export default function VendorsTable({ data }: { data: any[] }) {
  const columns = [
    { title: "Name", dataIndex: "name" },
    {
      title: "Coordinates",
      render: (_: any, record: any) => (
        <a href={`https://www.google.com/maps?q=${record.lat},${record.lng}`} target="_blank" rel="noreferrer">
          {record.lat}, {record.lng}
        </a>
      ),
    },
    { title: "Chain ID", dataIndex: "chainId" },
    { title: "Chain Name", dataIndex: "chainName" },
    { title: "Created At", dataIndex: "createdAt" },
  ];

  return <Table rowKey="id" dataSource={data} columns={columns} />;
}
