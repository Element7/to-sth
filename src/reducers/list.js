export const list = (state = [], action) => {
    switch (action.type) { // (2)
        case 'FETCH_LIST_SUCCESS':
            return [
                ...action.list
            ]
        default:
            return state
    }
}