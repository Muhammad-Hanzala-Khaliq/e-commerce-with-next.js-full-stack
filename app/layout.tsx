import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: {
    template:"%s - Shopcart Online   store",
    default:"Shopcart Online Store"
  },
  description: "Shopcart Online Store, Your one stop shop for all your needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className="font-poppins antialiased"
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
