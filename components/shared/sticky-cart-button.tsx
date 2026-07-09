"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCartStore } from "@/lib/store/cart-store";
import { formatNaira } from "@/lib/utils";

export function StickyCartButton() {
  const items = useCartStore((s) => s.items);
  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce((sum, i) => sum + i.menuItem.price * i.quantity, 0);

  if (totalItems === 0) return null;

  return (
    <div className="fixed inset-x-3 bottom-3 z-40 md:hidden">
      <Link
        href="/cart"
        className="flex items-center justify-between rounded-2xl bg-orbit-gradient px-5 py-4 text-white shadow-2xl shadow-primary/30"
      >
        <span className="flex items-center gap-2 font-semibold">
          <span className="relative">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[10px] font-bold text-primary">
              {totalItems}
            </span>
          </span>
          View Cart
        </span>
        <span className="font-bold">{formatNaira(subtotal)}</span>
      </Link>
    </div>
  );
}
