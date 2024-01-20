import type { Metadata } from "next";
import { Inter } from "next/font/google";
import BasketModal from "./components/BasketModal";
import NavBar from "./components/NavBar";
import CartProviderComponent from "./components/Providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Клубника даром",
  description: `Лучшая рассада клубники для Москвы и всей России из питомников Коломны`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProviderComponent>
          <NavBar />
          <BasketModal />
          {children}
        </CartProviderComponent>
      </body>
    </html>
  );
}
