import type { CartLine, CheckoutFormData } from "@/lib/types";
import { formatNaira } from "@/lib/utils";
import { bankDetails } from "@/lib/data/bank-details";

export const RESTAURANT_WHATSAPP_NUMBER = "2348000000000"; // TODO: replace with real WhatsApp number

const paymentLabels: Record<CheckoutFormData["paymentOption"], string> = {
  "pay-on-delivery": "Pay on Delivery",
  "bank-transfer": "Bank Transfer",
  "online-payment": "Online Payment",
};

const deliveryLabels: Record<CheckoutFormData["deliveryOption"], string> = {
  pickup: "Pickup",
  delivery: "Home Delivery",
};

export function buildWhatsAppOrderMessage({
  orderNumber,
  form,
  items,
  subtotal,
  deliveryFee,
  total,
}: {
  orderNumber: string;
  form: CheckoutFormData;
  items: CartLine[];
  subtotal: number;
  deliveryFee: number;
  total: number;
}) {
  const lines: string[] = [];
  lines.push(`*New Order - Orbit Shawarma*`);
  lines.push(`Order No: ${orderNumber}`);
  lines.push("");
  lines.push(`*Customer:* ${form.fullName}`);
  lines.push(`*Phone:* ${form.phone}`);
  if (form.email) lines.push(`*Email:* ${form.email}`);
  lines.push(`*Delivery:* ${deliveryLabels[form.deliveryOption]}`);
  if (form.deliveryOption === "delivery") {
    lines.push(`*Address:* ${form.address}`);
    if (form.landmark) lines.push(`*Landmark:* ${form.landmark}`);
  }
  if (form.notes) lines.push(`*Notes:* ${form.notes}`);
  lines.push("");
  lines.push(`*Order Items:*`);
  items.forEach((line) => {
    lines.push(
      `- ${line.quantity} x ${line.menuItem.name} (${formatNaira(
        line.menuItem.price
      )}) = ${formatNaira(line.menuItem.price * line.quantity)}`
    );
  });
  lines.push("");
  lines.push(`Subtotal: ${formatNaira(subtotal)}`);
  lines.push(
    `Delivery Fee: ${deliveryFee === 0 ? "FREE" : formatNaira(deliveryFee)}`
  );
  lines.push(`*Total: ${formatNaira(total)}*`);
  lines.push("");
  lines.push(`*Payment Method:* ${paymentLabels[form.paymentOption]}`);
  if (form.paymentOption === "bank-transfer") {
    lines.push("");
    lines.push(`*Bank Transfer Details (demo):*`);
    lines.push(`Account Name: ${bankDetails.accountName}`);
    bankDetails.banks.forEach((b) => {
      lines.push(`${b.bank}: ${b.accountNumber}`);
    });
  }
  lines.push("");
  lines.push(`Please confirm my order. Thank you!`);
  return lines.join("\n");
}

export function getWhatsAppOrderLink(message: string, phoneNumber = RESTAURANT_WHATSAPP_NUMBER) {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}
