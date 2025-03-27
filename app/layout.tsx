import type React from "react";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Site Under Maintenance | We'll Be Back Soon",
  description:
    "Our site is currently undergoing scheduled maintenance. We'll be back online shortly with improved performance and new features.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icons/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
