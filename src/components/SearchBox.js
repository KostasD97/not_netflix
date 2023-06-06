import React from "react";

const SearchBox = (props) => {
  return (
    <div className="col col-sm-4">
      <input
        className="form-control"
        value={props.value}
        // anytime something changes it pops the new movie
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder="Type to Search..."
      ></input>
    </div>
  );
};

export default SearchBox;
