import React from 'react';
import Base from '../Base/Base';
import './contact_us.css';
import email_pic from './email_pic.png';
import phone from './whatsapp.png';
import Navigation from '../Home_page/Nav_bar/Navigation'

const Contact =()=>
{
    return(
        <Base title="Contact Us">
        <Navigation/>
        <div className='contact_title'>
                <a href="mailto:jaggi_car_service@gmail.com" target='_blank'>
                    <div className='sub_head1'>
                        <img src={email_pic} height='100px' />
                        <h3>E-mail us at</h3>
                        <h4>jaggi_car_service@gmail.com</h4>
                    </div>
                 </a>
                    <div className='sub_head2'>
                        <img src={phone} height='100px' />
                        <h3>Phone:</h3>
                        <h4>981322420</h4>
                    </div>
            </div>
      
       </Base>
    )
}
export default Contact;