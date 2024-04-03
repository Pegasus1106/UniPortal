import React, { useState } from 'react'
import {FiMapPin, FiSearch} from "react-icons/fi"

const Banner1 = () => {

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-10 py-14">
        <h1 className='text-5xl font-bold text-primary mb-3'>Discover Student Experiences: <span className='text-blue'>Read Now!</span></h1>
        <p className='text-lg text-black/70 mb-8 '>Explore Current Student Experiences in Your Preferred Colleges!</p>
        {/* <button className="box-button">Add your Experience</button> */}
        
    </div>
  )
}

export default Banner1
