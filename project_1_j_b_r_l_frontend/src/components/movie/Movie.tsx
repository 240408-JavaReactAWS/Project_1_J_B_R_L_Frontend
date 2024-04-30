import React from "react";
import { IMovie } from "../../models/IMovie";
import { Link } from "react-router-dom";
//import "./Movie.css";

interface IMovieProps {
    movie: IMovie;
}

function Movie(props: IMovieProps) {
    return (
        <div className="movie">
            <Link to={'/movies/'+ props.movie.movieId}>{props.movie.name}</Link>
            <h3>Description</h3>
            <p>{props.movie.description}</p>
            <p>Price: ${props.movie.price}</p>
        </div>
    )
}

export default Movie;