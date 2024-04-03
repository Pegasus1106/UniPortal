import React from 'react'
import InputField from '../components/InputField'

const AverageFee = ({handleChange}) => {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Average Fee</h4>

        <div>
            <label className='sidebar-label-container'>
                <input type="radio" name="test5" id="test5" value="" onChange={handleChange}/>
                <span className='checkmark'></span>All
            </label>

            <InputField 
            handleChange={handleChange} 
            value={20}
            title="<20" 
            name="test5"
            />
            <InputField 
            handleChange={handleChange} 
            value={40} 
            title="<40" 
            name="test5"
            />
            
            
        </div>
    </div>
  )
}


export default AverageFee