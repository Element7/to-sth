import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Page from './components/Page';
import Todo from './components/Todo';
import Done from './components/Done';



class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Page} />
            <Route path="/todo" component={Todo} />
            <Route path="/done" component={Done} />
          </Switch>
        </Router>
      </div>
    )
  }
}



export default App;



