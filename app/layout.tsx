
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meena Sharma | Software Engineer & Developer",
  description:
    "Meena Sharma - Software Engineer with 4+ years of experience in PHP, Laravel, CodeIgniter, JavaScript and REST API development. Currently learning AI and Machine Learning.",
  keywords: [
    "Meena Sharma",
    "PHP Developer",
    "Laravel Developer",
    "Software Engineer",
    "Next.js Portfolio",
    "AI ML Learner",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
