import { SHOW_CURRENT_LIST } from '../actions'

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
        case SHOW_CURRENT_LIST:
            return [
                ...state,
                {
                    todo: action.list.task
                }
            ]
        default:
            return state
    }
}