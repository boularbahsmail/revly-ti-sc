import "antd/dist/reset.css";
import { ConfigProvider } from "antd";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Navbar />
        <ConfigProvider>{children}</ConfigProvider>
      </body>
    </html>
  );
}
