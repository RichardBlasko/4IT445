import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import ScrollToTop from 'react-router-scroll-top';

import { Router } from 'react-router-dom';
import history from './history';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import { AppRoutes } from './AppRoutes';
import { configureStore } from './store/configureStore.js';

const { store, persistor } = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
        <Router history={history}>
          <ScrollToTop>
            <AppRoutes />
          </ScrollToTop>
        </Router>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
