import { FILTER_LIST } from '../actions';


export const filterList = (state = [], action) => {

    switch (action.type) {
        case FILTER_LIST:
            console.log(action);
            return action.list.filter(item => item.todo.length > 5);
        default:
            return state
    }
}