import React, { Component } from 'react'
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
class ListItemComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hover: false
        }
    }

    toggleHover = () => {
        this.setState({
            hover: !this.state.hover
        })
    }

    handleClear = id => e => {
        this.props.deleteTask(id)
    }
    handleCompleteBtn = (id) => e => {
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
                        onMouseEnter={this.toggleHover}
                        onMouseLeave={this.toggleHover}>

                        <div
                            style={divStyle}>
                            <span>
                                {item.date.getMonth()}/{item.date.getDate()}/{item.date.getFullYear()}
                            </span>
                            <span
                                style={{ fontSize: '1.2rem', fontWeight: '500' }}>
                                {item.taskTitle}
                            </span>
                        </div>
                        <div
                            style={{ fontSize: '.9rem', fontStyle: 'italic' }}>
                            {this.state.hover ? item.description : ''}
                        </div>
                        {this.renderBtns(item.id)}</ListItem>

                )
            })
        )
    }


    render() {
        return (
            <>
                {this.renderList()}
            </>
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

const ListItems = connect(mapStateToProps, mapDispatchToProps)(ListItemComp);

export default ListItems
