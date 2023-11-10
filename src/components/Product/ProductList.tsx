import React, { useEffect } from "react";
import { RootState } from "../../redux/reducer";
import { useSelector } from "react-redux";
import { DataInterface } from "../utils";
import ProductCard from "../DesignSystem/ProductCard";

type Props = {};

const ProductList = (props: Props) => {
  const {
    search,
    data: menuData,
    searchValue,
    filter,
  } = useSelector((state: RootState) => state);

  const menuFilteredData = menuData.filter((item: DataInterface) => {
    const brandFilter =
      !filter["brand"] ||
      filter["brand"].length === 0 ||
      filter["brand"].includes(item.brand);

    const ratingFilter =
      !filter["rating"] ||
      filter["rating"].length === 0 ||
      filter["rating"].includes(item.starRating);
    console.log(typeof item.starRating);

    const priceFilter =
      !filter["price"] ||
      filter["price"].length === 0 ||
      filter["price"].some((priceOption: string) => {
        switch (priceOption) {
          case "price_Under_500":
            return item.newPrice < 500;
          case "price_500_1000":
            return item.newPrice >= 500 && item.newPrice <= 1000;
          default:
            return true;
        }
      });

    return (
      (item.caption.includes(searchValue) || searchValue === "") &&
      brandFilter &&
      ratingFilter &&
      priceFilter
    );
  });

  return (
    <div className="product-grid-list">
      {menuFilteredData.map((e: DataInterface) => (
        <ProductCard {...e} />
      ))}
    </div>
  );
};

export default ProductList;
