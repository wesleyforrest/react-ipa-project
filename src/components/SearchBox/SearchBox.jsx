import React from "react";
import CardList from "../CardList/CardList";
import NavBar from "../../containers/NavBar/NavBar";

const SearchBox = (props) => {
  const { handleSubmit, beers } = props;
  console.log("SEARCHBOX", beers);

  return (
    <div className="search-box">
      <input type="text" placeholder="Search..." onChange={handleSubmit} />
    </div>
  );
};

export default SearchBox;
