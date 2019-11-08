import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions';
import { Button, Typography, TextField, Container, FormControl, Paper } from '@material-ui/core';
import Calendar from './Calendar';

const formStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'columns',
    marginBottom: '50px'
}

const paperStyle = {
    paddingTop: '50px',
    paddingBottom: '1px',
    marginBottom: '50px'
}

const titleField = {
    width: "48%"
}

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            date: new Date(),
            description: '',
            validForm: '',
            titleError: ''
        }
    }

    onChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value,
        });

    }

    validate = () => {
        if (!this.state.text || !this.state.date) {
            this.setState({
                titleError: 'Please provide title and pick date',
                validForm: false
            })
            return false
        } else {
            this.setState({
                titleError: '',
                validForm: true
            })
            return true
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.validate()) {
            const textItem = {
                text: this.state.text,
                date: this.state.date,
                description: this.state.description,
            };
            this.props.addTask(textItem);
            this.setState({
                text: '',
                date: '',
                description: ''
            })
        } return
    }

    dateHandler = (date) => {
        this.setState({ date: date });
    }

    render() {
        const { text, description, titleError } = this.state;
        return (
            <Container>
                <Paper style={paperStyle}>
                    <FormControl style={formStyle} >
                        <Typography variant='h5'>Create new task</Typography>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '35rem',
                            marginTop: '30px',
                        }}>
                            <TextField
                                style={titleField}
                                label="Title"
                                id="outlined-margin-dense"
                                margin="normal"
                                variant="outlined"
                                onChange={this.onChange}
                                value={text}
                                type='title'
                                name='text'
                            />
                            <Calendar style={titleField} date={this.dateHandler} />
                        </div>
                        <div style={{ color: "red" }}>{titleError}</div>
                        <TextField
                            id="outlined-full-width"
                            label="Description"
                            style={{ margin: 8, width: '35rem' }}
                            placeholder="Type text description"
                            margin="normal"
                            InputLabelProps={{ shrink: true, }}
                            variant="outlined"
                            value={description}
                            onChange={this.onChange}
                            name='description'
                        />
                        <br />
                        <Button onClick={this.onSubmit} color='primary' variant='contained' size='large' style={{ marginTop: '20px' }}>Submit</Button>
                    </FormControl>
                </Paper>
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