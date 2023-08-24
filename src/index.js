import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import './styles/index.css';
import CurrentUserProvider from './components/CurrentUserProvider/CurrentUserProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <CurrentUserProvider>
      <App />
    </CurrentUserProvider>
  </BrowserRouter>,
);

reportWebVitals();
