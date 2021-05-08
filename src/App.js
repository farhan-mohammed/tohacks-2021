import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import ViewReports from "./pages/dashboard/ViewReports";

export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/">Hello</Route>
                </Switch>
            </Router>
        );
    }
}
