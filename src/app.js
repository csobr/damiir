import React, { Component } from 'react'
import { useLocation} from "react-router"
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/navigation'
import Home from './components/home'
import Companies from './components/companies'
import Field from './components/field'

export default class App extends Component {
    render() {
        return (
            <div className = "site--wrapper">
                <Router>
                    <Navbar />
               <Switch>
                   <Route exact path = "/" component= {Home} />
                   <Route path = "/companies" component = {Companies} />
                   <Route path = "/field" component = {Field} />


               </Switch>
               </Router>

            </div>

        )
    }
}
