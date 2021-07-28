import React, { useState } from 'react';
import Base from '../../core/Base/Base';
import {Link} from 'react-router-dom';

import './loginDesign.css';
const Register=()=>{

    const [userInfo,setUserInfo]=useState({
        username:"",
        password:"",
        phone:"",
        email:""
    })



    const getUserInfo=(val)=>{
        const value=(val.target.value)
        const key=(val.target.name)
        setUserInfo({
            ...userInfo,[key]:value
        })
    }
    const submitUserInfo=(e)=>{
        e.preventDefault()
        console.log(userInfo);
    }

 return(
    <>
     <div className='page_background'>
          <div className='carpic'></div>
          <Link to="/"><div className="backbtn"> </div></Link>
           <div className='loginform'>
            <form onSubmit={submitUserInfo}>
            <h2>Create account</h2>
             
                <input onChange={getUserInfo} value={userInfo.username} name="username" placeholder="Username" required/><br/>
                <input onChange={getUserInfo} value={userInfo.password} name="password" placeholder="Set Password" required/><br/>
                <input onChange={getUserInfo} value={userInfo.phone} name="phone" placeholder="Phone-no" required/><br/>
                <input onChange={getUserInfo} value={userInfo.email} name="email" placeholder="Enter E-mail" required/> <br/>
                 {/* <textarea placeholder='Enter Address'/> */}
                
               
                
                <button type="submit">Register</button><br/>
              
              </form>
           </div>
        </div>
        </>
    )
}
export default Register;
