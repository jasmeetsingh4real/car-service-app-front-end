import React,{useState} from 'react';
import './design.css';  
import {Redirect} from 'react-router-dom';
import "./Backbtn.png"
import { Link } from 'react-router-dom';
import axios from 'axios';

const Input_location_page=()=>{
    
    //creating a generic object using useState
    const [address,setAddress]=useState({
        state: "",
        city: "",
        pin: "",
        landmark:""

    })

        const [check,setCheck]=useState(false);
   
    const getAddress=(val)=>{
    
        const add=(val.target.value)
        const key=(val.target.name)
        setAddress({
            ...address,
            [key]:add
        })

     }

    

    const submitAddress=(e)=>{
        e.preventDefault();
        console.log(address);
        alert("Location Submitted!")
        setCheck(true)

        // axios.post('https://webhook.site/a2f87a41-1f32-41f5-bd46-412d7e698446',address)
        // .then(response=>{
        //     console.log(response);
        // })
        // .catch(error=>{
        //     console.log(error)
        // })
    }
        
    
    return(
    <>
        <div className='Vehicle_info_bg'>

            
            <h1 className='VIheading'>Enter Location Details</h1>
            <form className='Vehicle_info' onSubmit={submitAddress} autoComplete="off">

            <Link to="/"><div className="back"> </div></Link>

            
     
            State: <br />
            <input className='VI_input' onChange={getAddress} value={address.state} name="state" required
                autoComplete="false"
            /><br/>

            City: <br />
            <input className='VI_input' onChange={getAddress} value={address.city}  name="city" required/><br/>

            Pin-code: <br />
            <input className='VI_input' onChange={getAddress} value={address.pin}  name="pin" required/><br/>

            landmark: <br />
            <textarea className='VI_textarea' onChange={getAddress} value={address.landmark}  name="landmark" required/><br/>
          
            <button type='submit' className='VI_submit'  >Submit</button>
            {check&&<Redirect to="/"/>}
           

            </form>
        </div>
    </>)
}
export default Input_location_page;