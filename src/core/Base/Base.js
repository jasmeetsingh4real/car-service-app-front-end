import React from 'react'
import './baseStyle.css'
const Base=({
    title="My Title",
    description = "",
    className = "",
    children

})=> {
    
    return (
        <div>
            <div>
                <div className="heading">
                    <h2 className="display-4">{title}</h2>
                    <p className="leadheading">{description}</p>
                </div>
                <div className={className}>{children}</div>
                <footer className='basefooter'>
                      <h3 className='footertext'>
                        jaggitech.corp
                    </h3>
                <div className='sm1 sm'> </div>
                <div className='sm2 sm'> </div>
                <div className='sm3 sm'> </div>
               
                  
                </footer>
            </div>
          
        </div>
    )
}


export default Base;