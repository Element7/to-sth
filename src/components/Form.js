import React, { useState } from 'react';
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

function Form({ addTask }) {


  const [text, setTitle] = useState('')
  const [date, setDate] = useState(new Date())
  const [description, setDescription] = useState('')
  const [titleError, handleError] = useState('')

  const onChange = (e) => {
    const { name, value } = e.target
    console.log(name);

    if (name === "text") {
      setTitle(value)
    } else if (name === "description") {
      setDescription(value)
    }

  }

  const validate = () => {
    if (!text) {
      handleError('Please provide title')
      return false
    } else {
      handleError('')
      return true
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const taskItem = {
        text: text,
        date: date,
        description: description,
      };
      addTask(taskItem);
      setTitle('')
      setDescription('')
    }
  }

  const dateHandler = (date) => {
    setDate(date)
  }

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
              placeholder="Please provide description"
              variant="outlined"
              onChange={(e) => onChange(e)}
              value={text}
              type='title'
              name='text'
            />
            <Calendar style={titleField} date={dateHandler} />
          </div>
          <div style={{ color: "red" }}>{titleError}</div>
          <TextField
            id="outlined-full-width"
            label="Description"
            style={{ margin: 8, width: '35rem' }}
            placeholder="Please provide description"
            margin="normal"
            InputLabelProps={{ shrink: true, }}
            variant="outlined"
            value={description}
            onChange={(e) => onChange(e)}
            name='description'
          />
          <br />
          <Button onClick={e => onSubmit(e)} color='primary' variant='contained' size='large' style={{ marginTop: '20px' }}>Submit</Button>
        </FormControl>
      </Paper>
    </ Container >
  )
}


const mapStateToProps = ({ list }) => ({
  list
});

const mapDispatchToProps = {
  addTask
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);