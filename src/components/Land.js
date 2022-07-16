import React from 'react'
import './Landing.css'
import pic from "./logo.png"
import img from "./headerpic.png"
function Land() {
  return (
    <>
     <div className='header'>
        <nav>
            <img className="logo" src={pic} alt='' width={350} height={100}/>
                <ul>
                    <li> <a href="#">Home</a></li>
                    <li> <a href="#">About</a></li>
                    <li> <a href="#">contact</a></li>
                    <li> <a href="#">Profile</a></li>
                </ul>
        </nav>

        <div className='text-box'>
            <h1>The Smart Way Shoplholics<br/> Find their buddies</h1>
            <p align="center">
            Lorem ipsum dolor sit amet,consecture adipincing elit phasellus<br></br>
            ante mi,sem vel</p>
            <a href='#'>Find Buddies</a>
        </div>
        <div class="user-box">
            <img src={img} alt=''/>
        </div>
    </div>
    </>
  )
}

export default Land