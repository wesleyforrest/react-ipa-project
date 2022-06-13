import "./App.scss";
import Main from "./containers/Main/Main";
import NavBar from "./containers/NavBar/NavBar";
import beers from "./data/beers";

function App() {
  console.log(beers);
  return (
    <div className="App">
      <NavBar />
      <Main beers={beers} />
    </div>
  );
}

export default App;
