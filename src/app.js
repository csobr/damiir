import React, { Component } from 'react'
import { useLocation} from "react-router";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from './components/home'
import Companies from './components/companies'

const  Settings  = () => {
    let location = useLocation();
    console.log(location);
    return <div>Settings Component</div>;
}
export default class App extends Component {
    render() {
        return (
            <div className = "site--wrapper">
                <Router>
              <ul>
                  <li>
                      <Link to = "/">Home</Link>

                  </li>
                  <li>
                      <Link to = "/">Företag</Link>

                  </li>
              </ul>
               <Switch>
                   <Route exact path = "/" component= {Home} />
                   <Route path = "/companies" component = {Companies} />


               </Switch>
               </Router>

            </div>

        )
    }
}
