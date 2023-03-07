import React from "react";
import "./search.css";
import close from "../../assets/close.png";
const Search_Lab = () => {
  return (
    <div class="searchBar">
      <input
        id="searchQueryInput"
        type="text"
        name="searchQueryInput"
        placeholder="Search"
        value=""
      />
      <img src={close} alt="cancel" />
    </div>
  );
};
export default Search_Lab;
