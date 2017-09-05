/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import './assets/stylesheets/main.scss';
import Root from './components/Root/';
import initialState from './store/initialState';

import configureStore from './store/';

require('./favicon.ico');

const store = configureStore(initialState);

const history = syncHistoryWithStore(browserHistory, store);

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app'), // eslint-disable-line no-undef
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default; // eslint-disable-line global-require
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app'), // eslint-disable-line no-undef
    );
  });
}
