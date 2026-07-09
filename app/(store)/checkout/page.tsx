"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { ArrowLeft, Bike, Store, Wallet, Landmark, CreditCard, Copy, Check } from "lucide-react";
import { checkoutSchema, type CheckoutSchema } from "@/lib/checkout-schema";
import { useCartStore, DELIVERY_FEE, FREE_DELIVERY_THRESHOLD } from "@/lib/store/cart-store";
import { buildWhatsAppOrderMessage, getWhatsAppOrderLink } from "@/lib/whatsapp";
import { generateOrderNumber, formatNaira, cn } from "@/lib/utils";
import { bankDetails } from "@/lib/data/bank-details";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const deliveryOptions = [
  { value: "delivery", label: "Home Delivery", icon: Bike, description: "Delivered to your address" },
  { value: "pickup", label: "Pickup", icon: Store, description: "Pick up at our location" },
] as const;

const paymentOptions = [
  { value: "pay-on-delivery", label: "Pay on Delivery", icon: Wallet },
  { value: "bank-transfer", label: "Bank Transfer", icon: Landmark },
  { value: "online-payment", label: "Online Payment (Paystack)", icon: CreditCard },
] as const;

function CopyableRow({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = React.useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  return (
    <div className="flex items-center justify-between rounded-xl bg-background px-3.5 py-2.5">
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="font-mono text-sm font-bold">{value}</p>
      </div>
      <button
        type="button"
        onClick={handleCopy}
        className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        aria-label={`Copy ${label}`}
      >
        {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
      </button>
    </div>
  );
}

export default function CheckoutPage() {
  const router = useRouter();
  const items = useCartStore((s) => s.items);
  const clearCart = useCartStore((s) => s.clearCart);
  const subtotal = items.reduce((sum, i) => sum + i.menuItem.price * i.quantity, 0);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<CheckoutSchema>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      deliveryOption: "delivery",
      paymentOption: "pay-on-delivery",
    },
  });

  const deliveryOption = watch("deliveryOption");
  const deliveryFee = deliveryOption === "pickup" || subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
  const total = subtotal + deliveryFee;

  React.useEffect(() => {
    if (items.length === 0) {
      router.replace("/menu");
    }
  }, [items.length, router]);

  function onSubmit(data: CheckoutSchema) {
    const orderNumber = generateOrderNumber();
    const message = buildWhatsAppOrderMessage({
      orderNumber,
      form: { ...data, address: data.address ?? "" },
      items,
      subtotal,
      deliveryFee,
      total,
    });

    const order = {
      orderNumber,
      items,
      subtotal,
      deliveryFee,
      total,
      customerName: data.fullName,
      deliveryOption: data.deliveryOption,
      paymentOption: data.paymentOption,
      createdAt: new Date().toISOString(),
    };

    if (typeof window !== "undefined") {
      window.localStorage.setItem("orbit-last-order", JSON.stringify(order));
      window.open(getWhatsAppOrderLink(message), "_blank");
    }

    clearCart();
    toast.success("Order placed! Redirecting to confirmation...");
    router.push("/order-confirmation");
  }

  if (items.length === 0) return null;

  return (
    <div className="container-px mx-auto max-w-5xl py-12">
      <div className="flex items-center gap-3">
        <Link href="/cart" className="text-muted-foreground transition-colors hover:text-foreground">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <h1 className="text-2xl font-extrabold sm:text-3xl">Checkout</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <Card className="shadow-sm">
            <CardContent className="space-y-4 p-6">
              <h2 className="text-lg font-bold">Contact & Delivery Details</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" placeholder="Jane Doe" {...register("fullName")} />
                  {errors.fullName && <p className="text-xs text-destructive">{errors.fullName.message}</p>}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="080X XXX XXXX" {...register("phone")} />
                  {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" {...register("email")} />
                {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
              </div>

              {deliveryOption === "delivery" && (
                <>
                  <div className="space-y-1.5">
                    <Label htmlFor="address">Delivery Address</Label>
                    <Input id="address" placeholder="Street address" {...register("address")} />
                    {errors.address && <p className="text-xs text-destructive">{errors.address.message}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="landmark">Landmark (optional)</Label>
                    <Input id="landmark" placeholder="Nearest bus stop or landmark" {...register("landmark")} />
                  </div>
                </>
              )}

              <div className="space-y-1.5">
                <Label htmlFor="notes">Delivery Notes (optional)</Label>
                <Textarea id="notes" placeholder="E.g. extra spicy, no onions..." {...register("notes")} />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardContent className="p-6">
              <h2 className="text-lg font-bold">Delivery Option</h2>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {deliveryOptions.map((option) => (
                  <button
                    type="button"
                    key={option.value}
                    onClick={() => setValue("deliveryOption", option.value)}
                    className={cn(
                      "flex items-center gap-3 rounded-2xl border-2 p-4 text-left transition-colors",
                      deliveryOption === option.value
                        ? "border-primary bg-primary/5"
                        : "border-border hover:bg-accent"
                    )}
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <option.icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-sm font-bold">{option.label}</span>
                      <span className="block text-xs text-muted-foreground">{option.description}</span>
                    </span>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardContent className="p-6">
              <h2 className="text-lg font-bold">Payment Method</h2>
              <div className="mt-4 space-y-3">
                {paymentOptions.map((option) => {
                  const selected = watch("paymentOption") === option.value;
                  return (
                    <button
                      type="button"
                      key={option.value}
                      onClick={() => setValue("paymentOption", option.value)}
                      className={cn(
                        "flex w-full items-center gap-3 rounded-2xl border-2 p-4 text-left transition-colors",
                        selected ? "border-primary bg-primary/5" : "border-border hover:bg-accent"
                      )}
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <option.icon className="h-5 w-5" />
                      </span>
                      <span className="text-sm font-bold">{option.label}</span>
                    </button>
                  );
                })}
              </div>

              {watch("paymentOption") === "bank-transfer" && (
                <div className="mt-4 space-y-2 rounded-2xl bg-muted/60 p-4">
                  <p className="text-xs font-semibold text-muted-foreground">
                    Transfer the total amount to any of the accounts below, then place your order — we'll confirm on WhatsApp. (Demo account details)
                  </p>
                  <div className="space-y-2">
                    <CopyableRow label="Account Name" value={bankDetails.accountName} />
                    {bankDetails.banks.map((b) => (
                      <CopyableRow key={b.bank} label={b.bank} value={b.accountNumber} />
                    ))}
                  </div>
                </div>
              )}

              {watch("paymentOption") === "online-payment" && (
                <p className="mt-3 text-xs text-muted-foreground">
                  Online payment is a placeholder for Paystack integration - you'll be redirected to complete payment after connecting your Paystack account.
                </p>
              )}
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="sticky top-24 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-lg font-bold">Order Summary</h2>
              <div className="mt-4 max-h-64 space-y-3 overflow-y-auto pr-1">
                {items.map((line) => (
                  <div key={line.id} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      {line.quantity} x {line.menuItem.name}
                    </span>
                    <span className="font-semibold">{formatNaira(line.menuItem.price * line.quantity)}</span>
                  </div>
                ))}
              </div>
              <Separator className="my-5" />
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold">{formatNaira(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Delivery Fee</span>
                  <span className="font-semibold">{deliveryFee === 0 ? "FREE" : formatNaira(deliveryFee)}</span>
                </div>
              </div>
              <Separator className="my-5" />
              <div className="flex justify-between text-base font-extrabold">
                <span>Total</span>
                <span className="text-primary">{formatNaira(total)}</span>
              </div>
              <Button type="submit" size="lg" className="mt-6 w-full" disabled={isSubmitting}>
                {isSubmitting ? "Placing Order..." : "Place Order via WhatsApp"}
              </Button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Clicking Place Order opens WhatsApp with your order details ready to send.
              </p>
            </CardContent>
          </Card>
        </div>
      </form>
    </div>
  );
}
