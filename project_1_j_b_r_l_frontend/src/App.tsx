import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserMovies from './components/userMovies';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/nav/Nav';

function App() {
  return (
    <>
      {/* <UserMovies/> */}
      <BrowserRouter>
      <Nav></Nav>
        <Routes>
          
          <Route path="/movies" Component={UserMovies}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
