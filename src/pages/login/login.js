import React from 'react';
import {Grid,Paper,Avatar,TextField,Button,Typography } from '@mui/material';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormcontrolLabel from '@material-ui/core/FormcontrolLabel';
import Checkbox from '@material-ui/core/Checkbox';

import {  Link } from 'react-router-dom';
const Login=()=>{
     const paperStyle={padding :20,height:'70vh',width:280,margin:"20px auto"}
     const avatarStyle={backgroundColor:'#1bbd7e'}
     const btnstyle={margin:'8px 0'}
    return(
        <div>
        <Grid>
            <Paper elevation={10} style={paperStyle}> 
            <Grid align='center'>
            <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
            <h2>Sign in</h2>
            </Grid>
            <TextField label='Username' placeholder='Enter username' fullwidth required/>
            <TextField label='Password' placeholder='Enter password' type='password'fullwidth required/>
            <FormcontrolLabel
            control={
                <Checkbox
                name="checkedB"
                color="primary"
                />
                
            }
            label="Remember me"
            />
            <Button type='submit' color='primary'variant="contained" style={btnstyle}fullwidth>Sign in</Button>
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
        </Grid>
        
        
            
        
        
        </div>
    );
}
export default Login;