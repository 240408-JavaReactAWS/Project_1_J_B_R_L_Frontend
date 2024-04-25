import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './components/register/Register';
import Nav from './components/nav/Nav';
import GetAllMovies from './components/getallmovies/GetAllMovies';
import GetMovieById from './components/getspecificmovie/GetMovieById';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/register' element={<Register/>}/>
          <Route path='/movies' element={<GetAllMovies/>}/>
          <Route path='/movies/:id' element={<GetMovieById/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
