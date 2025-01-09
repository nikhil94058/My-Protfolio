// app/layout.tsx
import React from "react";
import { Inter } from "next/font/google"; // Example for other font imports
import { Preahvihear } from "next/font/google"; // Import the Preahvihear font

// Initialize fonts
const inter = Inter({ subsets: ["latin"] });
const preahvihear = Preahvihear({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.className} ${preahvihear.className}`}>
      <body className="bg-gray-100 text-gray-900">
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
