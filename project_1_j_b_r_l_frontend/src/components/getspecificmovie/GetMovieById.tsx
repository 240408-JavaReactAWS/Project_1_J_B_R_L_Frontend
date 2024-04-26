import axios from 'axios'
import React from 'react'
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

    const buyMovie = () => {
      axios.post('http://localhost:8080/movies/buy/'+id, {}, {headers: {
                      "user": localStorage.getItem('username')
                    }})
      .then(response => {
        console.log(response.data)
      })
      .catch((error) => {console.log(error)})
    }
    React.useEffect(getMovie, [])
  return (
    <div>
        
        <div key={movie?.movieId}>
            <h1>{movie?.name}</h1>
            <h2>{movie?.price}</h2>
            <span>{movie?.url}</span>
            <p>{movie?.description}</p>
            <button onClick={buyMovie}>Buy</button>
        </div>
    </div>
  )
}

export default GetMovieById
