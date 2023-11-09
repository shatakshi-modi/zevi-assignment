import React, { ChangeEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setSeachInput } from "../../redux/actionCreator";
import { RootState } from "../../redux/reducer";

interface Props {
  onInputClick: () => void;
}

const SearchInput = ({ onInputClick }: Props) => {
  const dispatch = useDispatch();
  const { search } = useSelector((state: RootState) => state);
  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSeachInput(e.target.value));
  };
  return (
    <div className="search-input-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search"
        value={search}
        onChange={searchHandler}
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
