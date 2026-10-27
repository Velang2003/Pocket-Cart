import { useQuery } from "@tanstack/react-query";
import { productService } from "../../services/productService";

export const QUERY_KEYS = {
  products: (limit: number, skip: number) => ["products", limit, skip] as const,
  productsByCategory: (cat: string, limit: number, skip: number) =>
    ["products", "category", cat, limit, skip] as const,
  product: (id: number) => ["product", id] as const,
  search: (q: string, limit: number, skip: number) =>
    ["products", "search", q, limit, skip] as const,
  categories: () => ["categories"] as const,
};

export function useProducts(limit = 20, skip = 0) {
  return useQuery({
    queryKey: QUERY_KEYS.products(limit, skip),
    queryFn: () => productService.getProducts(limit, skip),
  });
}

export function useProductsByCategory(category: string, limit = 20, skip = 0) {
  return useQuery({
    queryKey: QUERY_KEYS.productsByCategory(category, limit, skip),
    queryFn: () => productService.getProductsByCategory(category, limit, skip),
    enabled: !!category,
  });
}

export function useProduct(id: number) {
  return useQuery({
    queryKey: QUERY_KEYS.product(id),
    queryFn: () => productService.getProductById(id),
    enabled: !!id,
  });
}

export function useSearchProducts(query: string, limit = 20, skip = 0) {
  return useQuery({
    queryKey: QUERY_KEYS.search(query, limit, skip),
    queryFn: () => productService.searchProducts(query, limit, skip),
    enabled: query.trim().length > 1,
  });
}

export function useCategories() {
  return useQuery({
    queryKey: QUERY_KEYS.categories(),
    queryFn: productService.getCategories,
    staleTime: 1000 * 60 * 60, // categories rarely change — cache 1 hour
  });
}
