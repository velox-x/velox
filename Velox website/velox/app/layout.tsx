import type { Metadata } from "next";
import { DM_Sans as DMSansFont } from 'next/font/google';
import "./globals.css";

const DMSans = DMSansFont({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Velox",
  description: "The #1 tools for pump.fun",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark overflow-x-hidden">
      <body className={`${DMSans.className}`}>
        {children}
      </body>
    </html>
  );
}

