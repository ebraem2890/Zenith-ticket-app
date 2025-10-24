import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../assets/asset'


const LoginPopUp = ({setShowLogin}) => {

    const [currState, setCurrState] = useState("Login")
     const[email,setEmail]= useState("");

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross}  alt="" />
        </div>
        <div className="login-popup-inputs">
            {currState==="Login" ? <></> : <input type="text" placeholder='Your name' required />}
            <input value={email} onChange={(value)=> setEmail(value.target.value)} type="email"  placeholder='Your email' required/>
            <input type="password" placeholder='Password' required />
        </div>
        <button onClick={console.log(email)} >{currState==="Sign Up" ? "Create account" : "Login" }</button>
        <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState==="Login"
        ? <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
        : <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPopUp
