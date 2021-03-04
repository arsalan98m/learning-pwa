import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import NavBar from "./components/Nav";
import Home from "./components/Home";
import Users from "./components/Users";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/users" component={Users} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
