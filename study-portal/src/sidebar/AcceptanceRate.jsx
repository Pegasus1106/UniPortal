import React from 'react'
import InputField from '../components/InputField'

const AcceptanceRate = ({handleChange}) => {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Acceptance Rate</h4>
        <div>
        <label className='sidebar-label-container'>
                <input type="radio" name="test4" id="test4" value="" onChange={handleChange}/>
                <span className='checkmark'></span>Any
            </label>

            <InputField 
            handleChange={handleChange} 
            value={20} 
            title=" <20" 
            name="test4"
            />
            <InputField 
            handleChange={handleChange} 
            value={40} 
            title=" <40" 
            name="test4"
            />
            <InputField 
            handleChange={handleChange} 
            value={60} 
            title=" <60" 
            name="test4"
            />
            <InputField 
            handleChange={handleChange} 
            value={80} 
            title=" <80" 
            name="test4"
            />
        
            
        </div>
    </div>
  )
}

export default AcceptanceRate