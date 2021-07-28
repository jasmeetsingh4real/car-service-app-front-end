import React from 'react';
import {NavLink} from 'react-router-dom';
import dp from './default-user.png';
import './navbar_design.css';



const Navigation=()=>
{
    return(<div className="Navbar">
        <NavLink className='inactive' exact activeClassName='activelink' to='/'>Home</NavLink>
        <NavLink className='inactive' exact activeClassName='activelink' to='/booking'>Bookings</NavLink>
        <NavLink className='inactive' exact activeClassName='activelink' to='/contact'>Contact Us</NavLink>
        <NavLink className='inactive' exact activeClassName='activelink' to='/tc'>Terms & Conditions</NavLink>
        <span className='dp'><img src={dp} height='20px'></img></span>
        <NavLink className='profile_icon'  exact activeClassName='activelink' to='/register'>Sign-up</NavLink>
        
        </div>
    );
}

export default Navigation;