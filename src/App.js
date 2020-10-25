import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import MyRoute from "./Routs.js";

function App() {
  return (
    <div className="App">
      <MyRoute />
    </div>
  );
}

export default App;
