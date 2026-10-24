import Button from "../../components/ui/Button";
import StarRating from "../../components/ui/StarRating/StarRating";

interface ProductVarient {
  brand: string,
  title: string,
  rating: number,
  reviewCount: number,
  image: string,
  realPrice: number,
  discountedPrice: number
}

export default function ProductCard({
  brand = "brand",
  title = "Product name goes here",
  rating = 2.5,
  reviewCount = 128,
  image = "https://placehold.co/258x200",
  realPrice = 1999,
  discountedPrice = 1299
}:ProductVarient) {
 

  return (
    <>
      <div className="productCard">
        <img src={image} alt={brand} />
        <div>
          <p>{brand}</p>
          <p>{title}</p>
          <div className="rating">
            <StarRating rating={rating} readOnly size={12} />
            <span> 
              {rating} ({reviewCount})
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
          <Button varient="Ternary" />
        </div>
      </div>
    </>
  );
}
