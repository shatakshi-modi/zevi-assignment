import Filter from "./Filter";
import ProductList from "./ProductList";

const Product = () => {
  return (
    <div className="product-content-container">
      <h2>Search Results</h2>
      <div className="product-result">
        <div>
          <Filter />
        </div>
        <div>
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Product;
