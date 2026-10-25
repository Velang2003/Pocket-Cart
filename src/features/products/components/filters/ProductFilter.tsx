import "./ProductFilter.css"

interface filerVarient {
  category: string[];
  price: {
    min: number;
    max: number;
  };
  brand: string[];
  ratings: number[];
}

function ProductFilter() {
    const dummyProduct: filerVarient = {
      category: ["Headphones", "Speakers", "Smart Watches", "Cameras"],
      price: { min: 0, max: 10000 },
      brand: ["brand1", "brand2", "brand3"],
      ratings: [5, 4, 3],
    };

    const categoryComponent = dummyProduct.category.map((category, index)=>{
        return(
            <label htmlFor={category} key={category}>
                <input type="checkbox" name={category} id={category}/>
                {category}
            </label>
        )
    })
    const brandComponent = dummyProduct.brand.map((brand, index)=>{
        return(
            <label htmlFor={brand} key={brand}>
                <input type="checkbox" name={brand} id={brand}/>
                {brand}
            </label>
        )
    })
    const ratingsComponent = dummyProduct.ratings.map((ratings, index) => {
      return (
        <label htmlFor={`${ratings}`} key={ratings}>
          <input type="checkbox" name={`${ratings}`} id={`${ratings}`} />
          {ratings} star rating and above
        </label>
      );
    });

  return (
    <div className="productFilter">
      <div>
        <h3>Filters</h3>
        <button>Clear all</button>
      </div>
      <span></span>
      <div>
        <h4>Category</h4>
        {categoryComponent}
      </div>
      <span></span>
      <div>
        <h4>Price</h4>
        <input
          type="range"
          name="price"
          id="price"
          min={dummyProduct.price.min}
          max={dummyProduct.price.max}
          defaultValue={5000}
        />
        <p>
          {dummyProduct.price.min.toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
          })}{" "}
          -{" "}
          {dummyProduct.price.max.toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
          })}
        </p>
      </div>
      <span></span>
      <div>
        <h4>Brand</h4>
        {brandComponent}
      </div>
      <span></span>
      <div>
        <h4>Rating</h4>
        {ratingsComponent}
      </div>
    </div>
  );
}

export default ProductFilter