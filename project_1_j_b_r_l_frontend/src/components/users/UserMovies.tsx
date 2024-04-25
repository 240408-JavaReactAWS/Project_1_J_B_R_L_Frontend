import axios from "axios";
import React, { useEffect, useState } from "react";
import { IMovie } from "../../models/IMovie";
import MovieContainer from "../movie-container/MovieContainer";

function UserMovies() {
    const [movies, setMovies] = useState<IMovie[]>([]);

    useEffect(() => {
        getMovies();
    }, []);

    let getMovies = async () => {
        let response = await axios.get("http://localhost:8080/users/movies", {
            headers: {
                "Content-Type": "application/json",
                "username": localStorage.username
            }
        });
        setMovies(response.data);
    }
    return (
        <div>
            <h1>User Movies</h1>
            <MovieContainer movies={movies}></MovieContainer>
        </div>
    )
}