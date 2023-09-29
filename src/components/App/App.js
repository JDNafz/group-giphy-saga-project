import React from "react";
// import axios from 'axios';
import { HashRouter as Router, Route } from "react-router-dom";

import "./App.css";
// import Header from '../Header/Header';
// import NavBar from '../NavBar/NavBar'
import DisplayItems from "../DisplayItems/DisplayItems";
import SearchForm from "../SearchForm/SearchForm";
import Categories from "../Categories/Categories";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Route path="/">
          {/* <NavBar /> */}
          <SearchForm />
          {/* <DisplayItems /> */}
        </Route>

        <Route path="/DisplayItems">
          <DisplayItems />
        </Route>

        <Route path="/SearchForm" exact></Route>
         
          <Route path="/Categories" exact>
            <Categories />
          </Route>

          {/* <Route path="/admin" exact>
            <AdminPage />
          </Route> */}
      </div>
    </Router>
  );
}

export default App;
