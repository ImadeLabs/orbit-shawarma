"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import { useCartStore } from "@/lib/store/cart-store";
import { formatNaira } from "@/lib/utils";
import type { CartLine } from "@/lib/types";
import { Button } from "@/components/ui/button";

export function CartItemRow({ line }: { line: CartLine }) {
  const increaseQuantity = useCartStore((s) => s.increaseQuantity);
  const decreaseQuantity = useCartStore((s) => s.decreaseQuantity);
  const removeItem = useCartStore((s) => s.removeItem);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex items-center gap-4 rounded-2xl border bg-card p-4 shadow-sm"
    >
      <Link href="/menu" className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
        <Image src={line.menuItem.image} alt={line.menuItem.name} fill className="object-cover" sizes="80px" />
      </Link>

      <div className="min-w-0 flex-1">
        <p className="truncate font-bold">{line.menuItem.name}</p>
        <p className="mt-0.5 text-sm text-muted-foreground">
          {formatNaira(line.menuItem.price)} each
        </p>
        <div className="mt-2 flex items-center gap-3">
          <div className="flex items-center rounded-full border">
            <button
              onClick={() => decreaseQuantity(line.id)}
              className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              aria-label="Decrease quantity"
            >
              <Minus className="h-3.5 w-3.5" />
            </button>
            <span className="w-8 text-center text-sm font-bold">{line.quantity}</span>
            <button
              onClick={() => increaseQuantity(line.id)}
              className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              aria-label="Increase quantity"
            >
              <Plus className="h-3.5 w-3.5" />
            </button>
          </div>
          <button
            onClick={() => removeItem(line.id)}
            className="flex items-center gap-1 text-xs font-semibold text-destructive transition-colors hover:text-destructive/70"
          >
            <Trash2 className="h-3.5 w-3.5" />
            Remove
          </button>
        </div>
      </div>

      <div className="text-right">
        <p className="font-extrabold text-primary">
          {formatNaira(line.menuItem.price * line.quantity)}
        </p>
      </div>
    </motion.div>
  );
}
