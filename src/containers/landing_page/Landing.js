import React from 'react'
import './Landing.css'
import pic from './logo1.png'
import img from './header_img.jpg'

function Landing() {
  return (
    <div className='primary'>
       <nav>
       <img className='logo' src={pic} width={350} height={100}/>
       <ul>
           <li><a href="#">Home</a></li>
           <li><a href="#">About</a></li>
           <li><a href="#">Contact</a></li>
           <li><a href="#">Profile</a></li>
       </ul>
       </nav>
       <div className='text-box'>
            <h1>The Smart Way Shopholics Find Their Buddies</h1>
            <p>Life begins at the end of your comfort zone</p>
            <a href='#'>Find Buddies</a>

       </div>
       <div className='user-box'>
        <img src={img} alt=''  />
        </div>


    </div>
  )
}

export default Landing
