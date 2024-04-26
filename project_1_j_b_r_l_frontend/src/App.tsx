import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UserMovies from './components/userMovies';
import Nav from './components/nav/Nav';
import Register from './components/register/Register';
import GetAllMovies from './components/getallmovies/GetAllMovies';
import GetMovieById from './components/getspecificmovie/GetMovieById';
import MovieForm from './components/movie-form/MovieForm';
import LoginForm from './components/login/LoginForm';


function App() {
  return (
    <>

      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/movies" Component={UserMovies}></Route>
          <Route path='/register' element={<Register/>}/>
          {/* <Route path='/movies' element={<GetAllMovies/>}/> */}
          <Route path='/' element={<LoginForm/>}/>
          <Route path='/movies/:id' element={<GetMovieById/>}/>
          <Route path='/admin-controls/createmovie' element={<MovieForm/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
