import React from "react";
import { DataInterface } from "../utils";

const ProductCard = ({
  caption,
  imageUrl,
  oldPrice,
  newPrice,
  starRating,
  brand,
}: DataInterface) => {
  const renderStars = (starRating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= starRating) {
        stars.push(<span key={i}>&#9733;</span>);
      } else {
        stars.push(<span key={i}>&#9734;</span>);
      }
    }
    return stars;
  };

  return (
    <div className="latest-trend-card">
      <img src={imageUrl} alt={caption} />
      <figcaption>{caption}</figcaption>
      <div className="price">
        <span className="old-price">{`$${oldPrice}`}</span>
        <span className="new-price">{`$${newPrice}`}</span>
      </div>
      <div className="rating">{renderStars(starRating)}</div>
    </div>
  );
};

export default ProductCard;
