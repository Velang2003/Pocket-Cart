import "./FilterSidebar.css";

interface FilterOptions {
  category: string[];
  price: { min: number; max: number };
  brand: string[];
  ratings: number[];
}

interface FilterSidebarProps {
  filters?: FilterOptions;
  onChange?: (type: string, value: string | number) => void;
  onClear?: () => void;
}

const DEFAULT_FILTERS: FilterOptions = {
  category: ["Headphones", "Speakers", "Smart Watches", "Cameras"],
  price: { min: 0, max: 50000 },
  brand: ["Brand A", "Brand B", "Brand C"],
  ratings: [4, 3],
};

function FilterSidebar({
  filters = DEFAULT_FILTERS,
  onChange,
  onClear,
}: FilterSidebarProps) {
  return (
    <div className="productFilter">
      <div>
        <h3>Filters</h3>
        <button onClick={onClear}>Clear all</button>
      </div>
      <span />

      <div>
        <h4>Category</h4>
        {filters.category.map((cat) => (
          <label htmlFor={cat} key={cat}>
            <input
              type="checkbox"
              name={cat}
              id={cat}
              onChange={() => onChange?.("category", cat)}
            />
            {cat}
          </label>
        ))}
      </div>
      <span />

      <div>
        <h4>Price</h4>
        <input
          type="range"
          name="price"
          id="price"
          min={filters.price.min}
          max={filters.price.max}
          defaultValue={filters.price.max / 2}
          onChange={(e) => onChange?.("price", Number(e.target.value))}
        />
        <p>
          {filters.price.min.toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
          })}{" "}
          —{" "}
          {filters.price.max.toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
          })}
        </p>
      </div>
      <span />

      <div>
        <h4>Brand</h4>
        {filters.brand.map((brand) => (
          <label htmlFor={brand} key={brand}>
            <input
              type="checkbox"
              name={brand}
              id={brand}
              onChange={() => onChange?.("brand", brand)}
            />
            {brand}
          </label>
        ))}
      </div>
      <span />

      <div>
        <h4>Rating</h4>
        {filters.ratings.map((r) => (
          <label htmlFor={`rating-${r}`} key={r}>
            <input
              type="checkbox"
              name={`rating-${r}`}
              id={`rating-${r}`}
              onChange={() => onChange?.("rating", r)}
            />
            {r}★ &amp; above
          </label>
        ))}
      </div>
    </div>
  );
}

export default FilterSidebar;

