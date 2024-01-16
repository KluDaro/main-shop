import type { Metadata } from "next";
import { Inter } from "next/font/google";
import BasketModal from "./components/BasketModal";
import NavBar from "./components/NavBar";
import CartProviderComponent from "./components/Providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Моя Одежда | VV17CH3R prod.",
  description: `Мне нужна была практика интернет магазина, и я решил создать сайт с вещами из моего гардероба.
  Введен функционал собрания луков с подсчетом их общей цены. Это все сделано как демонстрация навыков.`,
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
