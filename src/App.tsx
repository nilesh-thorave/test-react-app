import React from "react";
import { getWelcomeMessage } from "./test-shared-modules/welcome";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{getWelcomeMessage("Nilesh")}</h1>
      </header>
    </div>
  );
}

export default App;
