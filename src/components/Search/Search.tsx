import React, { useState, useEffect, useRef } from "react";
import SearchInput from "./SearchInput";
import SearchMenu from "./SearchMenu";
import { generateFakeData } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../redux/actionCreator";
import { RootState } from "../../redux/reducer";

const Search = () => {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { data } = useSelector((state: RootState) => state);
  const [selectedMenuItem, setSelectedMenuItem] = useState<string | null>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!data.length) {
      const data = generateFakeData(1000);
      dispatch(setData(data));
    }
  }, []);

  const handleInputClick = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleMenuItemClick = (menuItem: string) => {
    setSelectedMenuItem(menuItem);
    handleMenuClose();
  };

  return (
    <div className="search-container" ref={menuRef}>
      <SearchInput onInputClick={handleInputClick} />
      {isMenuOpen && <SearchMenu onItemClick={handleMenuItemClick} />}
    </div>
  );
};

export default Search;
