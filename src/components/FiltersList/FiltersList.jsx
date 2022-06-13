import React from "react";
import FilterItem from "../FilterItem/FilterItem";
import "./FiltersList.scss";

const FiltersList = () => {
  return (
    <>
      <div className="filters-list">
        <div className="filters-list__input">
          <label htmlFor="high-abv">High ABV</label>
          <input id="high-abv" type="checkbox" />
        </div>
        <div className="filters-list__input">
          <label htmlFor="classic">Classic Range</label>
          <input id="classic" type="checkbox" />
        </div>
        <div className="filters-list__input">
          <label htmlFor="acidic">Acidic</label>
          <input id="acidic" type="checkbox" />
        </div>
      </div>
      <FilterItem />
    </>
  );
};

export default FiltersList;
