import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css';
import { Link } from 'react-router-dom';
import CreatePage from '../pages/CreatePage';
function Navbar({setColor,Color}) {
    return (
    
    <div className='w-full '>

<div className='things flex flex-row justify-end gap-10 px-10 py-6 bg-blue-500'>
<div className='thing1  '>
<Link to="/">

 <i className="ri-home-line "></i> 
</Link>
</div>
<div className='thing2 flex flex-col items-center gap-10 justify-end '></div>



<Link to="/create">
  <i className="ri-add-circle-fill"></i>
</Link>


      <button className='hover:animate-pulse' onClick={()=>{
          setColor((prev)=>(prev==="white"?"black":"white"))
        }}>
            {
                Color=="black"&&
                <i className="ri-moon-fill"></i>
            }
      {
          Color=="white"&&
          <i className="ri-sun-fill"></i>
        }
</button>
        </div>
        </div>
  )
}

export default Navbar
