import React from 'react'
import pfp from "../../assets/Profile-pic.png"
import "./navbar.css"
import bell from "../../assets/bell.png"
import wallet from "../../assets/wallet.png"
import expand from "../../assets/expand.png"


const Navbar = () => {
  return (
  
    
     <header>
            
            <nav>
               <div className='logo'>
                <h2>aBit</h2>
               </div>
               <div className='links'>
                 <div className='share-div'><span>Share new video</span></div>
                 <div className='img-links'>
                   <img src={wallet} alt='wallet'/>
                   <img src={bell} alt='bell'/>
                   <img src={pfp} alt='pfp'/>
                   <img src={expand} alt='expand'/>
                 </div>
               </div>
            </nav>

        </header>
        
    
        
        
    
  )
}

export default Navbar