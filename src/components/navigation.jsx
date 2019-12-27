import React, { Component } from "react";
import { NavLink as Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

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
          <div className="arrows" onClick={this.toggle}>
            <i className="arrow">
              <span></span>
              <span></span>
            </i>
          </div>
          <li className="logo--mobile">
            <Link to="/" activeClassName="active">
              <img src={logo}></img>
            </Link>
          </li>

          <li>
            <Link to="/knowledge" activeClassName="active">
              Knowledge
            </Link>
          </li>
          <li>
            <Link to="/companies" activeClassName="active">
              Companies
            </Link>
          </li>
          <li className="logo">
            <Link to="/" activeClassName="active">
              damiir
            </Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about" activeClassName="active">
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
