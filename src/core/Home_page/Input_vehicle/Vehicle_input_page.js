import React,{useState} from 'react';
// import './Design.css';
import {Redirect} from 'react-router-dom';
import { Link } from 'react-router-dom';

const Vehicle_input_page=()=>{

    //creating a generic object using useState
    const [vehicleInfo,setVehicleInfo]=useState({
        vehicle: "",
        model: "",
        year: "",
        fault:""

    })

        const [check,setCheck]=useState(false);
   
    const getVehicleInfo=(val)=>{
    
        const add=(val.target.value)
        const key=(val.target.name)
        setVehicleInfo({
            ...vehicleInfo,
            [key]:add
        })
            
     }

    

     const submitVehicleInfo=(e)=>{
        e.preventDefault();
        console.log(vehicleInfo); 
        alert("Vehicle info submitted!");
        setCheck(true)
       
       
    }
        
    
    return(
    <>
        <div className='Vehicle_info_bg'>
        <h1 className='VIheading'>Enter Vehicle Details</h1>
            
            <form className='Vehicle_info' onSubmit={submitVehicleInfo} >

            <Link to="/"><div className="back"> </div></Link>
       
           
     
            Vehicle: <br />
            <input placeholder='eg- Car,bike,truck etc' className='VI_input' 
            onChange={getVehicleInfo} value={vehicleInfo.vehicle} name="vehicle" required/><br/>

            

            Model: <br/>
            <input placeholder='Range-Rover Vellar'className='VI_input' onChange={getVehicleInfo} 
            value={vehicleInfo.model}  name="model" required/><br/>



            Year: <br /> 
            <input type='number' placeholder='eg- 2008' className='VI_input' onChange={getVehicleInfo}
            value={vehicleInfo.year}  name="year" required/><br/>



            Fault: <br />
            <textarea placeholder='eg- Engine fault' className='VI_textarea' onChange={getVehicleInfo} 
            value={vehicleInfo.fault}  name="fault" required/><br/>
          


            <button type='submit' className='VI_submit'  >Submit</button>
            {check&&<Redirect to="/"/>}
           

            </form>
        </div>
    </>)
}
export default Vehicle_input_page;