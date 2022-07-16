import React from 'react'
import './Landing.css'
import pic from "./logo1.png"
import img from './headerimgnew1.png'

function Landing() {
  return (
    <>
    <div className='header'>
        <nav>
            <img className='logo' src={pic} alt='' width={350} height={100} />
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a  href="#">Contact</a></li>
                <li><a  href="#">Profile</a></li>
            </ul>
        </nav>

        <div className='text-box'>
            <h1>The Smart Way Shopaholics Find Their Buddies</h1>
            <br></br>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
            <a href='#'>Find Buddies</a>

        </div>
        <div className='user-box'>
        <img src={img} alt='' />
        </div>
    </div>

    </>
  )
}

export default Landing
