import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Footer from "./components/footer.js"
import Navbar from "./components/navbar.js"

import Home from "./pages/home.js"
import Planets from "./pages/planets.js"
import People from "./pages/people.js"

export default function(props) {
    return (
        <Router>
            <Navbar />
            
            <div className="page">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route path="/planets/:id">
                        <Planets />
                    </Route>

                    <Route path="/people/:id">
                        <People />
                    </Route>
                </Switch>
            </div>

            <Footer />
        </Router>
    )
}