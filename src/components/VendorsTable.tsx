"use client";

import { Table, Tag } from "antd";
import { ExternalLink, MapIcon, MapPin } from "lucide-react";

const openGoogleMaps = (lat: string, lng: string) => {
  const url = `https://www.google.com/maps?q=${lat},${lng}`;
  window.open(url, "_blank");
};

export default function VendorsTable({ data }: { data: any[] }) {
  const columns = [
    { title: "Name", dataIndex: "name" },
    {
      title: "Coordinates",
      render: (_: any, record: any) => (
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <MapPin color="#3b82f6" size={17} />
          <a
            href={`https://www.google.com/maps?q=${record.lat},${record.lng}`}
            target="_blank"
            rel="noreferrer"
          >
            {record.lat}, {record.lng}
          </a>
          <ExternalLink color="#3b82f6" size={17} />
        </div>
      ),
    },
    {
      title: "Chain ID",
      render: (_: any, record: any) => (
        <Tag color={"blue"}>
          {record.chainId}
        </Tag>
      ),
    },
    { title: "Chain Name", dataIndex: "chainName" },
    { title: "Created At", dataIndex: "createdAt" },
  ];

  return <Table rowKey="id" dataSource={data} columns={columns} />;
}
