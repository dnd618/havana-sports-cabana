import React from "react"
import { Router, Switch, Route } from "react-router-dom"
import { history } from "@app/history"

// importing all the themes
import App from "@pages/App";
import Signin from "@pages/Signin";
import Signup from "@pages/Signup";

class AppRouter extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Signin} />
                    <Route exact path="/app" component={App} />
                    <Route exact path="/signup" component={Signup} />
                </Switch>
            </Router>
        )
    }
}
    
export default AppRouter