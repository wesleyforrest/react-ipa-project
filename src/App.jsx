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

  const filteredByAbv = async (event) => {
    event.preventDefault();
    let input = event.target.checked;
    if (input) {
      const res = await fetch("https://api.punkapi.com/v2/beers?abv_gt=17");

      const data = await res.json();

      setBeers(data);
    }
  };

  const filteredByClassic = async (event) => {
    event.preventDefault();
    let input = event.target.checked;
    if (input) {
      const res = await fetch(
        "https://api.punkapi.com/v2/beers?brewed_before=01-2010"
      );

      const data = await res.json();

      setBeers(data);
    }
  };

  const filteredByAcidity = async (event) => {
    event.preventDefault();
    let input = event.target.checked;
    if (input) {
      const res = await fetch("https://api.punkapi.com/v2/beers?ibu_lt=4");

      const data = await res.json();

      setBeers(data);
    }
  };

  return (
    <div className="App">
      <NavBar
        handleSubmit={handleSubmit}
        filteredByAbv={filteredByAbv}
        filteredByClassic={filteredByClassic}
        filteredByAcidity={filteredByAcidity}
      />

      <Main beers={beers} />
    </div>
  );
}

export default App;
