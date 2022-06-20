import React from "react";
import "./NavBar.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import FiltersList from "../../components/FiltersList/FiltersList";

const NavBar = (props) => {
  const { handleSubmit, filteredByAcidity, filteredByAbv, filteredByClassic } =
    props;
  return (
    <div className="nav-bar">
      <SearchBox handleSubmit={handleSubmit} />
      <FiltersList
        filteredByAbv={filteredByAbv}
        filteredByClassic={filteredByClassic}
        filteredByAcidity={filteredByAcidity}
      />
    </div>
  );
};
export default NavBar;
