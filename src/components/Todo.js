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
    constructor(props) {
        super(props);
        this.state = {
            isFiltered: false
        }
    }

    handleClear = id => e => {
        this.setState({
            isFiltered: true
        })
        this.props.filter(this.props.list, id) // do metody usun przekaz id
    }
    handleBtns = id => <div>
        <Button><CheckIcon /></Button>
        <Button onClick={this.handleClear(id)}><ClearIcon /></Button>
    </div>

    renderList = (e) => {
        return (
            this.props.list.map(item => {
                return (
                    <ListItem style={ListItemStyle} divider={true} key={item.id}>{item.todo}{this.handleBtns(item.id)}</ListItem>
                )
            })
        )
    }

    render() {

        return (
            <Container>
                <List >{this.renderList()}</List>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.list,
    }
};
const mapDispatchToProps = dispatch => ({
    filter: (list) => dispatch(filterList(list)),
    add: (list) => dispatch(showList(list))
})

export const list = connect(mapStateToProps, mapDispatchToProps)(Todo);


