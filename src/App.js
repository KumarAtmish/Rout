import React from "react";
import "./styles.css";
import Menu from "./Menu";
import About from "./comp/About/About";
import Contact from "./comp/Contact/Contact";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
const Home = () => {
  return (
    <div className="home">
      <h2>hello Home</h2>
    </div>
  );
};

export default App;
