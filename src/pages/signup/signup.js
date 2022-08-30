


// import React from 'react'
// import { useEffect, useRef, useState ,useContext} from 'react';
// import { Grid, Paper, Typography, TextField, Button } from '@material-ui/core'
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import {  useNavigate } from 'react-router-dom';
// //  const USER_REGEX=/^[a-z][a-z0-9.]\@[a-z]\.[a-z]/;
// //  const PWD_REGEX=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// const REGISTER_URL = 'http://localhost:8080/api/createuser';
// const Signup = () => {
//     const navigate=useNavigate();
//     const paperStyle = { padding: '30px',height:'80vh', width: 300, margin: "20px auto" }
//     const headerStyle = { margin: 0 }
//     const marginTop = { marginTop: 5 }
//     const userRef=useRef();
//     const errRef=useRef();
//     const[user,setUser]=useState('');
//     const[validName,setValidName]=useState(false);
//     const[userFocus,setUserFocus]=useState(false);
//     const[pwd, setPwd]=useState('');
//     const[validPwd,setValidPwd]=useState(false);
//     const[pwdFocus,setPwdFocus]=useState(false);
//     const [matchPwd,setMatchPwd]=useState('');
//     const [validMatch,setValidMatch]=useState('false');
//     const [matchFocus,setMatchFocus]=useState('false');
//     const [errMsg, setErrMsg]=useState('');
//      const [success,setSuccess]=useState(false);
//      useEffect(()=>{
//         userRef.current.focus();
//      },[])
//      useEffect(()=>{
//         const result=USER_REGEX.test(user);
//         console.log(result);
//         console.log(user);
//         setValidName(result);
//      },[user])

//      useEffect(()=>{
//         const result=USER_REGEX.test(pwd);
//         console.log(result);
//         console.log(pwd);
//         setValidPwd(result);
//         const match=pwd===matchPwd;
//         setValidMatch(match);
//      },[pwd,matchPwd])
//      useEffect(()=>{
//         setErrMsg('');
//      },[user,pwd,matchPwd])

//      const handleSubmit = async (e) => {
//         e.preventDefault();
//         // if button enabled with JS hack
//         const v1 = USER_REGEX.test(user);
//         const v2 = PWD_REGEX.test(pwd);
//         if (!v1 || !v2) {
//             setErrMsg("Invalid Entry");
//             return;
//         }
//         try {
//             const response = await axios.post(REGISTER_URL,
//                 JSON.stringify({ user, pwd }),
//                 {
//                     headers: { 'Content-Type': 'application/json' },
//                     withCredentials: true
//                 }
//             );
//             console.log(response?.data);
//             console.log(response?.accessToken);
//             console.log(JSON.stringify(response))
//             setSuccess(true);
//             navigate("/login");
//             //clear state and controlled inputs
//             //need value attrib on inputs for this
//             setUser('');
//             setPwd('');
//             setMatchPwd('');
//         } catch (err) {
//             if (!err?.response) {
//                 setErrMsg('No Server Response');
//             } else if (err.response?.status === 409) {
//                 setErrMsg('Username Taken');
//             } else {
//                 setErrMsg('Registration Failed')
//             }
//             errRef.current.focus();
//         }
//     }

//     return (
//         <>
//             {success ? (
//                 <section>
//                     <h1>Success!</h1>
//                     <p>
//                         <a href="#">Sign In</a>
//                     </p>
//                 </section>
//             ) : (
//                 <section>
//                     <form onSubmit={handleSubmit}>
//         <Grid>
//             <Paper elevation={20} style={paperStyle}>
//                 <Grid align='center'>
//                     <h2 style={headerStyle}>Sign Up</h2>
//                     <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
//                 </Grid>
                
