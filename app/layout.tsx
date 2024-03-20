import type { Metadata } from "next";
import Navbar from "./components/Navbar";
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
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
