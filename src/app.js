import React from 'react'
// import { useLocation} from "react-router"
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/navigation.jsx'
import Home from './pages/home.jsx'
import Companies from './pages/companies.jsx'
import Footer from './components/footer.jsx'

function App () {

        return (
            <div className = "site--wrapper">
       
                <Router>
                    <Navbar />
               <Switch>
                   <Route exact path = "/" component= {Home} />
                   <Route path = "/companies" component = {Companies} />
               </Switch>
               </Router>
              <Footer />
            </div>

        )
    
}

export default App;