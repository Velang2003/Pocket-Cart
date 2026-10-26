interface ProductGalleryProps {
  images?: string[];
}

function ProductGallery({
  images = [
    "https://placehold.co/400x400",
    "https://placehold.co/400x400",
    "https://placehold.co/400x400",
  ],
}: ProductGalleryProps) {
  return (
    <div className="productGallery">
      <img
        src={images[0]}
        alt="Product main view"
        className="productGallery__main"
      />
      <div className="productGallery__thumbs">
        {images.map((src, i) => (
          <img key={i} src={src} alt={`Product view ${i + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default ProductGallery;
