import React from "react";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import RouteSwitch from "./Routes";
import { DataProvider } from "./components/DataContext";
import '../src/pages/boardstyle.css';
import './App.css';


function App() {
  return (
    <BrowserRouter>
    <DataProvider>
      <RouteSwitch />
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
/*
function App() {
  return (
    <div className="App">
      <Dashboard />
      <Leaderboard />
    </div>
  );
}

*/

/*export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}




import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
  );
}

export default App;*/
