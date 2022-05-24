import * as React from "react"
import { Switch, Router, Route, useHistory, Redirect } from "react-router-dom";
import HomePage from "./containers/Homepage/Homepage";
import { FormModal } from "./components/Modal/Modal";
import { IMovie } from "./types/Movie";

import { createBrowserHistory } from 'history';


const ComponentH1 = () => {
    return(
        <h1>Hi</h1>
    )
}

const App = () => {

    const history = createBrowserHistory();

    return (
        <Router history={history}>
            <Switch>
                <Route exact path='/search' component={HomePage}/>
                <Route exact path='/search/:id' component={FormModal}/>
            </Switch>
        </Router>
    )
}

export default App;