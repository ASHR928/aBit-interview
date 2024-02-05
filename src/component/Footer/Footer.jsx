import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
   <>
    <footer>
        <div className='container'>
            <div className='footer-text'>
            <h2>aBit</h2>
            <div className='footer-p'>
            <p>Changing the way in which creators and fans interact.</p>
            </div>
        
            </div>
            <div className='contact-container'>
                <div className='contact'>
                    <h3>Home</h3>
                    </div>
                    <div className='contact'>
                    <h3>Are you a creator</h3>
                    </div>
                    <div className='contact'>
                    <h3>Support</h3>
                </div>

            </div>
           

        </div>
      

    </footer>
   
   </>
  )
}

export default Footer