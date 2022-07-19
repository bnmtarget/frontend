import ReactDOM from "react-dom/client";
import React from 'react';
//import './App.css';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Landing from './pages/landing/landing';
import Login from './pages/login/login';
import Signup from "./pages/signup/signup";
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
      </Routes>
      </BrowserRouter> 
     </>
  );
}

export default App;
