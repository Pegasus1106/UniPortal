import React, { useState } from 'react';
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6";
import axios from 'axios';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [show, setShow] = useState(false); 
  
  const sendEmail = async (e) => {
    e.preventDefault();
    
    try {
      const res = await fetch("/register", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              email
          })
      });

      const data = await res.json();
      console.log(data);

      if (data.status === 401 || !data) {
          console.log("error")
      } else {
          setShow(true);
          setEmail("")
          console.log("Email sent")
      }
    } catch (error) {
      console.error('Error occurred while sending email:', error);
      // Handle error here, e.g., set an error state to display an error message to the user.
    }
  };

  return (
    <div>
      <div>
        {show ? (
          <Alert variant="primary" onClose={() => setShow(false)} dismissible>
            Your Email Succesfully Send
          </Alert>
        ) : null}
        <form onSubmit={sendEmail}> 
          <h3 className='text-lg font-bold mb-2 flex items-center gap-2 '>
            <FaEnvelopeOpenText/>Email me for Updates
          </h3>
          <p className='text-primary/70 text-base mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis soluta repellendus laudantium ullam cumque voluptas dolores, consequuntur, in maiores quaerat hic qui commodi nam nemo.</p>
          <div className='w-full space-y-4'>
            <input 
              type="email" 
              name="email" 
              id="email" 
              placeholder='name@mail.com' 
              className='w-full block py-2 pl-3 border focus:outline-none' 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required
            />
            <input 
              type="submit" 
              value={"Subscribe"} 
              className='w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold'
            />
          </div>
        </form>
      </div>
      {/* 2nd part */} 
      <div className='mt-20'>
        <h3 className='text-lg font-bold mb-2 flex items-center gap-2 '>
          <FaRocket/>Get noticed faster
        </h3>
        <p className='text-primary/70 text-base mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis soluta repellendus laudantium ullam cumque voluptas dolores, consequuntur, in maiores quaerat hic qui commodi nam nemo.</p>
        <div className='w-full space-y-4'>
          <input 
            type="submit" 
            value={"Upload Your Resume"} 
            className='w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold'
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
