import React from 'react'
import Location from './Location'
import Duration from './Duration'
//import AcceptanceRate from './AcceptanceRate'
import AverageFee from './AverageFee'


const Sidebar = ({handleChange}) => {
    return (
      <div className='space-y-5'>
          <h3 className='text-lg font-bold mb-2'>Filters</h3>
  
          <Location handleChange={handleChange}/>
          <Duration handleChange={handleChange}/>
          {/* <AcceptanceRate handleChange={handleChange}/> */}
          <AverageFee handleChange={handleChange}/>
         
      </div>
    )
  }

export default Sidebar