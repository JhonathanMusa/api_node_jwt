import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./Login";
import { Register } from "./Register";

export const Nav = () => {
  return (
    <Router>
      <div className="container">
        <nav className="navbar">
          <div className="nav">
            <Link to="/">Home</Link>
            <Link className="nav-log" to="/login">
              Login
            </Link>
            <Link className="nav-reg" to="/register">
              Register
            </Link>
          </div>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </div>
    </Router>
  );
};
