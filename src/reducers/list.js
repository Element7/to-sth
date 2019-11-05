import { ADD_TASK } from '../actions';


const initState = [
    {
        todo: 'eating'
    },
    {
        todo: 'cleaning'
    }
]

export const list = (state = initState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return [
                ...state,
                {
                    todo: action.list.task,
                    id: new Date().getTime()
                }
            ]
        default:
            return state
    }
}