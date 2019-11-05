import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showList } from '../actions'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const taskItem = {
            task: this.state.task,
        };
        this.props.add(taskItem);
    }
    render() {
        const { task } = this.state;
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label>To do:</label>
                    <input type='text' name='task' onChange={this.onChange} value={task}></input>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

const mapState = ({ list }) => ({
    list
});

const mapDispatch = dispatch => ({
    add: (list) => dispatch(showList(list))
})


export default connect(mapState, mapDispatch)(Form);