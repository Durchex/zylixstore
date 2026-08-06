import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zylixstore | Shop. Sell. Style.",
  description: "Zylixstore is a modern online marketplace for fashion lovers, designers, and sellers.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-white text-[#1F2A44] antialiased">{children}</body>
    </html>
  );
}
