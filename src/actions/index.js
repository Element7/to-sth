export const ADD_TASK = '[list] Show current list';
export const FILTER_LIST = '[list] delete task from list';

export const showList = (list) => ({
    type: ADD_TASK,
    list
});

export const filterList = (list) => ({
    type: FILTER_LIST,
    list
})

