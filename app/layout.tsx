import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Betamind",
  description: "Quick Coding Test",
  icons: {
    icon: [
      {
        url: '/images/icon.png',
        href: '/images/icon.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="header">
          <Image
            src={"/images/logo.png"}
            width={75}
            height={75}
            alt={"logo-main"}
            className="object-contain"
          />
        </div>
        <div className="flex-center w-full h-full">{children}</div>
      </body>
    </html>
  );
}
