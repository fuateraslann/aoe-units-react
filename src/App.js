import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import MainRouter from './Router/MainRouter';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <MainRouter/>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
