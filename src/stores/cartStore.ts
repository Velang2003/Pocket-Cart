import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { DummyProduct } from "../services/productService";
import { USD_TO_INR } from "../services/productService";

export interface CartItem {
  product: DummyProduct;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (product: DummyProduct, qty?: number) => void;
  removeItem: (productId: number) => void;
  updateQty: (productId: number, qty: number) => void;
  clearCart: () => void;
  totalItems: () => number;
  subTotalINR: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product, qty = 1) => {
        set((state) => {
          const existing = state.items.find((i) => i.product.id === product.id);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.product.id === product.id
                  ? { ...i, quantity: Math.min(i.quantity + qty, product.stock) }
                  : i
              ),
            };
          }
          return { items: [...state.items, { product, quantity: qty }] };
        });
      },

      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter((i) => i.product.id !== productId),
        }));
      },

      updateQty: (productId, qty) => {
        set((state) => ({
          items: state.items.map((i) =>
            i.product.id === productId ? { ...i, quantity: qty } : i
          ),
        }));
      },

      clearCart: () => set({ items: [] }),

      totalItems: () => get().items.reduce((sum, i) => sum + i.quantity, 0),

      subTotalINR: () =>
        get().items.reduce((sum, i) => {
          const priceINR = Math.round(i.product.price * USD_TO_INR);
          const discounted = Math.round(
            priceINR * (1 - i.product.discountPercentage / 100)
          );
          return sum + discounted * i.quantity;
        }, 0),
    }),
    { name: "pocket_cart_items" }
  )
);
