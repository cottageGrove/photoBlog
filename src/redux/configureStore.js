import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import rootReducer from './reducers'
import thunk from 'redux-thunk'

const loggerMiddleware = createLogger()

export default function configureStore(preLoadedState) {
    return createStore(
        rootReducer,
        preLoadedState,
        applyMiddleware(thunkMiddleware, loggerMiddleware)
    )
}