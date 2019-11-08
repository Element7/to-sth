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

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            date: '',
            description: '',
            textValid: false,
            dateValid: false
        }
    }

    onChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value });

    }

    onSubmit = (e) => {
        e.preventDefault();
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

    }

    dateHandler = (date) => {
        this.setState({ date: date });
    }

    render() {
        const { text, description } = this.state;
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
                                label="Title"
                                id="outlined-margin-dense"
                                margin="normal"
                                variant="outlined"
                                onChange={this.onChange}
                                value={text}
                                type='title'
                                name='text'
                            />
                            <Calendar date={this.dateHandler} />
                        </div>
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