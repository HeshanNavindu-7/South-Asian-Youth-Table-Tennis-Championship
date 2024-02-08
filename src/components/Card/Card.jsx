import React from 'react'
import "./card.css"
const Card = () => {
  return (
    <div className='text-center'>
        <h1 className="text-4xl font-bold mt-24 ">FIXTURES & RESULTS</h1>
    
          <div className='flex justify-center mt-16  '>
       
            <div className='card bg-blue-700 text-white w-5/12   shadow-md px-8 py-6'>

            </div>    
            <div className='card bg-red-800 text-white w-5/12  shadow-md px-8 py-6'>

            </div>    
         </div>
    </div>
  )
}

export default Card;
