// //import "./App.css";
// import axios from "axios";
// import {  useEffect,useState } from "react";
// import React from 'react';
// import { withStyles, makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import pic from '../../assets/logo1.png'
// import {  Link } from 'react-router-dom'
// import {Button} from '@mui/material';
// import './buddiespage.css'
// import  { GoogleLogout } from "react-google-login";
// import {   useNavigate } from 'react-router-dom';
// import './buddiespage.css'
// const StyledTableCell = withStyles((theme) => ({
//     head: {
//       backgroundColor: theme.palette.common.black,
//       color: theme.palette.common.white,
//     },
//     body: {
//       fontSize: 14,
//     },
//   }))(TableCell);
  
//   const StyledTableRow = withStyles((theme) => ({
//     root: {
//       '&:nth-of-type(odd)': {
//         backgroundColor: theme.palette.action.hover,
//       },
//     },
//   }))(TableRow);
//   const useStyles = makeStyles({
//     table: {
//       minWidth: 700,
//     },
//   });

// const Buddie=()=>{

//     const classes = useStyles();
//    const [rows,setRows]=useState([]);
//    const [search,setSearch]=useState('');
//    const navigate=useNavigate();
//    const btnstyle={margin:'8px 0'}
//     const getUserData=async()=>{
//         try{
//             const data=await axios.get("http://localhost:8080/api/userprofile");
//             console.log(data.data);
//            // setUsers(data.data);
//             setRows(data.data);
//         }
//         catch(e)
//         {
//             console.log(e);
//             alert(e);
//         }
        
//     }
//      useEffect(()=>{
//          getUserData()
//      },[]);
    
//       // const responseGoogle=(response)=>
//       // {
//       //   // navigate("/login");
//       //   alert('Logout made successfully');
        
//       // };
    
     
//     // const requestSearch=(searchVal)=>{
//     //   const filteredRows=user.filter((row)=>{
//     //     return row.prefferedlocations.toLowerCase().includes(searchVal.toLowerCase())
//     //   })
//     //   setRows(filteredRows)
//     // }
//     // const cancelSearch=()=>{
//     //   setSearch("")
//     //   requestSearch(search)
//     // }
//     const handleSubmit=()=>{
//        navigate("/login");
//        alert('Logout made successfully');
//     }
//     return (
//         <div className="Buddiepage">
          
//           <nav>
//             <img className='logo' src={pic} alt='' width={350} height={100} />
             
//             <ul>
//                 <li><Link to="/Landing">Home</Link></li>
//                 <li><Link to='/AboutUs'>About</Link></li>
//                 <li><Link to='/ContactUs'>Contact</Link></li>
//                 <li><Link to='/profile'>Profile</Link></li>
//                 <li><Button type='submit' name="submit1" color='primary'variant="contained"  style={btnstyle} onClick={handleSubmit} >Logout</Button></li>
//                 {/* <li>
//                 <GoogleLogout
//           clientId="802607890652-38mv2gu2nqa2ggg9aiambpqdnfd2uoei.apps.googleusercontent.com"
//           buttonText="Logout"
//           onLogoutSuccess={responseGoogle}
//           ></GoogleLogout></li> */}
//             </ul>
//         </nav>
//         <h1> Welcome to shop pal</h1> 
//          <h3>Find the buddies here!!</h3>
//          <input
//         type="search"
        
//         onChange={(e)=>{
//           setSearch(e.target.value);
//         }}
//         className="input"
//         placeholder="Filter"
//       />
//           {/* <div className="user-list">
//         {foundUsers && foundUsers.length > 0 ? (
//           foundUsers.map((user) => (
//             <li key={user.id} className="user">
//               <span className="user-id">{user.id}</span>
//               <span className="user-name">{user.name}</span>
//               <span className="user-age">{user.age} year old</span>
//             </li>
//           ))
//         ) : (
//           <h1>No results found!</h1>
//         )}
//       </div> */}
           
//         <TableContainer component={Paper}>
//       <Table className={classes.table} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>UserName</StyledTableCell>
//             <StyledTableCell align="center">EmailId</StyledTableCell>
//             <StyledTableCell align="center">MobileNumber</StyledTableCell>
//             <StyledTableCell align="center">Gender</StyledTableCell>
//             <StyledTableCell align="center">Address</StyledTableCell>
//             <StyledTableCell align="center">Preferred Locations</StyledTableCell>
//             <StyledTableCell align="center">Preferred Stores</StyledTableCell>
//             <StyledTableCell align="center">Preferred Days</StyledTableCell>
//             <StyledTableCell align="center">Preferred Timings</StyledTableCell>
//           </TableRow>

