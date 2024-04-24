import React, { SyntheticEvent, useState } from "react";
import { IMovie } from "../models/IMovie";
import MovieContainer from "../movie-container/MovieContainer";
import axios from "axios";

function AdminUserMovies() {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [userId, setUserId] = useState<number>(0);
    
    let updateUserId = (e: SyntheticEvent) => {
        setUserId(parseInt((e.target as HTMLInputElement).value))
    }
    let getMovies = async () => {
        let response = await axios.get(`http://localhost:8080/users/movies/${userId}`, {
            headers: {
                "Content-Type": "application/json",
                "username": localStorage.username
            }
        });
        setMovies(response.data);
    }

    return (
        <div>
            <h1>Get a Users Purchased Movies</h1>
            <form>
                <label>UserId</label>
                <input onChange={updateUserId} type="text" name="userid" />
                <button onClick={getMovies}>Get Movies</button>
            </form>
            <MovieContainer movies={movies}></MovieContainer>
        </div>
    );
}