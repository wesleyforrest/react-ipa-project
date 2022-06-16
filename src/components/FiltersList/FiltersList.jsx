import React from "react";
import FilterItem from "../FilterItem/FilterItem";
import NavBar from "../../containers/NavBar/NavBar";
import "./FiltersList.scss";

const FiltersList = (props) => {
  const { selectByFilter, beers } = props;

  return (
    <>
      <div className="filters-list">
        <div className="filters-list__input">
          <label htmlFor="high-abv">High ABV</label>
          <input id="high-abv" type="checkbox" onClick={selectByFilter} />
        </div>
        <div className="filters-list__input">
          <label htmlFor="classic">Classic Range</label>
          <input id="classic" type="checkbox" onClick={selectByFilter} />
        </div>
        <div className="filters-list__input">
          <label htmlFor="acidic">Acidic</label>
          <input id="acidic" type="checkbox" onClick={selectByFilter} />
        </div>
      </div>
      <FilterItem />
    </>
  );
};

export default FiltersList;
