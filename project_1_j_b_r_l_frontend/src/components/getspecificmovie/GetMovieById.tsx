import axios from 'axios'
import React from 'react'
import './GetMovieById.css';
import { useParams } from 'react-router-dom'
import { Movie } from '../../models/movie'

function GetMovieById() {
    const {id} = useParams()
    const [movie, setMovie] = React.useState<Movie>()
    const getMovie = () => {
        axios.get<Movie>('http://localhost:8080/movies/'+id)
        .then(response => {
          setMovie(response.data)
        })
        .catch((error) => {console.log(error)})
    }
      React.useEffect(getMovie, [])
    return (
      <div className="container">
      <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
      <h1 className="card-title">{movie?.name}</h1>
      <h2 className="card-text">${(movie?.price ?? 0) % 1 === 0 ? movie?.price?.toFixed(2) : movie?.price}</h2>
      <a href={movie?.url} className='tv-style'>{movie?.url}</a> <br/>
      <br/>
      <p className="card-text">{movie?.description}</p>
      </div>
      </div>
      </div>
    )
}

export default GetMovieById
