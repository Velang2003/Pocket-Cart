import type { CartItem } from "./cartService";

export interface OrderAddress {
  fullName: string;
  mobile: string;
  pincode: string;
  addressLine1: string;
  city: string;
  state: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  address: OrderAddress;
  paymentMethod: string;
  subTotal: number;
  gst: number;
  shipping: number;
  total: number;
  status: "processing" | "shipped" | "delivered" | "cancelled";
  placedAt: string; // ISO string
}

const ORDER_KEY = "pocket_cart_orders";

export const orderService = {
  getAll: (): Order[] => {
    try {
      return JSON.parse(localStorage.getItem(ORDER_KEY) ?? "[]");
    } catch {
      return [];
    }
  },

  save: (order: Order): void => {
    const orders = orderService.getAll();
    orders.unshift(order);
    localStorage.setItem(ORDER_KEY, JSON.stringify(orders));
  },

  generateId: (): string =>
    `ORD-${Date.now().toString(36).toUpperCase()}`,
};
