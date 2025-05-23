import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // corriger ici aussi
});

const ovo = Ovo({ subsets: ["latin"], weight: "400" }); // corriger ici

export const metadata = {
  title: "Portfolio - Don-manuel",
  description: "Portfolio of Don-manuel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} ${ovo.className} antialiased`}>{children}</body>
    </html>
  );
}
