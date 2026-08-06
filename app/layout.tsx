import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Zylixstore | Technology Made Simple", description: "Premium technology, thoughtfully selected." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
