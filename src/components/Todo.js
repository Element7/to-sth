import React, { Component } from 'react';
import { connect } from "react-redux";
import { deleteTask } from "../actions";
import ClearIcon from '@material-ui/icons/Clear';
import { Container, List, ListItem, Button } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';


const ListItemStyle = {
    display: 'flex',
    justifyContent: 'space-between'
}


class Todo extends Component {

    handleClear = id => e => {
        this.setState({
            isFiltered: true
        });
        this.props.deleteTask(id)
    }

    renderBtns = id => <div>
        <Button><CheckIcon /></Button>
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
                    >
                        {item.todo}{this.renderBtns(item.id)}
                    </ListItem>
                )
            })
        )
    }

    render() {
        return (
            <Container style={{ flexGrow: '10', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <List style={{ width: '40rem' }} >{this.renderList()}</List>
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
    deleteTask
}

export const list = connect(mapStateToProps, mapDispatchToProps)(Todo);


