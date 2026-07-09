"use client";

import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { ShoppingBag, ArrowRight, ArrowLeft } from "lucide-react";
import { useCartStore, DELIVERY_FEE, FREE_DELIVERY_THRESHOLD } from "@/lib/store/cart-store";
import { CartItemRow } from "@/components/cart/cart-item";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatNaira } from "@/lib/utils";

export default function CartPage() {
  const items = useCartStore((s) => s.items);
  const subtotal = items.reduce((sum, i) => sum + i.menuItem.price * i.quantity, 0);
  const deliveryFee = items.length === 0 || subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
  const total = subtotal + deliveryFee;
  const amountToFreeDelivery = Math.max(0, FREE_DELIVERY_THRESHOLD - subtotal);

  if (items.length === 0) {
    return (
      <div className="container-px mx-auto flex max-w-3xl flex-col items-center py-24 text-center">
        <span className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
          <ShoppingBag className="h-9 w-9 text-muted-foreground" />
        </span>
        <h1 className="mt-6 text-2xl font-extrabold">Your cart is empty</h1>
        <p className="mt-2 text-muted-foreground">
          Looks like you haven't added anything yet. Let's fix that.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href="/menu">Browse Menu</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container-px mx-auto max-w-5xl py-12">
      <div className="flex items-center gap-3">
        <Link href="/menu" className="text-muted-foreground transition-colors hover:text-foreground">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <h1 className="text-2xl font-extrabold sm:text-3xl">Your Cart</h1>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          <AnimatePresence>
            {items.map((line) => (
              <CartItemRow key={line.id} line={line} />
            ))}
          </AnimatePresence>
        </div>

        <div>
          <Card className="sticky top-24 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-lg font-bold">Order Summary</h2>

              {amountToFreeDelivery > 0 && (
                <div className="mt-4 rounded-xl bg-primary/10 p-3 text-xs font-semibold text-primary">
                  Add {formatNaira(amountToFreeDelivery)} more for FREE delivery!
                </div>
              )}

              <div className="mt-5 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold">{formatNaira(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Delivery Fee</span>
                  <span className="font-semibold">
                    {deliveryFee === 0 ? "FREE" : formatNaira(deliveryFee)}
                  </span>
                </div>
              </div>

              <Separator className="my-5" />

              <div className="flex justify-between text-base font-extrabold">
                <span>Total</span>
                <span className="text-primary">{formatNaira(total)}</span>
              </div>

              <Button asChild size="lg" className="mt-6 w-full gap-1.5">
                <Link href="/checkout">
                  Proceed to Checkout <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="ghost" className="mt-2 w-full">
                <Link href="/menu">Continue Shopping</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
