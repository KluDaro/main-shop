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

export function AddToBasket({ currency, stripe_id, description, price, image, name }:ClothElProps) {
  
    const { addItem, handleCartClick } = useShoppingCart();

    const product = {
        name: name,
        description: description,
        price: price,
        currency: currency,
        image: urlFor(image).url(),
        id: stripe_id
    };

  return <Button onClick={() => { addItem(product); handleCartClick(); }} >Добавить в корзину</Button>;
}

