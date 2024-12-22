import React from "react";
import "../assets/styles/_inputs.scss";
import search from "../../public/images/search.svg";

const Search = () => {
  return (
    <form className="search">
      <input
        type="text"
        // value={query}
        // onChange={handleInputChange}
        placeholder="بحث...  "
        className="search-txt"
      />

      <a className="search-btn" href="#">
        <img src={search} alt="" />
      </a>
      
    </form>
  );
};

export default Search;
