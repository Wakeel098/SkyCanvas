import React from 'react'
import { useState } from 'react'
import Description from './Description'

function Title({data}) {
    //  console.log("in title")
    //  console.log(data)
     
     
     

     const [display,Setdisplay]=useState(false)
     

     const handleInfoClick=()=>{
         
        setTimeout(() => {
            Setdisplay(true);
          }, 300);
     }

  return (
    <div>
    <div className="text-white mx-8 my-[-8px] flex justify-between items-center z-15" >
      
      
        <div>
       <p className="opacity-75 font-bold text-2xl">  {data?.title}</p>
       <p className="opacity-60"> SkyCanvas</p>
       </div>
       <button onClick={handleInfoClick} className='text-2xl opacity-75 mr-6 '>
       <i className="fa-solid fa-circle-info"></i>
       </button>
       
      
    </div>
    {display && <Description Setdisplay={Setdisplay}  data={data} />}
    
        

    </div>
  )
}

export default Title