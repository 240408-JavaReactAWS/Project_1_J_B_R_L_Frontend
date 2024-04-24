import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './components/register/Register';
import Nav from './components/nav/Nav';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
