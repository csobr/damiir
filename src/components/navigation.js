import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Home from './home'

export default class Navigation extends Component {
    render() {
        return (
            <div className="navbar">
            <NavLink to="/" className="navbar-logo">dA</NavLink>
            <div className="navbar-list">
              <NavLink to="/search" activeClassName="chosen">Collection</NavLink>
              <NavLink to="/map" activeClassName="chosen">Map</NavLink>
              <NavLink to="/login" activeClassName="chosen">Log In</NavLink>
            </div>
          </div>
        )
    }
}
