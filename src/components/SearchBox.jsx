import React from "react";

const SearchBox = ({ searchQuery }) => {
  return (
    <div className="pa2">
      <input
        onChange={searchQuery}
        name="search"
        className="pa3 ba b--green bg-lightest-blue"
        type="text"
        placeholder="search robots"
      />
    </div>
  );
};

export default SearchBox;
