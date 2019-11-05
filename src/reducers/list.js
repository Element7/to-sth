import { ADD_TASK } from '../actions';
let idState = 2

const initState = [
    {
        todo: 'eat',
        id: 1
    },
    {
        todo: 'cleaning',
        id: 2
    }
]

export const list = (state = initState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return [
                ...state,
                {
                    todo: action.list.task,
                    id: ++idState
                }
            ]
        default:
            return state
    }
}