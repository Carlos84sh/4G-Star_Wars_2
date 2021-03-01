import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import injectContext from "./store"

import Footer from "./components/footer.js"
import Navbar from "./components/navbar.js"
import Home from "./pages/home.js"
import People from "./pages/people.js"
import Planets from "./pages/planets.js"

export default injectContext(function(props) {
    return (
        <Router>    
            <div className="page">
                <Navbar />

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route path="/people/:index">
                        <People />
                    </Route>

                    <Route path="/planets/:index">
                        <Planets />
                    </Route>
                    <Route>
                        <Footer path="/" />
                    </Route>
                    
                </Switch>
            </div>            
        </Router>
    )
})