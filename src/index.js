import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//passes store prop to provider
const store = configureStore();
const persistor = persistStore(store);
//passes PersistGate, App, and store object to provider
ReactDOM.render(
  <Provider store={store}>
      <PersistGate 
      loading={<div>Loading...</div>}
      persistor={persistor} >
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
reportWebVitals();
