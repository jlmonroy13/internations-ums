import { createStore, compose, applyMiddleware } from 'redux';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import firebaseConfig from '../constants/firebaseConfig';

const config = {
  userProfile: 'users',
  enableLogging: false,
};

function configureStoreProd(initialState) {
  const middlewares = [thunk.withExtraArgument(getFirebase)];

  return createStore(
    rootReducer,
    initialState,
    compose(reactReduxFirebase(firebaseConfig, config), applyMiddleware(...middlewares)),
  );
}

function configureStoreDev(initialState) {
  const middlewares = [
    thunk.withExtraArgument(getFirebase),
    require('redux-logger').createLogger({ duration: true }), // eslint-disable-line global-require
  ];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;  // eslint-disable-line
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(reactReduxFirebase(firebaseConfig, config), applyMiddleware(...middlewares)),
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

const configureStore =
  process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;
