"use client";

import * as React from "react";
import Link from "next/link";
import { CheckCircle2, Clock, MapPin, Receipt } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatNaira } from "@/lib/utils";
import type { CartLine, DeliveryOption, PaymentOption } from "@/lib/types";

interface StoredOrder {
  orderNumber: string;
  items: CartLine[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  customerName: string;
  deliveryOption: DeliveryOption;
  paymentOption: PaymentOption;
  createdAt: string;
}

export default function OrderConfirmationPage() {
  const [order, setOrder] = React.useState<StoredOrder | null>(null);

  React.useEffect(() => {
    const raw = window.localStorage.getItem("orbit-last-order");
    if (raw) setOrder(JSON.parse(raw));
  }, []);

  if (!order) {
    return (
      <div className="container-px mx-auto flex max-w-xl flex-col items-center py-24 text-center">
        <h1 className="text-2xl font-extrabold">No recent order found</h1>
        <p className="mt-2 text-muted-foreground">Place an order to see your confirmation here.</p>
        <Button asChild size="lg" className="mt-8">
          <Link href="/menu">Browse Menu</Link>
        </Button>
      </div>
    );
  }

  const estimatedMinutes = order.deliveryOption === "pickup" ? 15 : 35;

  return (
    <div className="container-px mx-auto max-w-3xl py-16">
      <div className="flex flex-col items-center text-center">
        <span className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
          <CheckCircle2 className="h-10 w-10 text-green-600" />
        </span>
        <h1 className="mt-6 text-3xl font-extrabold">Order Confirmed!</h1>
        <p className="mt-2 max-w-md text-muted-foreground">
          Thanks, {order.customerName}! We've received your order and sent the details to WhatsApp for confirmation.
        </p>
      </div>

      <Card className="mt-10 shadow-lg">
        <CardContent className="p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Receipt className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs text-muted-foreground">Order Number</p>
                <p className="font-mono text-lg font-extrabold">{order.orderNumber}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs text-muted-foreground">Estimated Time</p>
                <p className="font-bold">{estimatedMinutes}-{estimatedMinutes + 15} mins</p>
              </div>
            </div>
          </div>

          <Separator className="my-6" />

          <h3 className="font-bold">Ordered Items</h3>
          <div className="mt-4 space-y-3">
            {order.items.map((line) => (
              <div key={line.id} className="flex justify-between text-sm">
                <span className="text-muted-foreground">
                  {line.quantity} x {line.menuItem.name}
                </span>
                <span className="font-semibold">{formatNaira(line.menuItem.price * line.quantity)}</span>
              </div>
            ))}
          </div>

          <Separator className="my-6" />

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span>{formatNaira(order.subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Delivery Fee</span>
              <span>{order.deliveryFee === 0 ? "FREE" : formatNaira(order.deliveryFee)}</span>
            </div>
            <div className="flex justify-between text-base font-extrabold">
              <span>Total Amount</span>
              <span className="text-primary">{formatNaira(order.total)}</span>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="flex-1">
              <Link href="/account">
                <MapPin className="mr-1.5 h-4 w-4" />
                Track Order
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="flex-1">
              <Link href="/menu">Order Again</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
