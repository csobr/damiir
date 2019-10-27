import React, { Component } from 'react'
import { NavLink as Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
           <nav>
          <div className="toggle" onClick={this.toggle}><i className="hamburger"><span></span> <span></span><span></span></i></div>
        
              <ul className = "nav--links">
                  <li>
                      <Link to = "/about" activeClassName='active'onClick={this.toggle}>About</Link>

                  </li>
                  <li>
                      <Link to = "/companies" activeClassName='active'onClick={this.toggle}>Companies</Link>

                  </li>    
                  <li className = "logo">
                  <Link to = "/" activeClassName='active'onClick={this.toggle}>damiir</Link> </li>
                  <li>
                      <Link to = "/field"onClick={this.toggle}>Change</Link>

                  </li>
                    <li>
                      <Link to = "/r" activeClassName="active"onClick={this.toggle}>Contact</Link>

                  </li>
              </ul>
            </nav>
        );
    }
    toggle () {
        if (window.innerWidth < 750) {
            document.querySelector('.nav--links').classList.toggle('open')
        }
    }
}
