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
        case 'DIS_POST':
            return [
                ...state
            ]
        default:
            return state
    }
}