//                     <TextField fullWidth label='Name' placeholder="Enter your name" className={validName ? "valid" : "hide"}
//                      id="username"
//                      ref={userRef}
//                      autoComplete="off"
//                      onChange={(e) => setUser(e.target.value)}
//                      value={user}
//                      required
//                      aria-invalid={validName ? "false" : "true"}
//                      aria-describedby="uidnote"
//                      onFocus={() => setUserFocus(true)}
//                      onBlur={() => setUserFocus(false)} />
//                     <TextField fullWidth label='Email' placeholder="Enter your email" />
//                     <FormControl component="fieldset" style={marginTop}>
//                         <FormLabel component="legend">Gender</FormLabel>
//                         <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
//                             <FormControlLabel value="female" control={<Radio />} label="Female" />
//                             <FormControlLabel value="male" control={<Radio />} label="Male" />
//                         </RadioGroup>
//                     </FormControl>
//                     <TextField fullWidth label='Phone Number' placeholder="Enter your phone number" />
//                     <TextField fullWidth label='Password' placeholder="Enter your password" className={validPwd ? "valid" : "hide"} onChange={(e) => setPwd(e.target.value)} value={pwd} required
//                             aria-invalid={validPwd ? "false" : "true"}
//                             aria-describedby="pwdnote"
//                             onFocus={() => setPwdFocus(true)}
//                             onBlur={() => setPwdFocus(false)}/>
//                     <TextField fullWidth label='Confirm Password' placeholder="Confirm your password"
//                     className={validMatch && matchPwd ? "valid" : "hide"}
//                     onChange={(e) => setMatchPwd(e.target.value)}
//                     value={matchPwd}
//                     required
//                     aria-invalid={validMatch ? "false" : "true"}
//                     aria-describedby="confirmnote"
//                     onFocus={() => setMatchFocus(true)}
//                     onBlur={() => setMatchFocus(false)}/>
//                     <FormControlLabel
//                         control={<Checkbox name="checkedA" />}
//                         label="I accept the terms and conditions."
//                     />
//                     <Button type='submit' variant='contained' color='primary'>Sign up</Button>
                
//             </Paper>
//         </Grid>
//         </form>
//         </section>
//             )}
//         </>
//     )
    
// }

// export default Signup;






import React from 'react'
import axios from "axios";
import { useEffect, useRef, useState ,useContext} from 'react';
import { Grid, Paper, Typography, TextField, Button } from '@material-ui/core'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';

