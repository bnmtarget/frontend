//import "./App.css";
import axios from "axios";
import {  useEffect,useState } from "react";
import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import pic from '../../assets/logo1.png'
import {  Link } from 'react-router-dom'
import './buddiespage.css'


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

const Buddie=()=>{

    const classes = useStyles();
   const [rows,setRows]=useState([]);
   const [search,setSearch]=useState('');
   
    const getUserData=async()=>{
        try{
            const data=await axios.get("http://localhost:8080/api/userprofile");
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
    // const requestSearch=(searchVal)=>{
    //   const filteredRows=user.filter((row)=>{
    //     return row.prefferedlocations.toLowerCase().includes(searchVal.toLowerCase())
    //   })
    //   setRows(filteredRows)
    // }
    // const cancelSearch=()=>{
    //   setSearch("")
    //   requestSearch(search)
    // }
    return (
        <div className="Buddiepage">
          <nav>
            <img className='logo' src={pic} alt='' width={350} height={100} />
            <ul>
                <li><Link to="/Landing">Home</Link></li>
                <li><Link to='/AboutUs'>About</Link></li>
                <li><Link to='/ContactUs'>Contact</Link></li>
                <li><a  href="#">Profile</a></li>
            </ul>
        </nav>
        <h1> Welcome to shop pal</h1> 
         <h3>Find the buddies here!!</h3>
         <input
        type="search"
        
        onChange={(e)=>{
          setSearch(e.target.value);
        }}
        className="input"
        placeholder="Filter"
      />
          {/* <div className="user-list">
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
            <li key={user.id} className="user">
              <span className="user-id">{user.id}</span>
              <span className="user-name">{user.name}</span>
              <span className="user-age">{user.age} year old</span>
            </li>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div> */}
           
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>UserId </StyledTableCell>
            <StyledTableCell align="center">EmailId</StyledTableCell>
            <StyledTableCell align="center">MobileNumber</StyledTableCell>
            <StyledTableCell align="center">Gender</StyledTableCell>
            <StyledTableCell align="center">Address</StyledTableCell>
            <StyledTableCell align="center">Preferred Locations</StyledTableCell>
            <StyledTableCell align="center">Preferred Stores</StyledTableCell>
            <StyledTableCell align="center">Preferred Days</StyledTableCell>
            <StyledTableCell align="center">Preferred Timings</StyledTableCell>
          </TableRow>

        </TableHead>
        <TableBody>
        {rows.filter((item)=>{
        if(search==""){
            return item
        }
        else if(item.prefferedlocation.toLowerCase().includes(search.toLowerCase())){
            return item
        }
       }).
       map((item)=>{
        return(
            <StyledTableRow key={item.userId}>
              <StyledTableCell component="th" scope="row">
                {item.userId}
              </StyledTableCell>
              <StyledTableCell align="right">{item.emailId}</StyledTableCell>
              <StyledTableCell align="right">{item.mobile_no}</StyledTableCell>
              <StyledTableCell align="right">{item.gender}</StyledTableCell>
              <StyledTableCell align="right">{item.address}</StyledTableCell>
              <StyledTableCell align="right">{item.prefferedlocations}</StyledTableCell>
              <StyledTableCell align="right">{item.prefferedStores}</StyledTableCell>
              <StyledTableCell align="right">{item.preffereddays}</StyledTableCell>
              <StyledTableCell align="right">{item.prefferedtimings}</StyledTableCell>
            </StyledTableRow>
        );
        })
           }  
         
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};
export default Buddie;