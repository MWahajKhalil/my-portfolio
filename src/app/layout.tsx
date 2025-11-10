import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hassan Tahir Khan | Portfolio",
  description: "AI, Machine Learning, and Full-Stack Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
