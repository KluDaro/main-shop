"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";

export interface ClothElProps {
    name: string;
    description: string;
    image: any;
    price: number;
    currency: string;
    stripe_id: string;
} 

export function AddToLook({ currency, stripe_id, description, price, image, name }:ClothElProps) {
  
    const { addItem, handleCartClick } = useShoppingCart();

    const product = {
        name: name,
        description: description,
        price: price,
        currency: currency,
        image: urlFor(image).url(),
        id: stripe_id
    };

  return <Button onClick={() => { addItem(product); handleCartClick(); }} >Добавить в лук</Button>;
}

export function OneClickBuy({ currency, stripe_id, description, price, image, name }:ClothElProps) {

  const { checkoutSingleItem } = useShoppingCart();

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    id: stripe_id
};

function buyNow(priceId: string) {
  checkoutSingleItem(priceId);
}

  return <Button onClick={() => buyNow(product.id)} variant="secondary">Купить в один клик</Button>;
}
