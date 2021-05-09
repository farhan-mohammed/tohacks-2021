import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LogInWindow } from "./components";
// import ViewReports from "./pages/dashboard/ViewReports";

export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/login">
                        <LogInWindow />
                    </Route>
                    <Route path="/">
                        <button class="ui primary button">Save</button>
                    </Route>
                </Switch>
            </Router>
        );
    }
}
