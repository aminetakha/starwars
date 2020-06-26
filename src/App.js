import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Characters from "./components/Characters";
import Details from "./components/Details";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Characters} />
        <Route path="/details/:id" component={Details} />
      </BrowserRouter>
    </div>
  );
}

export default App;
