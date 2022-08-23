import React from 'react'
import './aboutus.css'
import pic from '../../assets/logo1.png'
import {  Link } from 'react-router-dom'

const AboutUs = () => (
    <div className='AboutUs'>
        <nav>
            <img className='logo' src={pic} alt='' width={350} height={100} />
            <ul>
                <li><Link to="/Landing">Home</Link></li>
                <li><Link to='/AboutUs'>About</Link></li>
                <li><Link to='/ContactUs'>Contact</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
            </ul>
        </nav>
        <h1 align='center'> Welcome to shop pal</h1> 
         <h5 align='center'>Find your shopping buddies here!!</h5>
         <br/>
         <br/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu dolor in libero lacinia aliquet. 
            Curabitur ullamcorper lacus eget nisi tincidunt blandit. Phasellus suscipit, dui sed consectetur sodales, 
            sapien tortor pellentesque orci, sit amet faucibus urna magna ac massa. Curabitur quis luctus purus, 
            eu iaculis ex. In ultricies lorem et lobortis porttitor. Nunc lectus sem, tristique id aliquet sit amet,
             congue eget magna. Aliquam cursus tellus vitae risus finibus sodales. Suspendisse eu sem ut justo gravida
              molestie eu quis magna. Mauris mi dui, suscipit at tempus ac, tristique et lorem. Aenean in consectetur purus. 
              Morbi fermentum egestas ligula, eget commodo.
        </p>

    </div>
)

export default AboutUs