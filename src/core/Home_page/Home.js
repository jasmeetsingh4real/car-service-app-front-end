import React from 'react';
import './home.css';
import {Link} from 'react-router-dom'
import Base from '../Base/Base';
import Navigation from './Nav_bar/Navigation';


const Home =()=>
{

  return(

<Base
title="Jaggi Car Service"
description="your trip companion"
>
<Navigation/>
    <div className='home_bg'>
            <div className='vehicle'>
                  <Link to='vehicle_input_page'>
                  <button  >Select Your Vehicle </button>
                  </Link>
            </div>
            
            <div className='loc'>
                  <Link to='input_location_page'>
                  <button  id='location_text'>Enter Location</button> 
                  </Link>
            </div>
            
            <form className='loc_car'>

                    <div className='vehicle_input'></div>
                    <div className='loc_input'></div>
                     <Link to='remoteservicing'>
                    <button className='home_btn'>Remote Servicing</button>
                    </Link>
                    <button className='home_btn'>Locate Service Center</button>
                    <button className='home_btn'>Online Booking</button>
             </form>
      </div>
    </Base>
    )
} 
export default Home;



