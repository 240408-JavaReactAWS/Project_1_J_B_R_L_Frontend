import React, { useEffect, useState } from 'react'
import { Movie } from '../../models/movie'
import axios from 'axios'
import { Link } from 'react-router-dom'

function GetAllMovies() {
    const [movies, setMovies] = useState<Movie[]>([])
    const getMovies = () => {
        axios.get<Movie[]>('http://localhost:8080/movies')
        .then(response => {
            setMovies(response.data)
        })
    }
    useEffect(getMovies, [])
  return (
    <div>
        {movies.map((movie) => {
            return(
                <div key={movie.movieId}>
                    <Link to={'/movies/'+movie.movieId}>{movie.name}</Link>
                    <h2>${movie.price % 1 === 0 ? movie.price.toFixed(2) : movie.price}</h2>
                    <span>{movie.url}</span>
                    <p>{movie.description}</p>
                </div>
            )
        })}
      
    </div>
  )
}

export default GetAllMovies
