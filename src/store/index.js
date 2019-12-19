import { createStore, compose, applyMiddleware } from 'redux';

import rootReducer from './rootReducer';

const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(),
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : f=>f,
  )
);
export default store;