import React, { useState } from 'react';
import "./login.css";
import Logo from "./../../images/logo-ig-png-32469.png";
import {Link} from "react-router-dom";
const Login = (props) =>{
    const loginFunc = ()=>{
        props.onLogin();
    }
    
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const usernameChange = (event) =>{
        setUsername(event.target.value);
    }
    const passwordChange = (event) =>{
        setPassword(event.target.value);
    }

    return(
        <div id="login">
            <img src={Logo} alt="instagram" id="instagram_logo"></img>
            <input type="text" name="username" className='inputBoxes' placeholder='Username' value={username} onChange={usernameChange}></input>
            <input type="password" name="password" className='inputBoxes' placeholder='Password' value={password} onChange={passwordChange}></input>
            <button value="submit" id="loginButton" onClick={loginFunc}>Login</button>
            <Link to="./../register">{"Don't have an account?"}</Link>
        </div>
    );
}

export default Login;