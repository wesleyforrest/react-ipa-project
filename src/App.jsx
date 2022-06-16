import { useState, useEffect } from "react";
import "./App.scss";
import SearchBox from "./components/SearchBox/SearchBox";
import Main from "./containers/Main/Main";
import NavBar from "./containers/NavBar/NavBar";
import beerData from "./data/beers";
function App() {
  const [searchInput, setSearchInput] = useState();
  const [beers, setBeers] = useState([]);

  const getBeers = async () => {
    let url = "https://api.punkapi.com/v2/beers";
    const res = await fetch(url);
    const data = await res.json();
    console.log({ data });
    setBeers(data);
  };

  useEffect(() => {
    getBeers();
    console.log(beers);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let input = event.target.value;
    const res = await fetch(
      "https://api.punkapi.com/v2/beers?beer_name=" + input
    );
    const data = await res.json();

    setBeers(data);
  };

  const selectByFilter = async (event) => {
    event.preventDefault();
    let input = event.target.value;
    if ((input = beers.abv > 17)) {
      ("https://api.punkapi.com/v2/beers/?abv_gt=17");
    }
    // const res = await fetch(
    //   "https://api.punkapi.com/v2/beers?beer_name=" + input
    // );
    // const data = await res.json();

    setBeers(data);
  };

  return (
    <div className="App">
      <NavBar handleSubmit={handleSubmit} selectByFilter={selectByFilter} />

      <Main beers={beers} />
    </div>
  );
}

export default App;
