import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showList } from '../actions';
import { Button, Typography, TextField, Container, FormControl } from '@material-ui/core';

const formStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'columns',
    marginTop: '100px'
}


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
            <Container>
                <FormControl style={formStyle} >
                    <Typography variant='h5'>Create new task</Typography>
                    <TextField type='text' name='task' onChange={this.onChange} value={task}></TextField>
                    <br />
                    <Button onClick={this.onSubmit} color='primary' variant='contained'>Submit</Button>
                </FormControl>
            </Container >

        )
    }
}

const mapStateToProps = ({ list }) => ({
    list
});

const mapDispatchToProps = dispatch => ({
    add: (list) => dispatch(showList(list))
})


export default connect(mapStateToProps, mapDispatchToProps)(Form);