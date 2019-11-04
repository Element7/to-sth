import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Page from './components/Page';
import Todo from './components/Todo';
import Done from './components/Done';
import { connect } from "react-redux";
import { listFetched } from "./actions";
import Test from './components/Test'



class App extends Component {

  componentDidMount() {
    fetch("https://randomuser.me/api/?format=json&results=10")
      .then(res => res.json())
      .then(json => this.props.listFetched(json.results));
  }
  render() {
    return (
      <div>
        <Router>
          <Test list={this.props.list} />
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

const mapStateToProps = (state) => {
  return {
    list: state.list
  }
};
const mapDispatchToProps = { listFetched };

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);




