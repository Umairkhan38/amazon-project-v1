import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="login">
            <Link to="/Home">
            <img className="login--logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="amazon" />
            </Link>
            <div className="login--container">
                <h2>Sign-in</h2>
                <form>
                <h5>E-mail</h5>
                <input type="text" />
                <h5>Password</h5>
                <input type="Password" />
                <button className="login--signButton">Sign In</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice,Our Cookies Notice and Our Interest Based Ad Notes </p>
            <button className="login--registerButton">Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
