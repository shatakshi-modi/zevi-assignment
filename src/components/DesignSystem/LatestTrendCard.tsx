import React from "react";

interface LatestTrendCard {
  imageUrl: string;
  caption: string;
}

const LatestTrendCard = ({ imageUrl, caption }: LatestTrendCard) => {
  return (
    <div className="lastest-trend-container">
      <img src={imageUrl} />
      <figcaption>{caption}</figcaption>
    </div>
  );
};

export default LatestTrendCard;
