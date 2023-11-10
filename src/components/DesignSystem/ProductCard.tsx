import React from "react";
import { DataInterface, renderStars } from "../utils";

const ProductCard = ({
  caption,
  imageUrl,
  oldPrice,
  newPrice,
  starRating,
  brand,
}: DataInterface) => {
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={caption} />
      <figcaption>{caption}</figcaption>
      <div className="price">
        <span className="old-price">{`$${oldPrice}`}</span>
        <span className="new-price">{`$${newPrice}`}</span>
      </div>
      <div className="rating">{renderStars(Number(starRating))}</div>
    </div>
  );
};

export default ProductCard;
