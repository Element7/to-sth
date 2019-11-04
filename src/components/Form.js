import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: '',
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        const todos = {
            todo: this.state.todo,
        };

        this.props.createTask(todos);
    }
    render() {
        console.log(this.props);

        return (
            <div>
                <form>
                    <label>To do:</label>
                    <input type='text' name='todo' onChange={e => this.onChange(e)} value={this.state.title}></input>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}


export default Form;