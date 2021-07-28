import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import './loginDesign.css';
const Login=()=>{

const [loginInfo,setLoginInfo]=useState({
    username:"",
    password:""
});
const setUserInfo=(val)=>{

    const value=(val.target.value)
    const key=(val.target.name)
    setLoginInfo({
        ...loginInfo,
            [key]:value
        
    })
}

const submitLoginInfo=(e)=>{
    e.preventDefault()
    console.log(loginInfo);
}
    return(
        <>
        <div className='page_background'>
        <div className='carpic'></div>
        <Link to="/"><div className="backbtn"> </div></Link>
        <div className='loginform'>
            <form onSubmit={submitLoginInfo}>
            <h2>Login</h2>
               
                <input placeholder="Username" onChange={setUserInfo} value={loginInfo.username} name="username" required/><br/>
                <input type="password" placeholder="password" onChange={setUserInfo} value={loginInfo.password} name="password" required/><br/>
               
                <button type="submit">login</button><br/> 
                <Link className='linktag' to='otp'>Forgot password?</Link><br/>
                <Link className='linktag' to='register'>don't have an account?</Link>
            </form>
        </div>
        </div>
        </>
    )
}
export default Login;
