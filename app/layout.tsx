import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "My Portifólio",
  description: "Designed by Adigun Mubaraq",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} border-[3px] border-[#E9B864] rounded-md`}>
        {children}
      </body>
    </html>
  );
}
