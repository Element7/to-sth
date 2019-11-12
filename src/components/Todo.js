import React, { Component } from 'react';
import { connect } from "react-redux";
import { deleteTask, completeTask } from "../actions";
import { Container, List } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { STATUS } from '../reducers/list';
import ListItems from './ListItemComp'



class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    }
  }



  renderList = () => {
    return (
      this.props.list.map(item => {
        const { taskTitle, date, description, id, status } = item
        console.log(item);

        return (
          <ListItems key={id} taskTitle={taskTitle} date={date} description={description} status={status} id={id} />
        )
      })
    )
  }

  render() {
    return (
      <Container style={{ flexGrow: '10', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Paper style={{ width: '60%', marginBottom: '100px' }}>
          <List style={{ padding: '0' }}>
            {this.renderList()}
          </List>
        </Paper>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list.filter(ele => ele.status === STATUS.available),
  }
};

const mapDispatchToProps = {
  deleteTask,
  completeTask
}

const Lista = connect(mapStateToProps, mapDispatchToProps)(Todo);

export default Lista