"use client";

import { CartProvider } from "use-shopping-cart";
import { ReactNode } from "react";

export default function CartProviderComponent({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl="https://e-comm-app-xi.vercel.app//stripe/success"
      cancelUrl="https://e-comm-app-xi.vercel.app//stripe/error"
      currency="RUB"
      billingAddressCollection={false}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </CartProvider>
  );
}
