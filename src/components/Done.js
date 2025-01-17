import React, { Component } from 'react';
import { STATUS } from '../reducers/list';
import { connect } from "react-redux";
import { deleteTask, completeTask } from "../actions";
import { Container, List, ListItem, Paper } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';

const ListItemStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  position: 'relative',
  marginTop: '10px',
  color: 'green',
  fontWeight: '500'

}
class Done extends Component {
  getDate = () => {
    const date = new Date()
    return (date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear())
  }

  renderList = () => {
    return (
      this.props.list.map(item => {
        const { id, taskTitle } = item
        return (
          <ListItem key={id} style={ListItemStyle}>
            <div><CheckIcon color='inherit' />{taskTitle}</div><div>{this.getDate()}</div>
          </ListItem>
        )
      })
    )
  }

  render() {
    return (
      <Container style={{ flexGrow: '10', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Paper style={{ width: '60%', marginBottom: '100px' }}>
          <List style={{ padding: '0' }}>{this.renderList()}</List>
        </Paper>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list.filter(ele => ele.status === STATUS.done),
  }
};

const mapDispatchToProps = {
  deleteTask,
  completeTask
}

const DoneList = connect(mapStateToProps, mapDispatchToProps)(Done);
export default DoneList