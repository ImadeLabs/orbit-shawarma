import type { Order, OrderStatus } from "@/lib/types";

export const salesOverview = {
  daily: 284500,
  weekly: 1826000,
  monthly: 7420500,
  totalOrders: 1248,
  pendingOrders: 14,
};

export const revenueChart = [
  { day: "Mon", revenue: 210000 },
  { day: "Tue", revenue: 185000 },
  { day: "Wed", revenue: 240000 },
  { day: "Thu", revenue: 198000 },
  { day: "Fri", revenue: 320000 },
  { day: "Sat", revenue: 410000 },
  { day: "Sun", revenue: 284500 },
];

export const bestSellingProducts = [
  { name: "Chicken Shawarma", sold: 482, revenue: 1687000 },
  { name: "Loaded Fries", sold: 356, revenue: 1139200 },
  { name: "Mixed Shawarma", sold: 298, revenue: 1341000 },
  { name: "Cheese Burger", sold: 241, revenue: 867600 },
  { name: "Beef Shawarma", sold: 219, revenue: 832200 },
];

export const customerGrowth = [
  { month: "Feb", customers: 320 },
  { month: "Mar", customers: 410 },
  { month: "Apr", customers: 468 },
  { month: "May", customers: 540 },
  { month: "Jun", customers: 612 },
  { month: "Jul", customers: 705 },
];

export interface AdminOrder {
  id: string;
  orderNumber: string;
  customer: string;
  phone: string;
  items: number;
  total: number;
  status: OrderStatus;
  createdAt: string;
}

export const adminOrders: AdminOrder[] = [
  { id: "1", orderNumber: "ORB-0709-4821", customer: "Chidinma Adeyemi", phone: "+234 802 123 4567", items: 3, total: 12400, status: "received", createdAt: "2026-07-09 10:24" },
  { id: "2", orderNumber: "ORB-0709-3312", customer: "Emeka Obi", phone: "+234 803 222 1190", items: 2, total: 8200, status: "preparing", createdAt: "2026-07-09 10:10" },
  { id: "3", orderNumber: "ORB-0709-9910", customer: "Fatima Bello", phone: "+234 805 771 2244", items: 5, total: 21500, status: "cooking", createdAt: "2026-07-09 09:58" },
  { id: "4", orderNumber: "ORB-0709-1187", customer: "Tunde Kalu", phone: "+234 701 934 8821", items: 1, total: 3800, status: "ready", createdAt: "2026-07-09 09:42" },
  { id: "5", orderNumber: "ORB-0709-6654", customer: "Ngozi Eze", phone: "+234 809 456 7712", items: 4, total: 15900, status: "rider-assigned", createdAt: "2026-07-09 09:30" },
  { id: "6", orderNumber: "ORB-0709-2298", customer: "Bola Sanni", phone: "+234 706 112 9834", items: 2, total: 7600, status: "on-the-way", createdAt: "2026-07-09 09:15" },
  { id: "7", orderNumber: "ORB-0708-8871", customer: "Yusuf Aliyu", phone: "+234 812 665 1123", items: 3, total: 11200, status: "delivered", createdAt: "2026-07-08 19:50" },
  { id: "8", orderNumber: "ORB-0708-4432", customer: "Grace Ibe", phone: "+234 813 998 4471", items: 1, total: 3500, status: "cancelled", createdAt: "2026-07-08 18:22" },
];

export const orderStatusColumns: { status: OrderStatus; label: string }[] = [
  { status: "received", label: "Pending" },
  { status: "preparing", label: "Preparing" },
  { status: "cooking", label: "Cooking" },
  { status: "on-the-way", label: "Out for Delivery" },
  { status: "delivered", label: "Delivered" },
  { status: "cancelled", label: "Cancelled" },
];

export interface AdminProduct {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  lowStockThreshold: number;
  image: string;
  status: "active" | "draft";
}

