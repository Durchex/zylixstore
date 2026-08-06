import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zylixstore | Shop. Sell. Style.",
  description: "Zylixstore is a modern online marketplace for fashion lovers, designers, and sellers.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-[#05030a] text-white antialiased">{children}</body>
    </html>
  );
}
