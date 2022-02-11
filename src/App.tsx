import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./views/main";
import NavBar from "./components/NavBar"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
