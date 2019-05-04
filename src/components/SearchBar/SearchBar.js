import React from "react";

const SearchBar = ({ update, search }) => {
  return (
    <div>
      <br />
      <div className="ui massive icon input">
        <input
          type="text"
          placeholder="Search..."
          onChange={update}
          onKeyUp={search}
          //   onKeyPress={searchArticles}
        />
        <i aria-hidden="true" className="search icon" />
      </div>
    </div>
  );
};

export default SearchBar;
