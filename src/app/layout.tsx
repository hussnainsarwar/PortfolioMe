import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hussnain Sarwar - Full Stack Developer",
  description: "Portfolio of Hussnain Sarwar, a passionate Full Stack Developer and Software Engineer specializing in React, Next.js, Node.js, and modern web technologies.",
  keywords: ["Full Stack Developer", "Software Engineer", "React", "Next.js", "Node.js", "TypeScript", "Web Development"],
  authors: [{ name: "Hussnain Sarwar" }],
  openGraph: {
    title: "Hussnain Sarwar - Full Stack Developer",
    description: "Portfolio of Hussnain Sarwar, a passionate Full Stack Developer and Software Engineer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
