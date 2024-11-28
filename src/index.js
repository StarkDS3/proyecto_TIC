import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Route} from 'react-router-dom'
import RoutesCustom from './routes';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <RoutesCustom/>
  </BrowserRouter>
);
