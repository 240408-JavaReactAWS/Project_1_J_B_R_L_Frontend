import React, { useEffect } from "react";
import { IMovie } from "../../models/IMovie";
//import "./MovieContainer.css";
import Movie from "../movie/Movie";
import axios from "axios";
import { useState } from "react";

function MovieContainer(props: { movies: IMovie[] }) {

    return (
        <div className="movie-container">
            <h1>Movies</h1>
            {props.movies.map((movieMap) => (
                <Movie movie={movieMap}></Movie>
            ))}
        </div>
    );
}

export default MovieContainer;