//         </TableHead>
//         <TableBody>
//         {rows.filter((item)=>{
//         if(search==""){
//             return item
//         }
//         else if(item.prefferedlocations?.toLowerCase().includes(search?.toLowerCase())){
//             return item
//         }
//        }).
//        map((item)=>{
//         return(
//             <StyledTableRow key={item.userId}>
//               <StyledTableCell component="th" scope="row">
//                 {item.name}
//               </StyledTableCell>
//               <StyledTableCell align="right">{item.emailId}</StyledTableCell>
//               <StyledTableCell align="right">{item.mobile_no}</StyledTableCell>
//               <StyledTableCell align="right">{item.gender}</StyledTableCell>
//               <StyledTableCell align="right">{item.address}</StyledTableCell>
//               <StyledTableCell align="right">{item.prefferedlocations}</StyledTableCell>
//               <StyledTableCell align="right">{item.prefferedStores}</StyledTableCell>
//               <StyledTableCell align="right">{item.preffereddays}</StyledTableCell>
//               <StyledTableCell align="right">{item.prefferedtimings}</StyledTableCell>
//             </StyledTableRow>
//         );
//         })
//            }  
         
//         </TableBody>
//       </Table>
//     </TableContainer>
//         </div>
//     );
// };

// export default Buddie;

import axios from "axios";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {fasearch} from '@fortawesome/free-solid-svg-icons'
import {  useEffect,useState } from "react";
import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import pic from '../../assets/logo1.png'
import {  Link } from 'react-router-dom'
import {   useNavigate } from 'react-router-dom';
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
   const btnstyle={margin:'8px 0'}
  //  const [profileuser,setProfileuser]=useState('');
  //  setProfileuser={dataLoginToBuddie}
   const navigate=useNavigate();
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

    //  const handleSubmit=async(e)=>{} 
    const handleSubmit=()=>{
            navigate("/login");
            // alert('Logout made successfully');
          }
        //   const handleClick=async()=>{
        //     try{
        //       const profiledata=await axios.get("http://localhost:8080/api/profile"+{dataLoginToBuddie});
        //       console.log(profiledata.data);
        //     }
        //     catch(e)
        // {
        //     console.log(e);
        //     alert(e);
        // }
        //   }
        const handleProfile=()=>{
          navigate("/profile");
        }
    return (
        <div className="header">
          <nav>
            <img className='logo' src={pic} alt='' width={350} height={100} />
            <ul>
                <li><Link to="/Landing">Home</Link></li>
                <li><Link to='/AboutUs'>About</Link></li>
                <li><Link to='/ContactUs'>Contact</Link></li>
                {/* <li><Link to='/profile'>Profile</Link></li> */}
               <li> <Button type='submit' name="submit2" color='primary'variant="contained"  style={btnstyle} onClick={handleProfile} >Profile</Button></li>
                <li><Button type='submit' name="submit1" color='primary'variant="contained"  style={btnstyle} onClick={handleSubmit} >Logout</Button></li>
            </ul>
        </nav>
        <div className="search">
        <div className="form-outline">
  <input type="search"  class="form-control" aria-label="Search" onfocus="this.placeholder=''" 
           onblur="this.placeholder='Search By Location'"
        
        onChange={(e)=>{
          setSearch(e.target.value);
        }}
        className="input"
        placeholder="Search By Location..."
      />
      </div>
      </div>

      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            {/* <StyledTableCell>UserId </StyledTableCell> */}
            <StyledTableCell align="center">Email Id</StyledTableCell>
            <StyledTableCell align="center">Mobile Number</StyledTableCell>
            <StyledTableCell align="center">Gender</StyledTableCell>
            <StyledTableCell align="center">Address</StyledTableCell>
            <StyledTableCell align="center">Preferred Locations</StyledTableCell>
            <StyledTableCell align="center">Preferred Stores</StyledTableCell>
            <StyledTableCell align="center">Preferred Days</StyledTableCell>
            <StyledTableCell align="center">Preferred Timings</StyledTableCell>
            {/* <StyledTableCell align="center">Send an invitation</StyledTableCell> */}
          </TableRow>

        </TableHead>
        <TableBody>
        {rows.filter((item)=>{
        if(search==""){
            return item
        }
        else if(item.prefferedlocations?.toLowerCase().includes(search.toLowerCase())){
            return item
        }
       }).
       map((item)=>{
        return(
            <StyledTableRow key={item.userId}>
              {/* <StyledTableCell component="th" scope="row">
                {item.userId}
              </StyledTableCell> */}
              <StyledTableCell align="center">{item.email}</StyledTableCell>
              <StyledTableCell align="center">{item.mobile_no}</StyledTableCell>
              <StyledTableCell align="center">{item.gender}</StyledTableCell>
              <StyledTableCell align="center">{item.address}</StyledTableCell>
              <StyledTableCell align="center">{item.prefferedlocations}</StyledTableCell>
              <StyledTableCell align="center">{item.prefferedstores}</StyledTableCell>
              <StyledTableCell align="center">{item.preffereddays}</StyledTableCell>
              <StyledTableCell align="center">{item.prefferedtimings}</StyledTableCell>
              {/* <StyledTableCell align="center"><Button type='submit' name="submit1" color='primary' variant="contained"  onClick={handleSubmit} >
              Send Invite?
                </Button></StyledTableCell> */}
            </StyledTableRow>
        );
        })
           }  
         
        </TableBody>
      </Table>
    </TableContainer>

    </Paper>
        </div>
    );
};
export default Buddie;