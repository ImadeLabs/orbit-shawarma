export type CategorySlug =
  | "shawarma"
  | "burgers"
  | "fries"
  | "drinks"
  | "extras";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: CategorySlug;
  image: string;
  rating: number;
  reviewCount: number;
  isPopular?: boolean;
  isBestSeller?: boolean;
  isSpicy?: boolean;
  isNew?: boolean;
  calories?: number;
}

export interface CartLine {
  id: string;
  menuItem: MenuItem;
  quantity: number;
  notes?: string;
}

export type DeliveryOption = "pickup" | "delivery";
export type PaymentOption = "pay-on-delivery" | "bank-transfer" | "online-payment";

export interface CheckoutFormData {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  landmark?: string;
  notes?: string;
  deliveryOption: DeliveryOption;
  paymentOption: PaymentOption;
}

export type OrderStatus =
  | "received"
  | "preparing"
  | "cooking"
  | "ready"
  | "rider-assigned"
  | "on-the-way"
  | "delivered"
  | "cancelled";

export interface Order {
  id: string;
  orderNumber: string;
  customerName: string;
  phone: string;
  items: CartLine[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  status: OrderStatus;
  deliveryOption: DeliveryOption;
  paymentOption: PaymentOption;
  createdAt: string;
  estimatedDelivery: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

export interface Address {
  id: string;
  label: string;
  address: string;
  landmark?: string;
  isDefault?: boolean;
}
