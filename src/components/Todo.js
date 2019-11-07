import React, { Component } from 'react';
import { connect } from "react-redux";
import { deleteTask, completeTask } from "../actions";
import ClearIcon from '@material-ui/icons/Clear';
import { Container, List, ListItem, Button } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import Paper from '@material-ui/core/Paper';

const ListItemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    marginTop: '10px'

}

const divStyle = {
    display: 'flex',
    flexDirection: 'column'
}


class Todo extends Component {
    handleClear = id => e => {
        this.props.deleteTask(id)
    }

    handleCompleteBtn = id => e => {
        console.log('asf');

        this.props.completeTask(id)
    }

    renderBtns = id => <div>
        <Button onClick={this.handleCompleteBtn(id)}><CheckIcon /></Button>
        <Button onClick={this.handleClear(id)}><ClearIcon /></Button>
    </div>

    renderList = () => {
        return (
            this.props.list.map(item => {
                return (
                    <ListItem
                        key={item.id}
                        style={ListItemStyle}
                        divider
                    ><div style={divStyle}><span>{item.date.getMonth()}/{item.date.getDate()}/{item.date.getFullYear()}</span>
                            <span style={{ fontSize: '1.2rem', fontWeight: '500' }}>{item.taskTitle}</span></div>{this.renderBtns(item.id)}
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
        list: state.list,
    }
};

const mapDispatchToProps = {
    deleteTask,
    completeTask
}

export const list = connect(mapStateToProps, mapDispatchToProps)(Todo);


