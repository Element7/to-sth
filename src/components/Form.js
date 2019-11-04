import React, { Component } from 'react'

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

    onSubmit(e) {
        e.preventDefault();
        const taskItem = {
            task: this.state.task,
        };
        this.props.createTask(taskItem);
    }
    render() {
        const { task } = this.state;
        return (
            <div>
                <form>
                    <label>To do:</label>
                    <input type='text' name='task' onChange={this.onChange} value={task}></input>
                    <button type='submit' onSubmit={this.onSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}


export default Form;