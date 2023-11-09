import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

interface Props {
  onInputClick: () => void;
}

const SearchInput = ({ onInputClick }: Props) => {
  return (
    <div className="search-input-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search"
        onClick={onInputClick}
      />
      <button type="submit" className="search-icon">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ color: "#200e32" }}
          size="2xl"
          opacity={0.26}
        />
      </button>
    </div>
  );
};

export default SearchInput;
