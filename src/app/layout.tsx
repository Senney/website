import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = JetBrains_Mono({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sean Heintz - Senney.net",
  description:
    "Personal website of Sean Heintz, full-stack software developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Sean Heintz - Senney.net</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Personal website of Sean Heintz, full-stack software developer."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="http://www.senney.net/" />
      </head>

      <body className={`${inter.className} text-center bg-slate-950 text-gray-100`}>{children}</body>
    </html>
  );
}
