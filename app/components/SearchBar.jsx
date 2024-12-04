import React from "react";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a city..."
        className="search-input"
      />
      <button className="search-button">Search</button>
    </div>
  );
};

export default SearchBar;
