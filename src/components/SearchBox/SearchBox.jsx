import React from "react";
import "./SearchBox.scss";

const SearchBox = (props) => {
  const { handleSubmit } = props;
  console.log(handleSubmit);

  return (
    <div className="search-box">
      <input type="text" placeholder="Search..." onInput={handleSubmit} />
    </div>
  );
};

export default SearchBox;
