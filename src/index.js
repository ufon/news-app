import React from 'react';

import { render } from 'react-dom';

import { Provider } from 'react-redux';

import { AppContainer } from 'containers';

import { store, history } from './store/configureStore';

render(
  <Provider store={store}>
    <AppContainer history={history} />
  </Provider>,
  document.getElementById('root')
);
