import type { DummyProduct } from "./productService";

export interface CartItem {
  product: DummyProduct;
  quantity: number;
}

const CART_KEY = "pocket_cart_items";

export const cartService = {
  load: (): CartItem[] => {
    try {
      return JSON.parse(localStorage.getItem(CART_KEY) ?? "[]");
    } catch {
      return [];
    }
  },

  save: (items: CartItem[]): void => {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
  },

  clear: (): void => {
    localStorage.removeItem(CART_KEY);
  },
};
