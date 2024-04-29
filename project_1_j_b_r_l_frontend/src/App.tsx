import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UserMovies from './components/userMovies';
import Nav from './components/nav/Nav';
import Register from './components/register/Register';
import GetAllMovies from './components/getallmovies/GetAllMovies';
import GetMovieById from './components/getspecificmovie/GetMovieById';
import MovieForm from './components/movie-form/MovieForm';
import AdminAddMovie from './components/addMovies/adminAddMovie';
import LoginForm from './components/login/LoginForm';
import UpdateMovieForm from './components/updateMovies/updateMovieForm';


function App() {
  return (
    <>

      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/movies" Component={UserMovies}></Route>
          <Route path="/" Component={AdminAddMovie}></Route>
          <Route path='/register' element={<Register/>}/>
          {/* <Route path='/movies' element={<GetAllMovies/>}/> */}
          <Route path='/' element={<LoginForm/>}/>
          <Route path='/movies/:id' element={<GetMovieById/>}/>
          <Route path='/admin-controls/createmovie' element={<MovieForm/>}/>
          <Route path='/admin-controls/movies/:id' element={<UpdateMovieForm/>}/>
          <Route path='/users/login' element={<LoginForm/>}/> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
