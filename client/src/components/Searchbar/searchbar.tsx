import React from "react";
import "./searchbar.css";

const SearchBar: React.FC = () => {
  return (
    <div className="search-bar-container">
      <h1 className="search-bar-heading">Find Your Perfect Roommate</h1>
      <div className="search-bar-wrapper">
        <input
          type="text"
          className="search-bar-input"
          placeholder="Search by college, interests, or location..."
        />
        <button className="search-bar-button">Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
