import React, { Component } from 'react'
import {Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
           <nav>
            <h1>Impact</h1>
              <ul>
                  <li>
                      <Link to = "/">Home</Link>

                  </li>
                  <li>
                      <Link to = "/companies">Companies</Link>

                  </li>
                  <li>
                      <Link to = "/field">Impact field</Link>

                  </li>
              </ul>
            </nav>
        )
    }
}
