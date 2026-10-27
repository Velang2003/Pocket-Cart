import { http } from "./http";

export interface DummyProduct {
  id: number;
  title: string;
  description: string;
  price: number;        // USD — we display as ₹ with a multiplier
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  tags: string[];
}

export interface ProductsResponse {
  products: DummyProduct[];
  total: number;
  skip: number;
  limit: number;
}

export interface Category {
  slug: string;
  name: string;
  url: string;
}

// DummyJSON prices are in USD. Multiply by 83 to show INR.
export const USD_TO_INR = 83;

export function toINR(usd: number): number {
  return Math.round(usd * USD_TO_INR);
}

export const productService = {
  getProducts: (limit = 20, skip = 0) =>
    http.get<ProductsResponse>(`/products?limit=${limit}&skip=${skip}&select=id,title,price,discountPercentage,rating,stock,brand,category,thumbnail`),

  getProductsByCategory: (category: string, limit = 20, skip = 0) =>
    http.get<ProductsResponse>(`/products/category/${category}?limit=${limit}&skip=${skip}`),

  getProductById: (id: number) =>
    http.get<DummyProduct>(`/products/${id}`),

  searchProducts: (query: string, limit = 20, skip = 0) =>
    http.get<ProductsResponse>(`/products/search?q=${encodeURIComponent(query)}&limit=${limit}&skip=${skip}`),

  getCategories: () =>
    http.get<Category[]>("/products/categories"),
};
