import React from "react";
import { DataInterface } from "../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

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
        stars.push(
          <span key={i}>
            <FontAwesomeIcon
              icon={faStar}
              size="2xs"
              style={{ color: "#ffd700" }}
            />
          </span>
        );
      } else {
        stars.push(
          <span key={i}>
            <FontAwesomeIcon
              icon={faStar}
              size="2xs"
              style={{ color: "#000000" }}
            />
          </span>
        );
      }
    }
    return stars;
  };

  return (
    <div className="product-card-container">
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
