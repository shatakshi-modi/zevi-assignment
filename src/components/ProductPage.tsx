import React from "react";
import NavBar from "./DesignSystem/NavBar";
import SearchInput from "./DesignSystem/SearchInput";
import Product from "./Product/Product";

const ProductPage = () => {
  return (
    <div className="product-container">
      <div className="product-nav-container">
        <div className="product-nav">
          <NavBar isProduct={true} />
        </div>

        <SearchInput onInputClick={() => {}} size="small" />
        <div></div>
      </div>
      <div>
        <Product />
      </div>
    </div>
  );
};

export default ProductPage;
