import { ADD_TASK, DELETE_TASK, COMPLETE_TASK } from '../actions';

export const STATUS = {
    available: 1,
    done: 2
};

const initState = [
    {
        taskTitle: 'Learn',
        id: new Date().getTime(),
        date: new Date(),
        description: 'You know nothing John S',
        status: STATUS.available
    },
    {
        taskTitle: 'Keep learning',
        id: new Date().getTime() + 1,
        date: new Date(),
        description: 'Try hard',
        status: STATUS.available
    }
]


export const list = (state = initState, action) => {
    const copy = [...state];
    const index = copy.findIndex(item => item.id === action.id);
    switch (action.type) {
        case ADD_TASK:
            return [
                ...state,
                {
                    taskTitle: action.taskItem.text,
                    id: new Date().getTime(),
                    date: action.taskItem.date,
                    description: action.taskItem.description,
                    status: STATUS.available
                },
            ];
        case DELETE_TASK:
            return [
                ...copy.slice(0, index),
                ...copy.slice(index + 1)
            ];
        case COMPLETE_TASK:
            copy[index].status = STATUS.done
            return copy
        default:
            return state;
    }
}


