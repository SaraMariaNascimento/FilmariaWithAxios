import React, {useState} from 'react';
import Routes from './Routes.js';
import './style.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div className="app">  
      <Routes/>
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;

