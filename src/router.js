import React from "react"
import Login from "./pages/Login"
import Accueil from "./pages/Accueil"


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";





const Routes = () => {
    return (
        <Router>

            <div className="container mt-5">
                <Switch>
                    <Router path="/login"> <Login />  </Router>
                    <Router path="/accueil"> <Accueil />  </Router>

                </Switch>

            </div>
        </Router>

    );
}

export default Routes;