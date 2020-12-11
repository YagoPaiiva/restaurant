import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import App from './App';
import {store, persistor} from './Store';


ReactDom.render(
  <Provider store={store}>  
      <PersistGate loading={null} persistor={persistor}>
          <App />
      </PersistGate>
  </Provider>
  , document.getElementById('root'))