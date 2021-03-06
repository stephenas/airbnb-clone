import React from "react";
import "./App.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import Home from "./Home";
import Footer from "./Footer";
import SearchPage from "./SearchPage";

import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    //BEM naming conversion
    <div className="app">
      <Router>
        <div className="header">
          <Link to="/">
            <img
              className="header__icon"
              src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
              alt="logo"
            />
          </Link>

          <div className="header__center">
            <input type="text" />
            <SearchIcon />
          </div>

          <div className="header__right">
            <p>Become a host</p>
            <LanguageIcon />
            <ExpandMoreIcon />
            <Avatar />
          </div>
        </div>

        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
