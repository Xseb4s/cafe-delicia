import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/page";
import Footer from "@/components/footer/page";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Café Delicia",
  description: "Experiencia única con café de alta calidad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
          <link rel="icon" href="/logo.png" />
      </head>
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
