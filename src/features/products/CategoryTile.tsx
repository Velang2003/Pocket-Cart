interface Category {
  id: string;
  name: string;
  image?: string;
}

interface CategoryTileProps {
  category?: Category;
  onClick?: (category: Category) => void;
}

const DEFAULT_CATEGORY: Category = {
  id: "electronics",
  name: "Electronics",
  image: "https://placehold.co/80x80",
};

function CategoryTile({
  category = DEFAULT_CATEGORY,
  onClick,
}: CategoryTileProps) {
  return (
    <div
      className="categoryTile"
      onClick={() => onClick?.(category)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick?.(category)}
    >
      {category.image && <img src={category.image} alt={category.name} />}
      <p>{category.name}</p>
    </div>
  );
}

export default CategoryTile;
