export const ADD_TASK = '[taskItem] add new task to the list';
export const DELETE_TASK = '[id] delete task from list';


export const addTask = (taskItem) => ({
    type: ADD_TASK,
    taskItem
});

export const deleteTask = (id) => ({
    type: DELETE_TASK,
    id
})

