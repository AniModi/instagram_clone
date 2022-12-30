import React,{useState} from 'react';
import "./register.css";
import Logo from "./../../images/logo-ig-png-32469.png";
import {Link} from "react-router-dom";
const Register = (props) =>{

    const registerFunc = ()=>{
        props.onRegister()
    }
    
    const [email,setEmail] = useState('');
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const emailChange = (event) =>{
        setEmail(event.target.value);
    }
    const usernameChange = (event) =>{
        setUsername(event.target.value);
    }
    const passwordChange = (event) =>{
        setPassword(event.target.value);
    }
    return(
        <div id="register">
            <img src={Logo} alt="instagram" id="instagram_logo"></img>
            <input type="email" name="email" className='inputBoxes' placeholder='Email' value={email} onChange={emailChange}></input>
            <input type="text" name="username" className='inputBoxes' placeholder='Username' value={username} onChange={usernameChange}></input>
            <input type="password" name="password" className='inputBoxes' placeholder='Password' value={password} onChange={passwordChange}></input>
            <button value="submit" id="signUpButton" onClick={registerFunc}>Sign Up</button>
            <Link to="./../login">{"Already have an account?"}</Link>
        </div>
    );
}

export default Register;