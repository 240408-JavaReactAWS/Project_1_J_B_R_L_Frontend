import axios from 'axios'
import React, { useState } from 'react'
import './GetMovieById.css';
import { useParams } from 'react-router-dom'
import { Movie } from '../../models/movie'

function GetMovieById() {
    const {id} = useParams()
    const [movie, setMovie] = React.useState<Movie>()
    const [isBuySuccessful, setIsBuySuccessful] = useState(false);
    const getMovie = () => {
        axios.get<Movie>('http://localhost:8080/movies/'+id, {withCredentials: true})
        .then(response => {
          setMovie(response.data)
        })
        .catch((error) => {console.log(error)})
    }

    const buyMovie = () => {
      axios.post('http://localhost:8080/movies/buy/'+id, {},
        {withCredentials: true}
      )
      .then(response => {
        console.log(response.data)
        setIsBuySuccessful(true);
        window.alert('Movie purchased successfully!')
      })
      .catch((error) => {console.log(error)})

      setIsBuySuccessful(true);
    }
      React.useEffect(getMovie, [])
      return (
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <div className="card bg-warning bg-gradient" style={{ width: '20rem' }}>
        <div className="card-body .bg-warning.bg-gradient" style={{ fontSize: '1.2rem' }}>
          <h1 className="card-title">{movie?.name}</h1>
          <h2 className="card-text">${(movie?.price ?? 0) % 1 === 0 ? movie?.price?.toFixed(2) : movie?.price}</h2>
          {isBuySuccessful && movie?.url && <iframe width="290" height="345" src={movie?.url}></iframe>}
          <br/>
          <p className="card-text">{movie?.description}</p>
          {!isBuySuccessful && <button  onClick={buyMovie} className='btn btn-success'>Buy</button>}
        </div>
          </div>
        </div>
      )
}

export default GetMovieById


