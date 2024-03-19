import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import "./globals.scss";

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
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
