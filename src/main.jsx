import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import App from './App.jsx'
import './index.css'
import store from './store/configureStore.jsx'
import { StrictMode } from 'react';
import React from 'react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)