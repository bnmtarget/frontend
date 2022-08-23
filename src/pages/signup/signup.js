import React from 'react'
import { useEffect, useRef, useState ,useContext} from 'react';
import { Grid, Paper, Typography, TextField, Button } from '@material-ui/core'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './signup.css'
const Signup = () => {
    const paperStyle = { padding: '30px',height:'90vh', width: 370, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const marginTop = { marginTop: 2 }
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                {/* <label htmlFor="name">Name:</label> */}
            <input type="text" 
            placeholder='Enter your Name..'
            id="username" 
            autoComplete="off"/>
            <br/>
            <br/>
            {/* <label htmlFor="email">Email:</label> */}
            <input type="text"
            placeholder='Enter your Email..' 
            id="email" 
            autoComplete="off"/>
            <br/>
                    <FormControl component="fieldset" style={marginTop}>
                    <label htmlFor="name">Gender:</label>
                        <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                    {/* <label htmlFor="phnno">Phone Number:</label> */}
            <br/>
            <input type="text" 
            placeholder='Enter your Phone Number..' 

            id="phnno" 
            autoComplete="off"/>
            {/* <label htmlFor="pwd">Password:</label> */}
            <br/>
            <br/>
            <input type="text" 
            placeholder='Enter your Password..'
            id="pwd" 
            autoComplete="off"/>
            
            {/* <label htmlFor="copwd">Confirm your Password:</label> */}
            <br/>
            <br/>
            <input type="text" 
            placeholder='Confirm your Password..'
            id="copwd" 
            autoComplete="off"/>
            <br/>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Button type='submit' variant='contained' color='primary' fullWidth>Sign up</Button>
                
            </Paper>
        </Grid>
    )
}

export default Signup;