import "./ProductFilter.css"

function ProductFilter() {
  return (
    <div className="productFilter">
      <div>
        <h3>Filters</h3>
        <button>Clear all</button>
      </div>
      <span></span>
      <div>
        <h4>Category</h4>
        <label htmlFor="category1">
          <input type="checkbox" name="category" id="category1" />
          Headphones
        </label>
        <label htmlFor="category2">
          <input type="checkbox" name="category" id="category2" />
          Speakers
        </label>
        <label htmlFor="category3">
          <input type="checkbox" name="category" id="category3" />
          Smart Watches
        </label>
        <label htmlFor="category4">
          <input type="checkbox" name="category" id="category4" />
          Cameras
        </label>
      </div>
      <span></span>
      <div>
        <h4>Price</h4>
        <input type="range" name="price" id="price" min={0} max={50000} />
        <p>0 - 50000</p>
      </div>
      <span></span>
      <div>
        <h4>Brand</h4>
        <label htmlFor="brand1">
          <input type="checkbox" name="brand" id="brand1" />
          Brand 1
        </label>
        <label htmlFor="brand2">
          <input type="checkbox" name="brand" id="brand2" />
          Brand 2
        </label>
        <label htmlFor="brand3">
          <input type="checkbox" name="brand" id="brand3" />
          brand 3
        </label>
        <label htmlFor="brand4">
          <input type="checkbox" name="brand" id="brand4" />
          brand 4
        </label>
      </div>
      <span></span>
      <div>
        <h4>Rating</h4>
        <label htmlFor="rating1">
          <input type="checkbox" name="rating" id="rating1" />
          Rating 1
        </label>
        <label htmlFor="rating2">
          <input type="checkbox" name="rating" id="rating2" />
          Rating 2
        </label>
        <label htmlFor="rating3">
          <input type="checkbox" name="rating" id="rating3" />
          Rating 3
        </label>
        <label htmlFor="rating4">
          <input type="checkbox" name="rating" id="rating4" />
          Rating 4
        </label>
      </div>
    </div>
  );
}

export default ProductFilter