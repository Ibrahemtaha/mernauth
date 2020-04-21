import React from "react";
import { Link, withRouter } from "react-router-dom";

const Nav = ({ match, history }) => {
  const isAcitve = (path) => {
    if (match.path == path) {
      return { color: "#fff" };
    } else {
      return { color: "#bbb" };
    }
  };
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        Navbar
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link class="nav-link" to="/" style={isAcitve("/")}>
              Home
              <span class="sr-only">(current)</span>
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li class="nav-item">
            <Link class="nav-link" to="Signin" style={isAcitve("/Signin")}>
              Signin
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="Signup" style={isAcitve("/Signup")}>
              Signup
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default withRouter(Nav);
