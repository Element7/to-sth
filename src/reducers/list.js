import { ADD_TASK, DELETE_TASK, COMPLETE_TASK } from '../actions';

const initState = [
    {
        taskTitle: 'Learn',
        id: new Date().getTime(),
        date: new Date(),
        description: 'You know nothing John S'
    },
    {
        taskTitle: 'Keep learning',
        id: new Date().getTime() + 1,
        date: new Date(),
        description: 'Try hard'
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
                    date: action.taskItem.date,
                    description: action.taskItem.description
                },
            ];
        case DELETE_TASK:
            const copy = [...state];
            const index = copy.findIndex(item => item.id === action.id);
            return [
                ...copy.slice(0, index),
                ...copy.slice(index + 1)
            ];
        case COMPLETE_TASK:
            return state
        default:
            return state;
    }
}

