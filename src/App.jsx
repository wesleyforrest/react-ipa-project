import { useState, useEffect } from "react";
import "./App.scss";
import Main from "./containers/Main/Main";
import NavBar from "./containers/NavBar/NavBar";

function App(props) {
  const { handleSubmit } = props;
  useEffect(() => {
    getBeers();
  }, []);
  const [searchInput, setSearchInput] = useState;

  const [beers, setBeers] = useState();
  const getBeers = async () => {
    let url = "https://api.punkapi.com/v2/beers";
    const res = await fetch(url);
    const data = await res.json();
    setBeers(data);

    const handleSubmit = (event) => {
      event.preventDefault();
      let input = event.target[0].value;

      if (searchInput) {
        event.target.reset();
        setSearchInput(input);
      }
    };
  };

  console.log(beers);
  return (
    <div className="App">
      <NavBar />
      <Main beers={beers} />
    </div>
  );
}

export default App;
