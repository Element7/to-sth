export const ADD_TASK = '[text] add new task to the list';
export const DELETE_TASK = '[id] delete task from list';

export const addTask = (text) => ({
    type: ADD_TASK,
    text
});

export const deleteTask = (id) => ({
    type: DELETE_TASK,
    id
})