import {useNavigate } from 'react-router-dom';
import { ClassNames } from "@emotion/react";
import PhoneInput from'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
// const USER_REGEX=/^[a-z][a-z0-9.]\@[a-z]\.[a-z]/;
// const PWD_REGEX=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const Signup = () => {
    const paperStyle = { padding: '30px',height:'110vh', width: 370, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const marginTop = { marginTop: 5 }
     const userRef=useRef();
     const errRef=useRef();
     const navigate=useNavigate();
     const[user,setUser]=useState('');
     const[email,setEmail]=useState('');
     const[mobile,setMobile]=useState('');
     const[pwd, setPwd]=useState('');
    // const[cpwd,setCpwd]=useState('');
     const[radio,setRadio]=useState(0);
     
    // const[validName,setValidName]=useState(false);
    // const[userFocus,setUserFocus]=useState(false);
    
    // const[validPwd,setValidPwd]=useState(false);
    // const[pwdFocus,setPwdFocus]=useState(false);
    // const [matchPwd,setMatchPwd]=useState('');
    // const [validMatch,setValidMatch]=useState('false');
    // const [matchFocus,setMatchFocus]=useState('false');
    const [errMsg, setErrMsg]=useState('');
      const [success,setSuccess]=useState(false);
     useEffect(()=>{
        userRef.current.focus();
      },[])
      useEffect(()=>{
        setErrMsg('');
     },[user,email,mobile,pwd])
     function handleClick(e)
     {
        console.log(radio);
     }
     function handleChange(e){
        const{nodeName,value}=e.target;
        if(nodeName==='INPUT')
        {
            setRadio(value);
        }
     }
    //  useEffect(()=>{
    //     const result=USER_REGEX.test(user);
    //     console.log(result);
    //     console.log(user);
    //     setValidName(result);
    //  },[user])

    //  useEffect(()=>{
    //     const result=USER_REGEX.test(pwd);
    //     console.log(result);
    //     console.log(pwd);
    //     setValidPwd(result);
    //     const match=pwd===matchPwd;
    //     setValidMatch(match);
    //  },[pwd,matchPwd])
    //  useEffect(()=>{
    //     setErrMsg('');
    //  },[user,pwd,matchPwd])
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const baseURL = "http://localhost:8080/api/create";
        try{
            const response =await axios.post(baseURL,JSON.stringify({ name:user,email:email,gender:radio,mobile_no:mobile,password:pwd}),
               { credentials: 'include',
                 'Access-Control-Allow-Origin' : '*',
                 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                 headers: {'Content-Type': 'application/json', },
                 }
                 );
                 console.log(response.status);
                 console.log(response.data);
                 if(response.data==="user created successfully")
                {
                    
                  alert("Registration Successfull");
                  navigate("/login");
                }
                else if(response.data==="Found duplicate entry")
                {
                    alert("A user already registered with the provided found");
                }
                else{
                    setUser('');
                 setEmail('');
                 setRadio('');
                 setMobile('');
                 setPwd('');
                   alert("Cannot register!!check your details!!");
                   handleClose();
                }
            }
            catch(err)
            {console.log(err);
                console.log("Cannot create user");
                console.log(user,email,radio,mobile,pwd);
            }
        }
 const handleClose=()=>
 {
    navigate("/login");
 }



    return (
        <Grid>
             <form className={ClassNames.root} onSubmit={handleSubmit}>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>

               
                <TextField label="Name"
                    placeholder='Enter your Name..'
                    variant="filled"
                     required 
                     id="username" 
                      ref={userRef} 
                    autoComplete="off"
                    onChange={(e)=> setUser(e.target.value)} 
                   value={user} />
                   <br/>
                   <br/>
                    <TextField
                 placeholder="Enter your email"
                 label="Email"
                 variant="filled"
                 type="email"
                    required 
                    id="email" 
                    ref={userRef} 
                  autoComplete="off"
                  onChange={(e)=> setEmail(e.target.value)} 
                 value={email} />
                 <br/>
                   
                   
                {/* <label htmlFor="name">Name:</label> */}
            {/* <input type="text" 
            placeholder='Enter your Name..'
            id="username" 
            autoComplete="off"/>
            <br/>
            <br/>
            {/* <label htmlFor="email">Email:</label> */}
           
                    <FormControl component="fieldset" style={marginTop}>
                    <label htmlFor="name">Gender:</label>

                        <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" onChange={handleChange} />
                            <FormControlLabel value="male" control={<Radio />} label="Male" onChange={handleChange} />
                            <FormControlLabel value="others" control={<Radio />} label="others" onChange={handleChange} />
                        </RadioGroup>
                    </FormControl>

                    <br/>
                   <br/>
                    <TextField label="MobileNumber"
                    
                    variant="filled"
                   placeholder="Enter your phone number" required
                     id="mobile" 
                     ref={userRef} 
                   autoComplete="off"
                   onChange={(e)=> setMobile(e.target.value)} 
                  value={mobile} />
                   <br/>
                   {/* <PhoneInput defaultCountry="IN"  onChange={(e)=> setMobile(e.target.value)} 
                  value={mobile}/> */}
                <br/>
            <TextField label="Password" type="password" required placeholder="Enter your password"
            id="password" 
            variant="filled"
            onChange={(e)=> setPwd(e.target.value)} 
            value={pwd} />
             <br/>
               
            <br/>
           

                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />

                    <div>
                    <Button variant="contained" onClick={handleClose} >Cancel
                  </Button>
                 
                <Button type="submit" variant="contained" color="primary">Signup</Button>
                </div>

                   
                

            </Paper>
            </form>
        </Grid>
    )
}

export default Signup;