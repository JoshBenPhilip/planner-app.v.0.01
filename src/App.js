import logo from "./logo.svg";
import "./App.css";
import PlannerPageThurJan_12 from "./PlannerPageThurJan_12";
import PlannerPageFriJan_13 from "./PlannerPageFriJan_13";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <PlannerPageThurJan_12></PlannerPageThurJan_12>
          <PlannerPageFriJan_13></PlannerPageFriJan_13>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
