interface SearchBarProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

function SearchBar({
  value = "",
  onChange,
  placeholder = "Search products, brands and categories",
}: SearchBarProps) {
  return (
    <div className="productSearch">
      <input
        type="text"
        name="search"
        id="search"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
      />
      <button type="submit">Search</button>
    </div>
  );
}

export default SearchBar;

