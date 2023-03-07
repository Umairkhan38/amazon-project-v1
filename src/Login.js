import {useState} from 'react'
import './Login.css';
import { Link,useHistory } from 'react-router-dom';
import {auth} from "./Firebase"


function Login() {
    const history=useHistory();
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")

    const signIn=e=>{
        e.preventDefault();
        console.log("You clicked on sign in button");
          auth.
        signInWithEmailAndPassword(email,password).
        then((auth)=>{
            console.log(auth);
            if(auth){
                history.push('/')
            }
        }).catch(error=>{
          alert(error.message);
        })
    }
 
    const register=e=>{
        e.preventDefault();
        auth.
        createUserWithEmailAndPassword(email,password).
        then((auth)=>{
            console.log(auth);
            alert("User Registered Successfully")
            if(auth){
                history.push('/')
            }
        }).catch(error=>{
          alert(error.message);
        })

    }


    return (
        <div className="login">
            <Link to="/Home">
            <img className="login--logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="amazon" />
            </Link>
            <div className="login--container">
                <h2>Sign-in</h2>
                <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type="Password" value={password} onChange={e=>setPassword(e.target.value)} />
                <button type="submit" className="login--signButton" onClick={signIn}>Sign In</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice,Our Cookies Notice and Our Interest Based Ad Notes </p>
            <button type="submit" className="login--registerButton" onClick={register}>Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
