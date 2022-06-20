import React from "react";
import "./Card.scss";

const Card = (props) => {
  const { beer } = props;
  return (
    <div className="card">
      <h1 className="card__name">{beer.name}</h1>
      <h3 className="card__tagline">{beer.tagline}</h3>
      <img className="card__img" src={beer.image_url} alt="" />
      <h2 className="card__abv">{beer.abv}%</h2>
    </div>
  );
};

export default Card;
