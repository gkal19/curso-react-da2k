'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './app';

const renderApp = (Refresh) => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./app', () => {
    const Refresh = require('./app').default
    renderApp(Refresh)
  })
}
