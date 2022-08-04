import ReactDOM from "react-dom/client";
import React from 'react';
//import './App.css';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Landing from './pages/landing/landing';
import Login from './pages/login/login';
import Signup from "./pages/signup/signup";
import AboutUs from "./pages/aboutus/aboutus";
import ContactUs from "./pages/contactus/contactus";
import Buddie from "./pages/findbuddies/table";
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/landing" element={<Landing/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/aboutus" element={<AboutUs/>}></Route>
        <Route path="/contactus" element={<ContactUs/>}></Route>
        <Route path="/buddies" element={<Buddie/>}></Route>
      </Routes>
      </BrowserRouter> 
     </>
  );
}

export default App;