import { createStore, compose, applyMiddleware } from 'redux'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { createHashHistory } from 'history'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from '../_redux'
import { electronRedux } from 'electron-redux-connector'
export const history = createHashHistory()

function configureStoreProd (initialState) {
  const reactRouterMiddleware = routerMiddleware(history)
  const middlewares = [
    electronRedux('IPC'),
    thunk,
    reactRouterMiddleware
  ]

  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares))
  )
}

function configureStoreDev (initialState) {
  const reactRouterMiddleware = routerMiddleware(history)
  const middlewares = [
    electronRedux('IPC'),
    reduxImmutableStateInvariant(),
    thunk,
    logger,
    reactRouterMiddleware
  ]

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  )

  if (module.hot) {
    module.hot.accept('../_redux', () => {
      const nextReducer = require('../_redux').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}

console.log(process.env.NODE_ENV)
const configureStore =
  process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev

export default configureStore
