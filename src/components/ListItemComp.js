import React, { useState } from 'react'
import { ListItem } from '@material-ui/core';
import { Button } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import { connect } from "react-redux";
import { STATUS } from '../reducers/list';
import { deleteTask, completeTask } from "../actions";

const ListItemStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  position: 'relative',
  marginTop: '10px',
  fontSize: '1.2rem'
}

const divStyle = {
  display: 'flex',
  flexDirection: 'column'
}
function ListItemComp({ taskTitle, date, description, status, id, completeTask, deleteTask }) {

  const [hover, setHover] = useState(false)

  const handleClear = id => e => {
    deleteTask(id)
  }

  const handleCompleteBtn = (id) => e => {
    completeTask(id)
  }

  const renderBtns = id => <div>
    <Button onClick={handleCompleteBtn(id)}><CheckIcon /></Button>
    <Button onClick={handleClear(id)}><ClearIcon /></Button>
  </div>


  return (
    <ListItem
      style={ListItemStyle}
      divider
      onMouseEnter={() => setHover(!hover)}
      onMouseLeave={() => setHover(!hover)}>

      <div
        style={divStyle}>
        <span>
          {date.getMonth()}/{date.getDate()}/{date.getFullYear()}
        </span>
        <span
          style={{ fontSize: '1.2rem', fontWeight: '500' }}>
          {taskTitle}
        </span>
      </div>
      <div
        style={{ fontSize: '.9rem', fontStyle: 'italic' }}>
        {hover ? description : ''}
      </div>
      {renderBtns(id)}</ListItem>
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

const ListItems = connect(mapStateToProps, mapDispatchToProps)(ListItemComp);

export default ListItems


