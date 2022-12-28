import React from 'react';
import "./login.css";
import Logo from "./../../images/logo-ig-png-32469.png";
import {Link} from "react-router-dom";
const Login = () =>{
    return(
        <div id="login">
            <img src={Logo} alt="instagram" id="instagram_logo"></img>
            <input type="text" name="username" className='inputBoxes' placeholder='Username'></input>
            <input type="password" name="password" className='inputBoxes' placeholder='Password'></input>
            <button value="submit" id="loginButton">Login</button>
            <Link to="./../register">{"Don't have an account?"}</Link>
        </div>
    );
}

export default Login;