import React, { useState, useEffect, useRef } from "react";
import SearchInput from "./SearchInput";
import SearchMenu from "./SearchMenu";

const Search = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);

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
