import { Inter } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/tailwind.css";

export const metadata = {
  title: "PGMS || Deskmateai Pvt Ltd",
  description: "Generated with zeal",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body style={{ background: "black" }} className={inter.className}>{children}</body>
    </html>
  );
}
