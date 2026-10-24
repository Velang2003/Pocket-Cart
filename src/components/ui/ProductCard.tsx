import Button from "./Button";
import StarRating from "./StarRating/StarRating";

export default function ProductCard({
  brand = "brand",
  title = "Product name goes here",
  rating = 2.5,
  reviewCount = 128,
  image = "https://placehold.co/258x200",
  realPrice = 1999,
  discountedPrice = 1299
}) {
  const product = {
    brand,
    title,
    rating,
    reviewCount,
    image,
    realPrice,
    discountedPrice
  };

  return (
    <>
      <div className="productCard">
        <img src={product.image} alt={product.brand} />
        <div>
          <p>{product.brand}</p>
          <p>{product.title}</p>
          <div className="rating">
            <StarRating rating={product.rating} readOnly size={12} />
            <span> 
              {product.rating} ({product.reviewCount})
            </span>
          </div>
          <div className="productPrice">
            <p>
              {discountedPrice.toLocaleString("en-IN", {
                style: "currency",
                currency: "INR",
              })}
            </p>
            <p>
              {realPrice.toLocaleString("en-IN", {
                style: "currency",
                currency: "INR",
              })}
            </p>
          </div>
          <Button props="Ternary" />
        </div>
      </div>
    </>
  );
}
