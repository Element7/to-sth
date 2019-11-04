const initState = [
    {
        id: '1',
        todo: 'eating'
    },
    {
        id: '2',
        todo: 'cleaning'
    }
]

export const list = (state = initState, action) => {
    switch (action.type) {
        case 'SHOW_CURRENT_LIST':
            return [
                ...state
            ]
        default:
            return state
    }
}