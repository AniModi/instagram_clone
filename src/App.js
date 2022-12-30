import React, { useState } from 'react';
import './index.css';
import Login from './pages/login/login';
import Register from './pages/register/register';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import Profile from './pages/profile/profile';
import Homepage from './pages/homepage/homepage';
import Navbar from './components/navbar';

const App = () =>{
    const [isLogin,setLogin] = useState(false);
    const login = () =>{
        setLogin(true);
    }
    const register = () =>{
        setLogin(true);
    }
    return(
        <>
        <Navbar></Navbar>
  <BrowserRouter>
    {isLogin?<Redirect to="/profile"></Redirect>:<></>}
    <Route exact path="/">
      <Login onLogin={login}></Login>
    </Route>
    <Route exact path="/login">
      <Login onLogin={login}></Login>
    </Route>
    <Route exact path="/register">
      <Register onRegister={register}></Register>
    </Route>
    <Route exact path="/profile">
      <Profile></Profile>
    </Route>
    <Route exact path="/home">
      <Homepage></Homepage>
    </Route>
  </BrowserRouter>
  </>
);
}

export default App;