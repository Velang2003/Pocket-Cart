import Button from "../../components/ui/Button";
import Rating from "../../components/ui/Rating/Rating";

interface Product {
  brand: string;
  title: string;
  rating: number;
  reviewCount: number;
  image: string;
  realPrice: number;
  discountedPrice: number;
}

interface ProductCardProps {
  product?: Product;
  onAdd?: (product: Product) => void;
}

const DEFAULT_PRODUCT: Product = {
  brand: "Brand",
  title: "Product name goes here",
  rating: 2.5,
  reviewCount: 128,
  image: "https://placehold.co/258x200",
  realPrice: 1999,
  discountedPrice: 1299,
};

function ProductCard({ product = DEFAULT_PRODUCT, onAdd }: ProductCardProps) {
  return (
    <div className="productCard">
      <img src={product.image} alt={product.brand} />
      <div>
        <p>{product.brand}</p>
        <p>{product.title}</p>
        <div className="rating">
          <Rating value={product.rating} count={product.reviewCount} readOnly size={12} />
        </div>
        <div className="productPrice">
          <p>
            {product.discountedPrice.toLocaleString("en-IN", {
              style: "currency",
              currency: "INR",
            })}
          </p>
          <p>
            {product.realPrice.toLocaleString("en-IN", {
              style: "currency",
              currency: "INR",
            })}
          </p>
        </div>
        <Button variant="cta" label="Add to cart" onClick={() => onAdd?.(product)} />
      </div>
    </div>
  );
}

export default ProductCard;
