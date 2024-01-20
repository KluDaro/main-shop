'use client';

import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useShoppingCart } from "use-shopping-cart";

const links = [
    
        {name: "Главная", href: "/"},
        {name: "НСД", href: "/nsd"},
        {name: "Ранняя", href: "/early"},
        {name: "Поздняя", href: "/latest"},
]

export default function NavBar() {

    const pathname = usePathname();
    const { handleCartClick } = useShoppingCart();

  return (
    <header className="mb-8 z-10 bg-white border-b">
        <div className="flex  items-center  justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
            <Link href="/">
                <h1 className="text-2xl md:text-4xl font-bold "><span className=" text-primary ">Клубника</span>Даром  </h1>
            </Link>

            <nav className=" hidden gap-12 lg:flex 2xl:ml-16 ">
                {
                    links.map((linkEl, idx)=> (
                        <div key={idx}>
                            {pathname === linkEl.href ? (
                                <Link href={linkEl.href} className="text-lg font-semibold text-primary">{linkEl.name}</Link>
                            ) : (
                                <Link href={linkEl.href} className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary">{linkEl.name}</Link>
                            )}
                        </div>
                    ))
                }
            </nav>
            <div className="flex divide-x border-r sm:border-l">
                <Button onClick={() => handleCartClick()} variant={"outline"} className="flex flex-col gap-y-1,5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none">
                    <ShoppingBag />
                    <span className="hidden text-xs font-semibold text-gray-500 sm:block">
                         Корзина
                    </span>
                </Button>
            </div>
        </div>
    </header>
  )
}
