import React from 'react';
import { connect } from "react-redux";
import { deleteTask, completeTask } from "../actions";
import { Container, List } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { STATUS } from '../reducers/list';
import ListItems from './ListItemComp'



function Todo({ list }) {

  const renderList = () => {
    return (
      list.map(item => {
        const { taskTitle, date, description, id, status } = item
        return (
          <ListItems key={id} taskTitle={taskTitle} date={date} description={description} status={status} id={id} />
        )
      })
    )
  }

  return (
    <Container style={{ flexGrow: '10', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Paper style={{ width: '60%', marginBottom: '100px' }}>
        <List style={{ padding: '0' }}>
          {renderList(list)}
        </List>
      </Paper>
    </Container>
  )
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