import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ashfaque Ahmed | Full Stack Developer",
  description: "Full Stack Developer — React, Next.js, Node.js & MongoDB. Building premium web experiences.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
