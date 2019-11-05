import { FILTER_LIST } from '../actions';


export const filterList = (state = '', action) => {
    switch (action.type) {
        case FILTER_LIST:
            return action.filterlist;
        default:
            return state
    }
}