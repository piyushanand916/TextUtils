//import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Textform from './Textform/Textform';
import React, { useState } from 'react';


function App(props) {

  const [mode, setMode]=useState("light");
  const [modeText, setModeText]=useState("Light");
  
    const darkMode = ()=>{
    if(mode==='light'){
     
    setMode("dark");
    setModeText("Light");
    document.body.style.backgroundColor="#1a283d";
    
    }
    else{
      
      setMode("light");
      setModeText("Dark");
      document.body.style.backgroundColor="white";
    }
    }

  return (
    <>
     <Navbar  mode={mode} modeText={modeText} darkMode={darkMode}/> 
      <Textform heading="My First React Project" mode={mode}/>

    </>
  );
}

export default App;
