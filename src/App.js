import React from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Table from "./components/Table";
import Shortlist from "./components/Shortlist";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddCity from "./components/AddCity";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Search />
        <AddCity />

        <main className="main">
          <div className="content">
            <Switch>
              <Route exact path="/" component={Table} />
              <Route exact path="/shortlist" component={Shortlist} />
            </Switch>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
