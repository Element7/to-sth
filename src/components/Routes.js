import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Page from './Page';
import { AppToDo } from './Todo';
import Done from './Done';
class Routes extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Page} />
                        <Route path="/apptodo" component={AppToDo} />
                        <Route path="/done" component={Done} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Routes;