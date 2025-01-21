import React, { useEffect } from 'react'
import { useState } from 'react';

function Description({Setdisplay , data }) {
  // console.log("in description")
//  console.log(data)
 
  const title= data ? data.title : "loading title" 
    const description=data ? data.explanation : "loading explanation"
      const date= data? data.date : "loading date"
   
    const handleclick=()=>{
        


        setTimeout(() => {
            Setdisplay(false);
          }, 300);
    }
  return (
    <div> 
         <div
      className="fixed right-0 top-0 w-[60%] h-[100%] bg-[rgba(50,45,49,0.8)] text-white z-20  overflow-y-auto  "
    >
   
            <div className=" mx-8 my-3 right-0 text-white   ">
            <p className="opacity-75    font-bold text-2xl">   {title} </p>
            {/* <p className="opacity-60 "> Mars is one of the most explored bodies in our solar system</p> */}
                
                <div className="m-5 text-xl font-light "> 
                  {date}
                 </div>
                 <p className='m-2 mb-32'>
                    
                 {/* Mars is the fourth planet from the Sun. The surface of Mars is orange-red because it is covered in iron(III) oxide dust, giving it the nickname "the Red Planet".[22][23] Mars is among the brightest objects in Earth's sky, and its high-contrast albedo features have made it a common subject for telescope viewing. It is classified as a terrestrial planet and is the second smallest of the Solar System's planets with a diameter of 6,779 km (4,212 mi). In terms of orbital motion, a Martian solar day (sol) is equal to 24.6 hours, and a Martian solar year is equal to 1.88 Earth years (687 Earth days). Mars has two natural satellites that are small and irregular in shape: Phobos and Deimos. */}
                  
                  {description}

                 </p>
                 <button  onClick={handleclick}  className="absolute right-5 top-5 " >
                 <i className="fa-solid fa-arrow-right  w-10"></i>
                 </button>

                 {/* <div className="fixed bottom-4 scroll-fixed w-[50%] flex justify-evenly" >

                 <input type="date" onChange={()=>{
                  console.log("try to chane the date")
                 }} value='2025-01-18'  min="2015-01-01" max="2025-12-31" className="w-[90%] bg-[#686767] opacity-85 p-2 text-white rounded-md "  />

                  <button className="bg-[#686767] opacity-85 p-2 rounded-md ml-1 w-[100px] flex items-center justify-evenly"> Set Date
                  <i className="fa-solid fa-arrow-up"></i>
                  </button>
                 </div> */}
            </div>
            
        </div>
         
    </div>
  )
}

export default Description