import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './pages/login/login';
import Register from './pages/register/register';
import { BrowserRouter, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
    <Route exact path="/">
      <Login></Login>
    </Route>
    <Route exact path="/login">
      <Login></Login>
    </Route>
    <Route exact path="/register">
      <Register></Register>
    </Route>
  </BrowserRouter>
  </>
);
reportWebVitals();
