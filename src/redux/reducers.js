import {combineReducers} from 'redux'

import {
    REQUEST_ALBUMS,
    RECEIVE_ALBUMS
} from './actions'


function items (
    state = {
        isFetching: false, 
        albums: []
    },
    action
) {
    switch (action.type) {
        case REQUEST_ALBUMS:
            return Object.assign({}, state, {
                isFetching: true
            })
        case RECEIVE_ALBUMS:
            return Object.assign({}, state, {
                isFetching: false, 
                albums: action.albums,
                lastUpdated: action.receivedAt
        })
        default: 
            return state 
    }

}

function albumsByUser(state = {}, action) {
    switch(action.type) {
        case REQUEST_ALBUMS: 
            return Object.assign({},state, {
                [action.userId] : items(state[action.userId], action)
            })
        default:
            return state 
    }
}

const rootReducer = combineReducers({
    albumsByUser,
    items
})

export default rootReducer