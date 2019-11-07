import { ADD_TASK, DELETE_TASK } from '../actions';


const initState = [
    {
        todo: 'eat',
        id: new Date().getTime()
    },
    {
        todo: 'cleaning',
        id: new Date().getTime() + 1
    }
]



export const list = (state = initState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return [
                ...state,
                {
                    todo: action.text.task,
                    id: new Date().getTime()
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

