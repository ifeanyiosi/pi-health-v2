import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import { PersistGate } from "redux-persist/integration/react";
import "slick-carousel/slick/slick.css";

import { persistor, store } from "@/lib/redux/store";
import { Providers } from "@/lib/provider";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />{" "}
        </Providers>
      </body>
    </html>
  );
}
