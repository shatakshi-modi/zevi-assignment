import React, { LegacyRef } from "react";
import LatestTrendCard from "./LatestTrendCard";
import { generateFakeData } from "../utils";

interface Props {
  //   menuRef: LegacyRef<HTMLDivElement>;
  onItemClick: (item: string) => void;
}
const SearchMenu = ({ onItemClick }: Props) => {
  const menuItems = ["Item 1", "Item 2", "Item 3", " hfgjhf", "hvhjg"]; // Add your menu items
  const menuData = generateFakeData(10);
  console.log(menuData);

  return (
    <div className="menu-container">
      <h2>Latest Trends</h2>
      <div className="menu-items">
        {menuData
          .slice(0, 5)
          .map((item: { imageUrl: string; caption: string }, index) => (
            <button
              key={index}
              className="menu-btn"
              onClick={() => onItemClick(item.caption)}
            >
              <LatestTrendCard
                imageUrl={item.imageUrl}
                caption={item.caption}
              />
            </button>
          ))}
      </div>
      <h2>Popular suggestions</h2>
      <div className="popular-suggestions">
        {menuData.slice(-5).map((item: { caption: string }, index) => (
          <button
            key={index}
            className="popular-suggestions-btn"
            onClick={() => onItemClick(item.caption)}
          >
            {item.caption}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchMenu;
