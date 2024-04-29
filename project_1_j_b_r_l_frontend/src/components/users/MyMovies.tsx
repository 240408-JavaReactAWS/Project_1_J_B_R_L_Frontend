import axios from "axios";
import React, { useEffect, useState } from "react";
import { IMovie } from "../../models/IMovie";
import MovieContainer from "../movie-container/MovieContainer";
import { useNavigate } from "react-router-dom";

function MyMovies() {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const navigate = useNavigate();

    let getMovies = async () => {
        let response = await axios.get("http://localhost:8080/users/myMovies", {
            withCredentials: true
        }).then((response) => {
            setMovies(response.data);
        }).catch((error) => {
            console.error(error);
        });}

    let checkLoggedIn = () => {
        if(localStorage.getItem("username") === null) {
            navigate("/users/login");
        }
    }

    useEffect(() => {
        getMovies();
        checkLoggedIn();
    }, []);
    return (
        <div>
            <h1>{localStorage.getItem("username")}'s Movies</h1>
            <MovieContainer movies={movies}></MovieContainer>
        </div>
    )
}
export default MyMovies;