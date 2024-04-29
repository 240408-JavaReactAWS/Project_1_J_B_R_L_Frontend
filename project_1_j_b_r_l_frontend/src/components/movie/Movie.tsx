import React from "react";
import { IMovie } from "../../models/IMovie";
//import "./Movie.css";

interface IMovieProps {
    movie: IMovie;
}

function Movie(props: IMovieProps) {
    return (
        <div className="movie">
            <h2>{props.movie.name}</h2>
            <p>Price: {props.movie.price}</p>
        </div>
    )
}

export default Movie;