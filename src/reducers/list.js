import { ADD_TASK, FILTER_LIST } from '../actions';


const initState = [
    {
        todo: 'eat',
        id: '10afc8c7-ce3c-4501-a741-145148ca3b8b'
    },
    {
        todo: 'cleaning',
        id: '8dc918a4-b3ff-4091-bd17-1fb00ce65a0d'
    }
]



export const list = (state = initState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return [
                ...state,
                {
                    todo: action.list.task,
                    id: '8eaeadf1-f7e8-4340-ab60-9222b4be5910'
                },
            ]
        case FILTER_LIST:
            console.log(action);
            return action.list.filter(item => item.todo.length > 5);
        default:
            return state
    }
}