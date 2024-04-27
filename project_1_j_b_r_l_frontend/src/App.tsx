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
import AdminUserMovies from './components/users/AdminUserMovies';
import MyMovies from './components/users/MyMovies';
import ForgotPasswordForm from './components/reset-password-form/ForgotPasswordForm';
import OTPForm from './components/reset-password-form/OTPForm';


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
          <Route path='/users/login' element={<LoginForm/>}/> 
          <Route path='/users/forgot-password' element={<ForgotPasswordForm/>}/>
          <Route path='/users/reset-password/OTP/:email' element={<OTPForm/>}/>
          <Route path='/users/myMovies' element={<MyMovies/>}/>
          <Route path='/users/admin-user-movies' element={<AdminUserMovies/>}/>
          <Route path='*' element={<h1>404 Not Found</h1>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
