import React from "react";
import { RootState } from "../../redux/reducer";
import { useSelector } from "react-redux";
import { setSearchValue } from "../../redux/actionCreator";
import { DataInterface } from "../utils";
import ProductCard from "../DesignSystem/ProductCard";

type Props = {};

const ProductList = (props: Props) => {
  const {
    search,
    data: menuData,
    searchValue,
  } = useSelector((state: RootState) => state);

  return (
    <div className="product-grid-list">
      {menuData
        .filter(
          (e: DataInterface) =>
            e.caption.includes(searchValue) || e.brand.includes(searchValue)
        )
        .map((e: DataInterface) => (
          <ProductCard {...e} />
        ))}
    </div>
  );
};

export default ProductList;
