import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import favicon from "./pages/favicon.ico";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mahata Purba Para F.P School",
  description: "Website of Mahata Purba Para F.P School",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>{children}</body>
    </html>
  );
}
