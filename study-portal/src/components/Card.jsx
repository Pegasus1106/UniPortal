import React from 'react'
import { FaIndianRupeeSign } from 'react-icons/fa6';
import { FiClock, FiMapPin } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Card = ({data}) => {

    const {College, CollegeLogo, Course, Duration, City, State, Country, AverageFee, AcceptanceRate} = data;


  return (
    <section className='card'>
        <div className='flex gap-4 flex-col sm:flex-row items-start' >
            <img src={CollegeLogo} alt="" />
            <div>
                <h4 className='text-primary mb-1'>{College}</h4>
                <h3 className='text-lg font-semibold mb-2'>{Course}</h3>

                <div className='text-primary/70 text-base flex flex-wrap gap-2 mb-2'>
                    <span className='flex items-center gap-2'><FiMapPin/> {City}</span>
                    <span className='flex items-center gap-2'><FiClock/> {Duration} Years</span>
                    <span className='flex items-center gap-2'><FaIndianRupeeSign/> {AverageFee}K </span>
                </div>
                <p className='text-base text-primary/70'>Acceptancy Rate : {AcceptanceRate}%</p>
            </div>
        </div>
    </section>
  )
}

export default Card