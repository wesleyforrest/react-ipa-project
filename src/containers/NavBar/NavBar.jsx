import React from "react";
import "./NavBar.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import FiltersList from "../../components/FiltersList/FiltersList";

const NavBar = (props) => {
  const { handleSubmit, selectByFilter } = props;
  return (
    <div className="nav-bar">
      <SearchBox handleSubmit={handleSubmit} />
      <FiltersList selectByFilter={selectByFilter} />
    </div>
  );
};
export default NavBar;
