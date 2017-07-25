import React, { Component } from 'react';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { StyleSheet, Text, View } from 'react-native';
import reducer from './src/js/reducers';

import AppWithNavigationState from './src/js/navigation/app_navigator';

const loggerMiddleware = createLogger(
  { predicate: (getState, action) => __DEV__ }
);

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
  );
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

store.subscribe(() => {
  //console.log('Store changed', store.getState());
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
