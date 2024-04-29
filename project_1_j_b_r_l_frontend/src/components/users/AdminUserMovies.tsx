import React, { SyntheticEvent, useState, useEffect } from "react";
import { IMovie } from "../../models/IMovie";
import MovieContainer from "../movie-container/MovieContainer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminUserMovies() {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [userId, setUserId] = useState<number>(0);
    const [submitted, setSubmitted] = useState<boolean>(false);
    const navigate = useNavigate();
    
    let updateUserId = (e: SyntheticEvent) => {
        setUserId(parseInt((e.target as HTMLInputElement).value))
    }
    let getMovies = async (e: React.FormEvent) => {
        e.preventDefault();

        let response = await axios.get(`http://localhost:8080/users/admin/${userId}`, 
        {withCredentials: true}
        ).then((response) => {
            setMovies(response.data);
            setSubmitted(true);
        }).catch((error) => {
            console.error(error);
        });
    }

    let navigateTo = useNavigate();

    useEffect(() => {
        let checkForAdminUser = async () => {
            try {
                let res = await axios.get('http://localhost:8080/users/admin', {
                    withCredentials: true
                });
            } catch (error : any) {
                let status = error.response.status;
                if (status === 401) {
                    console.log("Session is invalid");
                    navigateTo('/users/login');
                } else if (status === 403){
                    console.log("Unauthorized access");
                    navigateTo('/movies');
                }
            }
        }
    
        checkForAdminUser();
    }, []);

    return (
        <div>
            <h1>Get a Users Purchased Movies</h1>
            <form>
                <label>UserId</label>
                <input onChange={updateUserId} type="text" name="userid" />
                <button type="submit" onClick={getMovies}>Get Movies</button>
            </form>
            {submitted && <MovieContainer movies={movies}></MovieContainer>}
        </div>
    )
}
export default AdminUserMovies;