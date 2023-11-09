import React, { ChangeEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setSeachInput, setSearchValue } from "../../redux/actionCreator";
import { RootState } from "../../redux/reducer";
import { useNavigate } from "react-router-dom";

interface Props {
  onInputClick: () => void;
  size?: "normal" | "small";
}

const SearchInput = ({ onInputClick, size = "normal" }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { search } = useSelector((state: RootState) => state);
  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSeachInput(e.target.value));
  };
  const onSearch = () => {
    dispatch(setSearchValue(search));
    navigate("/search");
  };
  const inputClassName =
    size == "small" ? "search-input-small" : "search-input";

  return (
    <div className="search-input-container">
      <input
        type="text"
        className={inputClassName}
        placeholder="Search"
        onClick={onInputClick}
        onChange={searchHandler}
      />
      <button type="submit" className="search-icon" onClick={onSearch}>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ color: "#200e32" }}
          size={size == "small" ? "lg" : "2xl"}
          opacity={0.26}
        />
      </button>
    </div>
  );
};

export default SearchInput;
