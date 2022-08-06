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
//import GoogleLogin from "react-google-login";


const LOGIN_URL='/verification';

const Login=()=>{
    const navigate=useNavigate();
    const {setAuth}=useContext(AuthContext);
    
 
     const paperStyle={padding :20,height:'70vh',width:290,margin:"20px auto"}
     const avatarStyle={backgroundColor:'#1bbd7e'}
     const btnstyle={margin:'8px 0'}
     const userRef=useRef();
     const errRef=useRef();
     const [user, setUser]=useState('');
     const [pwd, setPwd]=useState('');
     const [errMsg, setErrMsg]=useState('');
     const [success,setSuccess]=useState(false);
    // const [authenticated, setauthenticated]=useState(localStorage.getItem(localStorage.getItem("authenticated")||false));
     useEffect(()=>{
        userRef.current.focus();
     },[])

     useEffect(()=>{
        setErrMsg('');
     },[user,pwd])

     const handleSubmit=async(e)=>{
        e.preventDefault();
        const baseURL = "http://localhost:8080/api/user/"+user;
        // axios.get(baseURL,{
        //     'Access-Control-Allow-Origin' : '*',
        //     'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        //     }
        // ).then((response) => {

        //     console.log(response.data);
        //   });
        try{
       const response =await axios.get(baseURL,
          {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            }
    // JSON.stringify({emailId: user,password: pwd}),
    //  {
    //     headers:{'Content-Type':'application/json'},
    //     withCredentials:true
    // }
    );
    console.log(response.status);
    if(response.status===404)
    {
        console.log("User not found");
        //<Redirect to='/buddies'/>
        
    }
    else{
    console.log(JSON.stringify(response?.data));
    console.log(user,pwd);
    //console.log(JSON.stringify(response));
    //const accessToken=response?.data?.accessToken;
        setAuth({user,pwd});
        setUser('');
        setPwd('');
        setSuccess(true);
        if(pwd===response.data.password)
        {
            //  setauthenticated(true)
            //  localStorage.setItem("authenticated",true);
             navigate("/buddies");
            console.log("logged in");
        }
        else
        // { setauthenticated(true);
        //     localStorage.setItem("authenticated",true);
            
           
            console.log("Credential mismatch!!Please check your username or password");
        }
    }
        catch(err)
        {
            console.log("User not found");
            //console.log("Credential mismatch !!please check your username or password");
            // setauthenticated(true);
            // localStorage.setItem("authenticated",true);
            navigate("/signup");
            // if(!err?.response){
            //     setErrMsg('No server Response');
            // }
            // else if(err.response?.status===400){
            //     setErrMsg('Missing Username or Password');
            // }else if(err.response?.status===401){
            //     setErrMsg('Unauthorized');
            // if(err.response.status==404){
            //     setErrMsg('Login Failed');
            //     console.log(errMsg);
            // }
            // errRef.current.focus();

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
            
            <label htmlFor="username">Username:</label>
            <input type="text" 
            id="username" 
            ref={userRef} 
            autoComplete="off"
            
            onChange={(e)=> setUser(e.target.value)} 
            value={user} required/>

<label htmlFor="password">Password:</label>
            <input type="password" 
            id="password" 
           
            onChange={(e)=> setPwd(e.target.value)} 
            value={pwd} required/>
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
            <Button type='submit' name="submit1" color='primary'variant="contained" style={btnstyle} onClick={handleSubmit} >
            
            Sign in
                </Button>
                
                
            <Typography>
                <a href="#" >
                 Forgot password?
                </a>
                </Typography>
                <Typography>Create your account
                <Link to="/signup" >
                 Sign up
                </Link>
                </Typography>
                
            </Paper>
            </form>
        </Grid>
        
        
            
        
       
        </div>
    );
}
export default Login;