"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";

export default function BasketModal() {
  const { cartCount, cartDetails, totalPrice , shouldDisplayCart, removeItem, redirectToCheckout, handleCartClick } =
    useShoppingCart();

  async function HandleBusketBuy(event: any) {
    event.preventDefault();

    let basketState: any = Object.values(cartDetails ?? {}).map((entEl) => (entEl.id));

    try {
      const result = await redirectToCheckout();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent className="sm:max-w-xl w-[90vw]">
        <SheetHeader>
          <SheetTitle>Корзина</SheetTitle>
        </SheetHeader>

        <div className="h-full flex flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="-my-6 divide-y divide-gray-200">
              {cartCount === 0 ? (
                <h1 className="py-6">Нет сортов в заказе</h1>
              ) : (
                <div>
                  {Object.values(cartDetails ?? {}).map((entEl) => (
                    <li key={entEl.id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <Image
                          src={entEl.image as string}
                          alt="prodElphoto"
                          width={100}
                          height={100}
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3 className="text-primary">{entEl.name}</h3>
                          <p className="ml-4">
                            {entEl.price}{" "} руб.
                          </p>
                        </div>

                        <p className="mt-1 max-w-[150px] md:max-w-[333px] break-words text-sm text-gray-500 line-clamp-2 ">
                                
                          {entEl.description}
                        </p>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">
                            Количество: {entEl.quantity}
                          </p>

                          <div className="flex">
                            <button
                              className="font-medium text-primary/80 hover:text-primary/50"
                              type="button"
                              onClick={() => removeItem(entEl.id)}
                            >
                              Удалить
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </div>
              )}
            </ul>
          </div>
          <div className="bprder-t border-gray-200 px-4 py-6 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>
                      Сумма заказа:
                    </p>
                    <p>
                      {totalPrice} руб.
                    </p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">С учетом доствки {`(будет проверака на доставку)`}</p>
              <div className="mt-6" >
                    <Button onClick={HandleBusketBuy} className="w-full">
                      Оформить заказ
                    </Button>
              </div>
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      ИЛИ <button onClick={() => handleCartClick()} className=" font-md hover:text-primary/50 text-primary/70">Продолжить покупки</button>
                    </p>
              </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
