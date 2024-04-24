import React, { useEffect } from "react";
import { IMovie } from "../models/IMovie";
import "./MovieContainer.css";
import Movie from "../movie/Movie";
import axios from "axios";
import { useState } from "react";

function MovieContainer(props: { movies: IMovie[] }) {

    // I added this for getting a users movies. This should probably be made
    // more generic so that it can be reused for other movie lists

    const [movies, setMovies] = useState<IMovie[]>([]);

    useEffect(() => {
        getMovies();
    }, []);

    let getMovies = async () => {
        let response = await axios.get("http://localhost:8080/users/movies", {
            headers: {
                "Content-Type": "application/json",
                "username": "tempUser"
            }
        });
        setMovies(response.data);
    }

    return (
        <div className="movie-container">
            <h1>Your Movies</h1>
            {props.movies.map((movieMap) => (
                <Movie movie={movieMap}></Movie>
            ))}
        </div>
    );
}