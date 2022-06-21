import React from "react";
import FilterItem from "../FilterItem/FilterItem";
import NavBar from "../../containers/NavBar/NavBar";
import "./FiltersList.scss";

const FiltersList = (props) => {
  const {
    beers,
    filteredByAcidity,
    filteredByAbv,
    filteredByClassic,
    abvValue,
    classicValue,
    acidityValue,
  } = props;

  return (
    <>
      <div className="filters-list">
        <div className="filters-list__input">
          <label htmlFor="high-abv">High ABV</label>
          <input
            id="high-abv"
            type="checkbox"
            onChange={filteredByAbv}
            checked={abvValue}
          />
        </div>
        <div className="filters-list__input">
          <label htmlFor="classic">Classic Range</label>
          <input
            id="classic"
            type="checkbox"
            onChange={filteredByClassic}
            checked={classicValue}
          />
        </div>
        <div className="filters-list__input">
          <label htmlFor="acidic">Acidic</label>
          <input
            id="acidic"
            type="checkbox"
            onChange={filteredByAcidity}
            checked={acidityValue}
          />
        </div>
      </div>
      <FilterItem />
    </>
  );
};

export default FiltersList;
