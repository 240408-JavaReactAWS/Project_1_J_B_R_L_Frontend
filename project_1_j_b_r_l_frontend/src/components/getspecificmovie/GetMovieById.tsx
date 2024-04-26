import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import { Movie } from '../../models/movie'
import LinkButton from '../linkbutton/LinkButton'
import BuyButton from '../buybutton/BuyButton'

function GetMovieById() {
    const {id} = useParams()
    const [movie, setMovie] = React.useState<Movie>({
        movieId: 0,
        name: '',
        price: 0,
        url: '',
        description: ''
    })
    const getMovie = () => {
        axios.get<Movie>('http://localhost:8080/movies/'+id)
        .then(response => {
           setMovie(response.data)
        })
        .catch((error) => {console.log(error)})
    }
    React.useEffect(getMovie, [])
  return (
    <div>
        
        <div key={movie.movieId}>
            <h1>{movie.name}</h1>
            <h2>{movie.price}</h2> {/* This probably doesn't need to be displayed if you own it*/}
            <span>{movie.url}</span> {/* Maybe skip this for the button? */}
            <p>{movie.description}</p>
            <LinkButton link="https://google.com"/> {/* This is a placeholder for the actual link*/}
            <BuyButton movieId={movie.movieId}/> {/* Only one of these two buttons should be displayed based on whether or not you own the movie */}
            {/* We need to find some way to pass along if the movie is owned or not */}
        </div>
    </div>
  )
}

export default GetMovieById
