import React from 'react'
import Base from '../../Base/Base'
import '../Input_location/design.css'
import {Link} from 'react-router-dom'
const RemoteServicing=()=> {
    return (
        <>
        <Base title="Remote Servicing"> 
        <div className=' Vehicle_info'>
        <Link to="/"><div className="back"> </div></Link>
        <h3>Vehicle info :</h3>N/A
        <br/>
        <h3>Location :</h3>N/A
        <br/>
        <h3>
            Select Service center :
        </h3>
        <Link to="booking">
        <button type='submit' className='VI_submit RSbtn'>Proceed</button>
        </Link>
           

            {/* </form> */}
        </div>
        </Base>
    </>
    )
}
export default RemoteServicing