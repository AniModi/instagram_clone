import React from 'react';
import "./register.css";
import Logo from "./../../images/logo-ig-png-32469.png";
import {Link} from "react-router-dom";
const register = () =>{
    return(
        <div id="register">
            <img src={Logo} alt="instagram" id="instagram_logo"></img>
            <input type="email" name="email" className='inputBoxes' placeholder='Email'></input>
            <input type="text" name="username" className='inputBoxes' placeholder='Username'></input>
            <input type="password" name="password" className='inputBoxes' placeholder='Password'></input>
            <button value="submit" id="signUpButton">Sign Up</button>
            <Link to="./../login">{"Already have an account?"}</Link>
        </div>
    );
}

export default register;