import React from 'react'
import "./About.css"
import token from "../../assets/token.png"
import plus from "../../assets/plus.png"

const About = () => {
  return (
    <section className='about-section'>
        <div className='container'>
          <div className='title'><h2>Releases</h2>
          <p>Videos that you upload in collaboration with aBit appear here.</p>
          </div>
         <div className='box-container'>
            <div className='box-1'>
                <h3 className='box-title'>1</h3>
                <p>Shared Videos</p>
            </div>
            <div className='box-1'>
            <h3 className='box-title'>$9150</h3>
                <p>Funds Raised</p>
            </div>
            <div className='box-1'>
            <h3 className='box-title'>317</h3>
                <p>Co-owner community</p>
            </div>
            <div className='box-1'>
            <h3 className='box-title'>$3804</h3>
                <p>Co-ownerEarnings</p>
            </div>
            
         </div>
          
          
          
          
        </div>

        <div className='media-container'>
            <div className='add-container'>
                <div className='plus-sign'>
                    <img src={plus} alt='plus'/>
                </div>
                <p class="upload-text">You haven’t uploaded any videos with aBit yet. Add now!</p>
              
            </div>
            <div className='token-container'>
                <img src={token} alt='token'/>
            </div>

        </div>

    </section>
  )
}

export default About