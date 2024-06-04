import React from 'react'
import "./Card.css"
function Card() {
  return (
    <div className='container'>
      <div className='card'>
          <h1>Contract Us</h1>
          <div className='f-row-input'>
          <h2>Firstname</h2>
          <input type="text" />
          <h2>Last Name</h2>
          <input type="text" />
          </div>
          <div>
            <h2>Email Address</h2>
            <input type="text" />
          </div>
          <div>
            <h2>Query Type</h2>
            <div className='f-row-input'>
                <input type="text" /> <input type="text" />
            </div>
            <div>
              <h2>Message</h2>
              <textarea name="" id=""></textarea>
            </div>
            <div className='f-row-input'> 
              <input type="checkbox" />
            <p>I consent to being contacted by the team</p></div>
           <div>
            <button>Submit</button>
           </div>
          </div>
       
      </div>
      
    </div>
  )
}

export default Card