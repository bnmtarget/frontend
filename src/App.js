import React from 'react';
import './App.css';
import Landing from './container/Landing';
import Login from './container/login';
import Signup from './container/signup';
function App() {
  return (
    <div className="App">
      <Landing/>
      <Login /> 
      <Signup/>
    </div>
  );
}

export default App;
