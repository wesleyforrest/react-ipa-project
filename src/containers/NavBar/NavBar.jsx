import React from "react";
import "./NavBar.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import FiltersList from "../../components/FiltersList/FiltersList";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <SearchBox />
      <FiltersList />
    </div>
  );
};
export default NavBar;
