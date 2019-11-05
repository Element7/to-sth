import React, { Component } from 'react';
import { connect } from "react-redux";
import { showList } from "../actions";
import { filterList } from "../actions";
import ClearIcon from '@material-ui/icons/Clear';
import { Container, List, ListItem, Button } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';


const ListItemStyle = {
    display: 'flex',
    justifyContent: 'space-between'
}


class Todo extends Component {

    handleClear = e => {



        this.props.filter(this.props.list)



    }
    render() {
        const handleBtns = <div>
            <Button><CheckIcon /></Button>
            <Button onClick={this.handleClear}><ClearIcon /></Button>
        </div>

        const todoList = this.props.list.map(item => {
            return (<>
                <ListItem style={ListItemStyle} divider={true} key={item.todo}>{item.todo}{handleBtns}</ListItem>
            </>
            )
        })
        return (
            <Container>
                <List >{todoList}</List>
            </Container>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        list: state.list,
        filterList: state.filterList
    }
};
const mapDispatchToProps = dispatch => ({
    add: (list) => dispatch(showList(list)),
    filter: (list) => dispatch(filterList(list))
})

export const list = connect(mapStateToProps, mapDispatchToProps)(Todo);


