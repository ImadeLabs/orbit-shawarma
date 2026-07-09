import type { Address, Order } from "@/lib/types";
import { getItemById } from "@/lib/data/menu-data";

export const savedAddresses: Address[] = [
  { id: "a1", label: "Home", address: "12 Adeola Odeku Street, Victoria Island, Lagos", landmark: "Opposite City Mall", isDefault: true },
  { id: "a2", label: "Office", address: "45 Admiralty Way, Lekki Phase 1, Lagos", landmark: "Near Genesis Cinema" },
];

function buildLine(id: string, quantity: number) {
  const menuItem = getItemById(id)!;
  return { id, menuItem, quantity };
}

export const orderHistory: Order[] = [
  {
    id: "o1",
    orderNumber: "ORB-0705-2210",
    customerName: "Imade",
    phone: "+234 800 000 0000",
    items: [buildLine("chicken-shawarma", 2), buildLine("loaded-fries", 1), buildLine("coca-cola", 2)],
    subtotal: 10900,
    deliveryFee: 1500,
    total: 12400,
    status: "delivered",
    deliveryOption: "delivery",
    paymentOption: "pay-on-delivery",
    createdAt: "2026-07-05 13:20",
    estimatedDelivery: "2026-07-05 14:05",
  },
  {
    id: "o2",
    orderNumber: "ORB-0628-7734",
    customerName: "Imade",
    phone: "+234 800 000 0000",
    items: [buildLine("mixed-shawarma", 1), buildLine("juice", 1)],
    subtotal: 5700,
    deliveryFee: 1500,
    total: 7200,
    status: "delivered",
    deliveryOption: "pickup",
    paymentOption: "online-payment",
    createdAt: "2026-06-28 18:44",
    estimatedDelivery: "2026-06-28 19:15",
  },
];
