import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Poppins({ weight: "400", preload: false });

export const metadata: Metadata = {
  title: "Thiago Chiqueti | Portifólio",
  description: "Programador apaixonado por desafios!",
  icons: "/check.svg",
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
