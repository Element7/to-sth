import React, { Component } from 'react';
import Header from './Header'
import { connect } from "react-redux";
import { addPost } from "../actions";

class Todo extends Component {
    render() {
        const todoList = this.props.list.map(item => {
            return (
                <li key={item.id}>{item.todo}</li>
            )

        })
        return (
            <div>
                <Header />
                <ul>{todoList}</ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.list
    }
};
const mapDispatchToProps = { addPost };

export const AppToDo = connect(mapStateToProps, mapDispatchToProps)(Todo);


