import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Dashboard, Landing, LogInWindow, SignUpWindow } from "./components";
// import { ProtectedRoute } from "./routes/ProtectedRoute";
// import ViewReports from "./pages/dashboard/ViewReports";

export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/login">
                        <LogInWindow />
                    </Route>
                    <Route exact path="/signup">
                        <SignUpWindow />
                    </Route>
                    <Route exact path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/">
                        <Landing />
                    </Route>
                </Switch>
            </Router>
        );
    }
}
