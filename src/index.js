import React from 'react';
import ReactDOM from 'react-dom';
import App from './layout/App';
import './index.css';
import './fontAwesome';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import { reducers as bnReducers, sagaWatchers as bnSagas } from 'bounties';
import { reducers as modulesReducers, sagaWatchers as modulesSagas } from './modules';

import client from 'bounties'

client.settings = {
  "networkName": "starter kit",
  "requiredNetwork": "rinkeby",
  "url": {
    "mainNet": "http://localhost:8000",
    "rinkeby": "http://localhost:8000"
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    ...bnReducers,
    ...modulesReducers
  }),
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

[...modulesSagas, ...bnSagas]
  .map(saga => sagaMiddleware.run(saga, store.dispatch));

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);