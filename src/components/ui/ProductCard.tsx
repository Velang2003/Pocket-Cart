import StarRating from "./StarRating/StarRating"

export default function ProductCard() {
  const product = {
    name: "Wireless Headphones",
    rating: 2.5,
    reviewCount: 128,
  };

  return (
    <div>
      <h3>{product.name}</h3>

      <StarRating rating={product.rating} readOnly size={16} />

      <span>
        {product.rating} ({product.reviewCount})
      </span>
    </div>
  );
}
