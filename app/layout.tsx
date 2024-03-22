import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./containers/Footer";
import "./globals.scss";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Max | Front-End Developer",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          <main>
            {children}
            <Analytics />
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
