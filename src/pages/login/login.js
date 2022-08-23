import React, { useEffect, useRef, useState ,useContext} from 'react';
//import axios from "axios";
import {Grid,Paper,Avatar,TextField,Button,Typography } from '@mui/material';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormcontrolLabel from '@material-ui/core/FormcontrolLabel';
import Checkbox from '@material-ui/core/Checkbox';
import AuthContext from '../../context/AuthProvider';
import {  Link, Redirect, useNavigate } from 'react-router-dom';
import axios from '../../api/axios';
import { Navigate ,Route} from 'react-router-dom';
import './login.css'
//import GoogleLogin from "react-google-login";


const LOGIN_URL='/verification';

const Login=()=>{
    const navigate=useNavigate();
    const {setAuth}=useContext(AuthContext);
    
 
     const paperStyle={padding :20,height:'70vh',width:365,margin:"20px auto"}
     const avatarStyle={backgroundColor:'#1bbd7e'}
     const btnstyle={margin:'8px 0'}
     const userRef=useRef();
     const errRef=useRef();
     const [user, setUser]=useState('');
     const [pwd, setPwd]=useState('');
     const [errMsg, setErrMsg]=useState('');
     const [success,setSuccess]=useState(false);
     useEffect(()=>{
        userRef.current.focus();
     },[])

     useEffect(()=>{
        setErrMsg('');
     },[user,pwd])

     const handleSubmit=async(e)=>{
        e.preventDefault();
        const baseURL = "http://localhost:8080/api/user/"+user;
        try{
       const response =await axios.get(baseURL,
          {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            }
    );
    console.log(response.status);
    if(response.status===404)
    {
        console.log("User not found");
    }
    else{
    console.log(JSON.stringify(response?.data));
    console.log(user,pwd);
        setAuth({user,pwd});
        setUser('');
        setPwd('');
        setSuccess(true);
        if(pwd===response.data.password)
        {
             navigate("/buddiespage");
            console.log("logged in");
        }
        else
            
           
            console.log("Credential mismatch!!Please check your username or password");
        }
    }
        catch(err)
        {
            console.log("User not found");
            navigate("/signup");
        }
    } 
    return(
        <div>
        <Grid>
        <form>
            <Paper elevation={20} style={paperStyle}> 
            <Grid align='center'>
                <section>
                <p ref={errRef} className={errMsg ? "errmsg":
                "offscreen"} aria-live="assertive">{errMsg}</p>
                </section>
            <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
            <h2>Sign in</h2>
            </Grid>
            
            {/* <label htmlFor="username">Username:</label> */}
            <br/>
            <input type="text" 
            id="username" 
            ref={userRef} 
            autoComplete="off"
            class="form-control" aria-label="Enter your Username.." onfocus="this.placeholder=''" 
           onblur="this.placeholder='Enter your Username..'"
            
            onChange={(e)=> setUser(e.target.value)} 
            value={user} required
            className="input"
        placeholder="Enter your Username.."
            />
            <br/>
            {/* <label htmlFor="password">Password:</label> */}
            <br/>
            <input type="password" 
            id="password" 

            ref={userRef} 
            autoComplete="off"
            class="form-control" aria-label="Enter your Password.." onfocus="this.placeholder=''" 
           onblur="this.placeholder='Enter your Password..'"
            onChange={(e)=> setPwd(e.target.value)} 
            value={pwd} required
            className="input"
        placeholder="Enter your Password.."
            
            
            />


            <FormcontrolLabel
            control={
                <Checkbox
                name="checkedB"
                color="primary"
                />
            }
           label="Remember me"
            />
            <br/>
            <Grid align='center' width='300'>
            <Button type='submit' name="submit1" color='primary' variant="contained"  onClick={handleSubmit} >
            
            Sign in
                </Button>
                <br/>
                <br/>
            
                <Typography>
                <a href="#" >
                 Forgot password?
                </a>
                </Typography>
                <br/>
                <Typography>Create your account :
                <Link to="/signup" >
                 Sign up
                </Link>
                </Typography>
                </Grid>
                
                
            
                
            </Paper>
            </form>
        </Grid>
        
        
            
        
       
        </div>
    );
}
export default Login;