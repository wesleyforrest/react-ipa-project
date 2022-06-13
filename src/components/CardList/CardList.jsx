import React from "react";
import "./CardList.scss";
import Card from "../Card/Card";

const CardList = (props) => {
  const { beers } = props;
  const beersJSX = beers.map((beer, index) => {
    return <Card key={index} beer={beer} />;
  });

  return (
    <>
      <div className="card-list">{beersJSX}</div>
    </>
  );
};

export default CardList;
