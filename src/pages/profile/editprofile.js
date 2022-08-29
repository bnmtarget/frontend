import React from 'react'
import { useEffect, useRef, useState } from 'react';
import { Grid, Paper, Typography, TextField, Button } from '@material-ui/core'
import {useNavigate } from 'react-router-dom';
import { ClassNames } from "@emotion/react";
import axios from "axios";
import { Psychology } from '@mui/icons-material';
//import {   useNavigate } from 'react-router-dom';
const EditProfile = () => {
    const [rows,setRows]=useState([]);
    const [user, setUser]=useState(localStorage.getItem("user")||false);
    const getUserData=async()=>{
        try{
            const data=await axios.get("http://localhost:8080/api/profile/"+user);
            console.log(data.data);
           // setUsers(data.data);
            setRows(data.data);
        }
        catch(e)
        {
            console.log(e);
            alert(e);
        }
        
    }
    useEffect(()=>{
        getUserData()
    },[]);
    const paperStyle = { padding: '30px',height:'90vh', width: 370, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const marginTop = { marginTop: 5 }
     const userRef=useRef();
     const errRef=useRef();
     const navigate=useNavigate();
     const[pl,setPl]=useState('');
    //setPl({rows.prefferedlocations});
     const[ps,setPs]=useState('');
     const[pd,setPd]=useState('');
     const[pt, setPt]=useState('');
    // setPl={rows.prefferedlocations};
     //setPs({rows.prefferedstores});
    // setPd(rows.preffereddays);
     //setPt(rows.prefferedtimings);
    console.log(pl,pt,pd,ps);
     useEffect(()=>{
        userRef.current.focus();
      },[])
      const handleSubmit=async(e)=>{
        e.preventDefault();
        const baseURL = "http://localhost:8080/api/updateprofile/amulya@gmail.com";
        try{
            const response =await axios.put(baseURL,JSON.stringify({ preffereddays:pd,prefferedlocations:pl,prefferedstores:ps,prefferedtimings:pt}),
               { credentials: 'include',
                 'Access-Control-Allow-Origin' : '*',
                 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                 headers: {'Content-Type': 'application/json', },
                 }
                 );
                 console.log(response.status);
                 console.log(response.data);
                 if(response.data==="profile updated")
                {
                    
                  alert("Updated Successfully");
                  navigate("/buddiespage");
                }
                else if(response.data==="Found duplicate entry")
                {
                    alert("A user already registered with the provided found");
                }
                else{
                   
                   alert("Cannot update!!check your details!!");
                   handleClose();
                }
            }
            catch(err)
            {console.log(err);
                console.log("Cannot update user");
                console.log(pd,pl,ps,pt);
            }
        }
 const handleClose=()=>
 {
    navigate("/profile");
 }
    return (
        <Grid>
             <form className={ClassNames.root} onSubmit={handleSubmit}>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <h2 style={headerStyle}>SHOP-PAL</h2>
                    <Typography variant='caption' gutterBottom>Edit Here !</Typography>
                </Grid>
               
                <label htmlFor="PrefferedLocations">PrefferedLocations</label>
                <input type="text" 
                    variant="filled"
                     //required 
                     placeholder={rows.prefferedlocations}
                     id="pl" 
                      ref={userRef} 
                    autoComplete="off"
                    onChange={(e)=> setPl(e.target.value)} 
                   value={pl} />
                   <br/>
                   <br/>
                    <label htmlFor='PrefferedTimings'>PrefferedTimings</label>
                    <input type="text" 
                 placeholder={rows.prefferedtimings}
                 
                 variant="filled"
                
                    //required 
                    id="pt" 
                    ref={userRef} 
                  autoComplete="off"
                  onChange={(e)=> setPt(e.target.value)} 
                 value={pt} />
                 <br/>
                   
                   <br/>
                    <label htmlFor="PrefferedStores">PrefferedStores</label>
                    <input type="text" 
                    variant="filled"
                    placeholder={rows.prefferedstores}
                  // required
                     id="ps" 
                     ref={userRef} 
                   autoComplete="off"
                   onChange={(e)=> setPs(e.target.value)} 
                  value={ps} />
                   <br/>
                   {/* <PhoneInput defaultCountry="IN"  onChange={(e)=> setMobile(e.target.value)} 
                  value={mobile}/> */}
                <br/>
            <label htmlFor="PrefferedDays" >PrefferedDays</label>
            <input type="text" 
            //required
             placeholder={rows.preffereddays}
            id="pd" 
            variant="filled"
            onChange={(e)=> setPd(e.target.value)} 
            value={pd} />
             <br/>
                   
                <br/>
            {/* <input type="password" placeholder="Confirm your password"
            id="confirmpassword" 
            required
            onChange={(e)=> setCpwd(e.target.value)} 
            value={cpwd} />
                    <br/> */}
                   
                    
                    <div>
                    <Button variant="contained" onClick={handleClose} >Cancel
                  </Button>
                <Button type="submit" variant="contained" color="primary">Edit</Button>
                </div>
            </Paper>
            </form>
        </Grid>
    )

}
export default EditProfile;