import React from "react";

const Search = props => {
  return (
    <input
      type="text"
      placeholder="search rapper"
      value={props.searchTerm}
      onChange={props.changeHandler}
    />
  );
};

export default Search;
