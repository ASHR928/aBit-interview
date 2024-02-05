import React from 'react'
import cover from '../../assets/cover.svg'
import "./Hero.css"
import profile from "../../assets/profilepic.svg"

const Hero = () => {
  return (
    <section className='hero-section'>
      <div className='bg-img'>
        <img src={cover} alt='cover'/>
      </div>
      <div className='banner'>
        <p>
        John Bill / Creator / Moved to NYC / 27.11.22 / Live now/John Bill / Creator / Moved to NYC / 27.11.22 / Live now / John Bill / Creator / Moved to NYC / 27.11.22 / Live now
        </p>

      </div>
      <div className='profile'>
        <div className='profile-pic'>
            <img src={profile} alt='profile-pic'/>
        </div>
        <div className='about'>
            <div className='name'>
                <h3>DAN MACE</h3>
                <span>/Johny_Films/</span>
            </div>
            <div className='about-content'>
                <p>Bio</p>
                <p>
               Simply a film fan creating original content for YouTube. Let’s Collaborate.
                </p>
              <div className='button'>
                <button id='btn-1'>Creator</button>
                <button id='btn-2'>Button</button>
              </div>
            </div>
        </div>

      </div>
    </section>
  )
}

export default Hero