import React from 'react'
import InputField from '../components/InputField'

const Duration = ({handleChange}) => {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Duration</h4>
        <div>
        <label className='sidebar-label-container'>
                <input type="radio" name="test3" id="test3" value="" onChange={handleChange}/>
                <span className='checkmark'></span>Any
            </label>

            <InputField 
            handleChange={handleChange} 
            value={1} 
            title="1 Year" 
            name="test3"
            />
            <InputField 
            handleChange={handleChange} 
            value={2} 
            title="2 Year" 
            name="test3"
            />
            <InputField 
            handleChange={handleChange} 
            value={3} 
            title="3 Year" 
            name="test3"
            />
            <InputField 
            handleChange={handleChange} 
            value={4} 
            title="4 Year" 
            name="test3"
            />
        
            
        </div>
    </div>
  )
}


export default Duration