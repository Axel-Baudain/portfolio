// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

import defaultMiddleware from '../middlewares';
import defaultReducer from '../reducers';

// Apply enhancer
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    defaultMiddleware,
  )
);

// Store
const store = createStore(
  defaultReducer,
  enhancers,
);

// Export du store reconstitué
export default store;