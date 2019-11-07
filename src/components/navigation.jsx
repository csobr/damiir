import React, { Component } from "react";
import { NavLink as Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="toggle" onClick={this.toggle}>
          <i className="hamburger">
            <span></span> <span></span>
            <span></span>
          </i>
        </div>

        <ul className="nav--links">
          <li>
            <Link
              to="/knowledge"
              activeClassName="active"
              onClick={this.toggle}
            >
              Knowledge
            </Link>
          </li>
          <li>
            <Link
              to="/companies"
              activeClassName="active"
              onClick={this.toggle}
            >
              Companies
            </Link>
          </li>
          <li className="logo">
            <Link to="/" activeClassName="active" onClick={this.toggle}>
              damiir
            </Link>{" "}
          </li>
          <li>
            <Link to="/blog" onClick={this.toggle}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/about" activeClassName="active" onClick={this.toggle}>
              about
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
  toggle() {
    if (window.innerWidth < 750) {
      document.querySelector(".nav--links").classList.toggle("open");
    }
  }
}
