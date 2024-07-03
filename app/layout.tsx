import type { Metadata } from "next";
import "./globals.css";

import Header from "./_components/header";
import Footer from "./_components/footer";


export const metadata: Metadata = {
  title: "СТРОЙПЛИТ",
  description: "Тротуарная плитка, бордюры, строительные блоки, цемент",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Header />
        <div > {children} </div>
        <Footer />
      </body>
    </html>
  );
}
