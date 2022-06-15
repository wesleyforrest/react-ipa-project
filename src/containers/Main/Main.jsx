import React from "react";
import CardList from "../../components/CardList/CardList";
import "./Main.scss";

const Main = (props) => {
  const { beers } = props;
  console.log("Main", beers);
  return (
    <>
      <div className="main">
        <CardList beers={beers} />
      </div>
    </>
  );
};

export default Main;
