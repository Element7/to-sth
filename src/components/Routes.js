import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Page from './Page';
import { list } from './Todo';
import Done from './Done';
import Header from './Header'
import Footer from './Footer'


class Routes extends Component {
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
                <Router>
                    <Header style={{ flexGrow: '1' }} />
                    <Switch >
                        <Route exact path="/" component={Page} />
                        <Route path="/list" component={list} />
                        <Route path="/done" component={Done} />
                    </Switch>
                    <Footer style={{ flexGrow: '1' }} />
                </Router>
            </div>
        )
    }
}

export default Routes;