import 'reflect-metadata';

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/:' element={<App/>}/>
    <Route path='/:currencyCode' element={<App/>}/>
    </Routes>
    </BrowserRouter> 
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
