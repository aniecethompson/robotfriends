const initialStateSearch ={
    searchField: ''
}

export const setSearchField = (state=initialStateSearch, action={})=>{
    switch(action.type){
        case 'CHANGE_SEARCH_FIELD':
            return Object.assign({}, state, {searchField: action.payload})
        default:
            return state
    }
}

const intialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
}


export const requestRobots = (state=intialStateRobots, action={}) => {
    switch(action.type){
        case 'REQUEST_ROBOTS_PENDING':
            return Object.assign({}, state, {isPending: true})
        case 'REQUEST_ROBOTS_SUCCESS':
            return Object.assign({}, state, {robots: action.payload,isPending: false})
        case 'REQUEST_ROBOTS_ERROR':
            return Object.assign({}, state, {error: action.payload,isPending: false})
        default:
            return state
        }
}