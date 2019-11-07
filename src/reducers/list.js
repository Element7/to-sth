import { ADD_TASK, DELETE_TASK } from '../actions';

const initState = [
    {
        taskTitle: 'Learn',
        id: new Date().getTime(),
        date: new Date()
    },
    {
        taskTitle: 'Keep learning',
        id: new Date().getTime() + 1,
        date: new Date()
    }
]

export const list = (state = initState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return [
                ...state,
                {
                    taskTitle: action.taskItem.text,
                    id: new Date().getTime(),
                    date: action.taskItem.date
                },
            ];
        case DELETE_TASK:
            const copy = [...state];
            const index = copy.findIndex(item => item.id === action.id);
            return [
                ...copy.slice(0, index),
                ...copy.slice(index + 1)
            ];
        default:
            return state;
    }
}

