import React, { Component } from 'react'
import {Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
           <nav>
      
              <ul>
                  <li>
                      <Link to = "/">About</Link>

                  </li>
                  <li>
                      <Link to = "/companies">Companies</Link>

                  </li>    
                  <li className = "logo">
                  <Link to = "/">Impact.</Link> </li>
                  <li>
                      <Link to = "/field">Change</Link>

                  </li>
                    <li>
                      <Link to = "/field">Contact</Link>

                  </li>
              </ul>
            </nav>
        )
    }
}
