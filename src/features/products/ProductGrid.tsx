import ProductCard from "./ProductCard";

type GridView = "grid" | "list";

interface Product {
  brand: string;
  title: string;
  rating: number;
  reviewCount: number;
  image: string;
  realPrice: number;
  discountedPrice: number;
}

interface ProductGridProps {
  products?: Product[];
  view?: GridView;
}

const DUMMY_PRODUCTS: Product[] = [
  {
    brand: "Brand A",
    title: "Wireless Headphones Pro",
    rating: 4.2,
    reviewCount: 318,
    image: "https://placehold.co/258x200",
    realPrice: 3999,
    discountedPrice: 2499,
  },
  {
    brand: "Brand B",
    title: "Smart Watch Series 5",
    rating: 3.8,
    reviewCount: 210,
    image: "https://placehold.co/258x200",
    realPrice: 4999,
    discountedPrice: 3999,
  },
];

function ProductGrid({ products = DUMMY_PRODUCTS, view = "grid" }: ProductGridProps) {
  return (
    <div className={`productGrid productGrid--${view}`}>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;

