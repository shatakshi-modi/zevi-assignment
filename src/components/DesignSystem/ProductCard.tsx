import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { DataInterface, renderStars } from "../utils";

const ProductCard = ({
  caption,
  imageUrl,
  oldPrice,
  newPrice,
  starRating,
  brand,
}: DataInterface) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="product-card-container">
      {isLiked ? (
        <FontAwesomeIcon
          icon={faHeart}
          className="heart-icon liked"
          onClick={handleLikeClick}
        />
      ) : (
        <FontAwesomeIcon
          icon={faHeart}
          className="heart-icon"
          onClick={handleLikeClick}
        />
      )}
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
