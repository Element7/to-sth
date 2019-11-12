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




    // renderDescription = (description) => {
    //     if (this.state.hover) {
    //         return description
    //     } else {
    //         return
    //     }
    // }





    // renderList = () => {
    //     return (
    //         this.props.list.map(item => {
    //             return (

    //                 <ListItems key={item.id} props={item} />


    //             )
    //         })
    //     )
    // }

    render() {
        return (
            <Container style={{ flexGrow: '10', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Paper style={{ width: '60%', marginBottom: '100px' }}>
                    <List style={{ padding: '0' }}>
                        <ListItems />
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