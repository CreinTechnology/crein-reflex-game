import { GridView } from "./components/gridView";
import "./App.css";
import { RenderRow } from "./components/RenderRow";

const App = () => {
  const displayLifeInfo = () => {
    const test = 3;
    return (
      <div className="App-infobox">
        <span>Life: {test}</span>
      </div>
    );
  };

  const displayPointsInfo = () => {
    const test = 3;
    return (
      <div className="App-infobox">
        <span>Points: {test}</span>
      </div>
    );
  };

  const displayTimer = () => {
    const time = 60;
    return (
      <div className="App-infobox">
        <span>Czas: {time}s</span>
      </div>
    );
  };

  return (
    <div className="App">
      <header className="App-header">Reflex</header>

      <div className="App-wraper">
        <div className="App-box">
          {displayLifeInfo()}
          {displayPointsInfo()}
        </div>

        <div className="App-box">{displayTimer()}</div>
      </div>

      <RenderRow rowNumber={5}>
        <GridView />
      </RenderRow>
    </div>
  );
};

export default App;
