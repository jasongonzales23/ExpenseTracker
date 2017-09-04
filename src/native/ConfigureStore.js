import {createStore, applyMiddleware, compose} from 'redux'
import reducers from '../reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'remote-redux-devtools'

let middleware = [
  thunk,
]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(...middleware),
  )
)

export default store
