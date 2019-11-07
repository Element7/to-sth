import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions';
import { Button, Typography, TextField, Container, FormControl } from '@material-ui/core';
import Calendar from './Calendar'



const formStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'columns',
}



class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
        }
    }

    onChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const taskItem = {
            task: this.state.task,
        };
        this.props.addTask(taskItem);
    }

    render() {
        const { task } = this.state;
        return (
            <Container>
                <FormControl style={formStyle} >
                    <Typography variant='h5'>Create new task</Typography>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '35rem',
                        marginTop: '30px'
                    }}>
                        <TextField
                            label="Title"
                            id="outlined-margin-dense"
                            margin="dense"
                            variant="outlined"
                            onChange={this.onChange}
                            defaultValue={task}
                            type='title'
                            name='task'
                        />
                        <Calendar />
                    </div>
                    <TextField
                        id="outlined-full-width"
                        label="Description"
                        style={{ margin: 8, width: '35rem' }}
                        placeholder="Type task description"

                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                    <br />
                    <Button onClick={this.onSubmit} color='primary' variant='contained'>Submit</Button>
                </FormControl>
            </ Container >

        )
    }
}

const mapStateToProps = ({ list }) => ({
    list
});

const mapDispatchToProps = {
    addTask
}


export default connect(mapStateToProps, mapDispatchToProps)(Form);