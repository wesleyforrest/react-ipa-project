import React from "react";
import "./NavBar.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import FiltersList from "../../components/FiltersList/FiltersList";

const NavBar = (props) => {
  const {
    handleSubmit,
    filteredByAcidity,
    filteredByAbv,
    filteredByClassic,
    abvValue,
    classicValue,
    acidityValue,
  } = props;
  return (
    <div className="nav-bar">
      <SearchBox handleSubmit={handleSubmit} />
      <FiltersList
        filteredByAbv={filteredByAbv}
        filteredByClassic={filteredByClassic}
        filteredByAcidity={filteredByAcidity}
        abvValue={abvValue}
        classicValue={classicValue}
        acidityValue={acidityValue}
      />
    </div>
  );
};
export default NavBar;
