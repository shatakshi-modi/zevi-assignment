import React, { LegacyRef } from "react";
import LatestTrendCard from "../DesignSystem/LatestTrendCard";
import { RootState } from "../../redux/reducer";
import { useSelector } from "react-redux";
import { DataInterface } from "../utils";

interface Props {
  //   menuRef: LegacyRef<HTMLDivElement>;
  onItemClick: (item: string) => void;
}
const SearchMenu = ({ onItemClick }: Props) => {
  const { search, data: menuData } = useSelector((state: RootState) => state);

  const latestData = menuData
    .slice(0, 5)
    .filter((e: DataInterface) =>
      search == "" ? true : e.caption.includes(search)
    );
  const popularSuggestionData = menuData
    .slice(-5)
    .filter((e: DataInterface) =>
      search == "" ? true : e.caption.includes(search)
    );

  console.log(menuData);

  if (latestData.length > 0 || popularSuggestionData.length > 0) {
    return (
      <div className="menu-container">
        {latestData.length > 0 && (
          <>
            <h2>Latest Trends</h2>
            <div className="menu-items">
              {latestData.map((item: DataInterface, index: number) => (
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
          </>
        )}
        {popularSuggestionData.length > 0 && (
          <>
            <h2>Popular suggestions</h2>
            <div className="popular-suggestions">
              {popularSuggestionData.map(
                (item: DataInterface, index: number) => (
                  <button
                    key={index}
                    className="popular-suggestions-btn"
                    onClick={() => onItemClick(item.caption)}
                  >
                    {item.caption}
                  </button>
                )
              )}
            </div>
          </>
        )}
      </div>
    );
  } else return null;
};

export default SearchMenu;
