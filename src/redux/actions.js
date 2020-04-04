import fetch from 'cross-fetch'

export const REQUEST_ALBUMS = 'REQUEST_ALBUMS'

export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS'

function requestAlbums(userId) {
    return {
        type: RECEIVE_ALBUMS,
        userId
    }
}

export function receiveAlbums(userId, json) {
    return {
        type: RECEIVE_ALBUMS,
        userId: userId,
        albums: json.map(album => album),
        receivedAt: Date.now()
    }
}

export function fetchAlbums(userId) {
    return dispatch => {
        dispatch(requestAlbums(userId))
        return fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
        .then(response => response.json())
        .then(json => dispatch(receiveAlbums(userId, json)))
    }
}

function shouldFetchAlbums(state, userId) {
    const albums = state.albumsByUser[userId]

    if (!albums) {
        return true
    } else if (albums.isFetching) {
        return false
    } else {
        return albums.didInvalidate
    }
}


export function fetchAlbumsIfNeeded(userId) {
    return (dispatch, getState) => {
        if (shouldFetchAlbums(getState(), userId)) {
            return dispatch(fetchAlbums(userId))
        }
    }
}

