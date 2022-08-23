import React from 'react'
import './profile.css'
import pic from '../../assets/logo1.png'
import prof from '../../assets/profile.png'
import {  Link } from 'react-router-dom'

function profile() {
  return (
    <div className='header'>
        <nav>
            <img className='logo' src={pic} alt='' width={350} height={100} />
            <ul>
                <li><Link to="/Landing">Home</Link></li>
                <li><Link to='/AboutUs'>About</Link></li>
                <li><Link to='/ContactUs'>Contact</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
            </ul>
        </nav>

        <div className="container mt-5">
    
            <div className="row d-flex justify-content-center">
        
            <div className="col-md-7">
            
            <div className="card p-3 py-4 ">
                <div className='float-container'>
                <div className="float-child text-center">
                    <img className='prof' src={prof} width="200" class="rounded-circle"/>
                </div>
                
                <div className=" float-child text-center mt-3">
                    
                    <div className="mt-2 mb-0">
                        <h5 align='left'>Name: Praveshika</h5>
                        <h5 align='left'>Email: pra@gmail.com</h5>
                        <h5 align='left'>Preferred Location: Dilsukhngar </h5>
                        <h5 align='left'>Preferred Timings: 4:15pm</h5>
                        <h5 align='left'>Preferred Days: Wednesday</h5>
                        
                    
                    </div>
                    </div> 
                    
                    <div className="buttons inside">
                        
                        <button className="btn btn-outline-primary px-4" >Edit Profile</button>
                        
                    </div>
                    
                    
                </div>
            </div>
        </div>
        </div>
    </div>

    <div className="buttons hello" >
                        
                        <button className="btn btn-outline-primary px-4">Logout</button>
                        <button className="btn btn-primary px-4 ms-3">Find Pal</button>
                    </div>
    </div>
  )
}

export default profile
