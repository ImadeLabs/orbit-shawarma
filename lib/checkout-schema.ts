import { z } from "zod";

export const checkoutSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  phone: z
    .string()
    .min(10, "Enter a valid phone number")
    .regex(/^[0-9+\s-]+$/, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email address"),
  address: z.string().optional(),
  landmark: z.string().optional(),
  notes: z.string().optional(),
  deliveryOption: z.enum(["pickup", "delivery"]),
  paymentOption: z.enum(["pay-on-delivery", "bank-transfer", "online-payment"]),
}).superRefine((data, ctx) => {
  if (data.deliveryOption === "delivery" && (!data.address || data.address.trim().length < 5)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Delivery address is required for home delivery",
      path: ["address"],
    });
  }
});

export type CheckoutSchema = z.infer<typeof checkoutSchema>;
