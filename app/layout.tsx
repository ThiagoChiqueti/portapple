import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Poppins({ weight: '400', preload: false});

export const metadata: Metadata = {
  title: "Thiago Chiqueti",
  description: "De um programador para programadores",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className} id="#top">
        {children}

        <Navbar />
      </body>
    </html>
  );
}
