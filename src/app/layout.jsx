import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navber";
import Footer from "@/component/Footer";
import NextAuthProvider from "@/provider/NextAuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Care.IO",
  description: "Care.IO is a healthcare management system built with Next.js, designed to streamline patient care and administrative tasks for healthcare providers.",
};

export default function RootLayout({ children }) {
  return (

    <NextAuthProvider>
       <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased`}
      >
       <Navbar></Navbar>
        {children}
      <Footer></Footer>
      </body>
    </html>
    </NextAuthProvider>
   
  );
}
