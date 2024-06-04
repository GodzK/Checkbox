import React from 'react'
import "./Card.css"
function Card() {
  return (
    <div className='container'>
      <div className='card'>
          <h2>Contract Us</h2>
          <div className='f-row-input'>
            <div className='box'>
               <h5>Firstname</h5>
          <input type="text" />
            </div>
          <div className='box'>
             <h5>Last Name</h5>
          <input type="text" />
          </div>
         
          </div>
          <div className='box'>
            <h5>Email Address</h5>
            <input type="text" className='input' />
          </div>
          <div className='box'>
            <h5>Query Type</h5>
            <div className='f-row-input'>
              <div className='box-office'>
                <label >
                  <input type="checkbox" />General Enquiry
                </label>
              </div>
              <div className='box-office'>
                <label >
                  <input type="checkbox" />Support Request
                </label>
              </div>
            </div>
            <div className='box'>
              <h5>Message</h5>
              <textarea name="" id=""></textarea>
            </div>
            <div className='f-row-input'> 
              <input type="checkbox" />
            <p>I consent to being contacted by the team</p></div>
           <div className='box'>
            <button className='btn'>Submit</button>
           </div>
          </div>
       
      </div>
      
    </div>
  )
}

export default Card