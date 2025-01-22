import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header/Header";
import { LenisScroll } from "./components/LenisScroll";

const inclusive = localFont({
  src: [
    {
      path: "./fonts/InclusiveSans-Regular.woff2",
      weight: "400",
    },
    {
      path: "./fonts/InclusiveSans-Medium.woff2",
      weight: "500",
    },
  ],
});

export const metadata = {
  title: "Evans Liaudet Rapport de stage 2024-2025",
  description: "Evans Liaudet Rapport de stage 2024-2025",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased ${inclusive.className}`}>
        <Header />
        <LenisScroll />
        {children}
      </body>
    </html>
  );
}
