import React from "react";
import Search from "./Search/Search";
import NavBar from "./DesignSystem/NavBar";

const SearchPage = () => {
  return (
    <div className="app-wrap">
      <div className="app-content">
        <div className="content-wrap">
          <NavBar />
          <div className="search-menu-container">
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