export const adminProducts: AdminProduct[] = [
  { id: "chicken-shawarma", name: "Chicken Shawarma", category: "Shawarma", price: 3500, stock: 48, lowStockThreshold: 15, image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=200&auto=format&fit=crop&q=60", status: "active" },
  { id: "beef-shawarma", name: "Beef Shawarma", category: "Shawarma", price: 3800, stock: 32, lowStockThreshold: 15, image: "https://images.unsplash.com/photo-1633436375153-d7045cb93e38?w=200&auto=format&fit=crop&q=60", status: "active" },
  { id: "cheese-burger", name: "Cheese Burger", category: "Burgers", price: 3600, stock: 8, lowStockThreshold: 15, image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=200&auto=format&fit=crop&q=60", status: "active" },
  { id: "loaded-fries", name: "Loaded Fries", category: "Fries", price: 3200, stock: 5, lowStockThreshold: 10, image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=200&auto=format&fit=crop&q=60", status: "active" },
  { id: "coca-cola", name: "Coca-Cola", category: "Drinks", price: 700, stock: 120, lowStockThreshold: 30, image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=200&auto=format&fit=crop&q=60", status: "active" },
  { id: "juice", name: "Juice", category: "Drinks", price: 1200, stock: 0, lowStockThreshold: 10, image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=200&auto=format&fit=crop&q=60", status: "draft" },
];

export const adminCategories = [
  { id: "shawarma", name: "Shawarma", products: 5 },
  { id: "burgers", name: "Burgers", products: 3 },
  { id: "fries", name: "Fries", products: 4 },
  { id: "drinks", name: "Drinks", products: 7 },
  { id: "extras", name: "Extras", products: 6 },
];

export const adminCustomers = [
  { id: "c1", name: "Chidinma Adeyemi", email: "chidinma@example.com", phone: "+234 802 123 4567", orders: 24, totalSpent: 186400, joined: "2025-11-02" },
  { id: "c2", name: "Emeka Obi", email: "emeka@example.com", phone: "+234 803 222 1190", orders: 18, totalSpent: 142200, joined: "2025-12-14" },
  { id: "c3", name: "Fatima Bello", email: "fatima@example.com", phone: "+234 805 771 2244", orders: 31, totalSpent: 231800, joined: "2025-09-28" },
  { id: "c4", name: "Tunde Kalu", email: "tunde@example.com", phone: "+234 701 934 8821", orders: 9, totalSpent: 58200, joined: "2026-02-19" },
  { id: "c5", name: "Ngozi Eze", email: "ngozi@example.com", phone: "+234 809 456 7712", orders: 15, totalSpent: 98700, joined: "2026-01-05" },
];

export const adminCoupons = [
  { id: "co1", code: "WELCOME10", type: "percentage" as const, value: 10, uses: 320, active: true, expiresAt: "2026-08-31" },
  { id: "co2", code: "FREE500", type: "fixed" as const, value: 500, uses: 154, active: true, expiresAt: "2026-07-31" },
  { id: "co3", code: "SHAWARMA20", type: "percentage" as const, value: 20, uses: 89, active: false, expiresAt: "2026-06-15" },
];

export const adminNotifications = [
  { id: "n1", type: "order" as const, title: "New Order Received", description: "Order ORB-0709-4821 placed by Chidinma Adeyemi", time: "2 min ago", read: false },
  { id: "n2", type: "stock" as const, title: "Low Stock Alert", description: "Loaded Fries stock is down to 5 units", time: "18 min ago", read: false },
  { id: "n3", type: "message" as const, title: "Customer Message", description: "Bola Sanni asked about delivery time for order ORB-0709-2298", time: "1 hour ago", read: false },
  { id: "n4", type: "stock" as const, title: "Out of Stock", description: "Juice is now out of stock", time: "3 hours ago", read: true },
  { id: "n5", type: "order" as const, title: "New Order Received", description: "Order ORB-0709-3312 placed by Emeka Obi", time: "5 hours ago", read: true },
];
