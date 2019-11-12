import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Page from './Page';
import Lista from './Todo';
import DoneList from './Done';
import { Head } from './Header'
import Footer from './Footer'


class Routes extends Component {
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
                <Router>
                    <Head style={{ flexGrow: '1' }} />
                    <Switch >
                        <Route exact path="/" component={Page} />
                        <Route path="/list" component={Lista} />
                        <Route path="/done" component={DoneList} />
                    </Switch>
                    <Footer style={{ flexGrow: '1' }} />
                </Router>
            </div>
        )
    }
}

export default Routes;