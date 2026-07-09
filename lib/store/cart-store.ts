"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartLine, MenuItem } from "@/lib/types";

interface CartState {
  items: CartLine[];
  addItem: (menuItem: MenuItem, quantity?: number) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  subtotal: () => number;
  totalItems: () => number;
}

export const DELIVERY_FEE = 1500;
export const FREE_DELIVERY_THRESHOLD = 15000;

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (menuItem, quantity = 1) => {
        set((state) => {
          const existing = state.items.find((i) => i.id === menuItem.id);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.id === menuItem.id
                  ? { ...i, quantity: i.quantity + quantity }
                  : i
              ),
            };
          }
          return {
            items: [...state.items, { id: menuItem.id, menuItem, quantity }],
          };
        });
      },
      increaseQuantity: (id) =>
        set((state) => ({
          items: state.items.map((i) =>
            i.id === id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        })),
      decreaseQuantity: (id) =>
        set((state) => ({
          items: state.items
            .map((i) => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i))
            .filter((i) => i.quantity > 0),
        })),
      removeItem: (id) =>
        set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
      clearCart: () => set({ items: [] }),
      subtotal: () =>
        get().items.reduce(
          (sum, i) => sum + i.menuItem.price * i.quantity,
          0
        ),
      totalItems: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
    }),
    { name: "orbit-shawarma-cart" }
  )
);
