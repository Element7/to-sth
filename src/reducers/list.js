import { ADD_TASK, DELETE_TASK, COMPLETE_TASK } from '../actions';

export const STATUS = {
    avaible: 1,
    done: 2
};

const initState = [
    {
        taskTitle: 'Learn',
        id: new Date().getTime(),
        date: new Date(),
        description: 'You know nothing John S',
        status: STATUS.avaible
    },
    {
        taskTitle: 'Keep learning',
        id: new Date().getTime() + 1,
        date: new Date(),
        description: 'Try hard',
        status: STATUS.avaible
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
                    description: action.taskItem.description,
                    status: STATUS.avaible
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
            const copyy = [...state];
            const indexx = copyy.findIndex(item => item.id === action.id);
            copyy[indexx].status = STATUS.done
            return copyy
        default:
            return state;
    }
}


