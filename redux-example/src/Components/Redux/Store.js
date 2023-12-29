import { applyMiddleware, createStore } from 'redux'
import Reducer from './Reducer'
import { thunk } from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const middleware = [thunk]
const Store = createStore(Reducer,
    composeWithDevTools(applyMiddleware(...middleware)))

export default Store