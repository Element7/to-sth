export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';


export const addTask = (taskItem) => ({
    type: ADD_TASK,
    taskItem
});

export const deleteTask = (id) => ({
    type: DELETE_TASK,
    id
})

export const completeTask = (id) => ({
    type: COMPLETE_TASK,
    id
})