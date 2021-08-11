import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import rootSaga from './saga/rootSaga'
import rootReducer from './reducers/rootReducer'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [logger, sagaMiddleware]

const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(...middlewares))

  sagaMiddleware.run(rootSaga)

  // if (module.hot) {
  //   module.hot.accept('store/reducers', () => {
  //     const nextRootReducer = rootReducer
  //     store.replaceReducer(nextRootReducer)
  //   })
  // }

  return store
}

export const store = configureStore()
