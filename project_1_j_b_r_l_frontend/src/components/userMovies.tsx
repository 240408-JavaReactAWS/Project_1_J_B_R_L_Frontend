import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import DeleteButton from './deletebutton/DeleteButton';

interface Movie {
    movieId: number;
    name: string;
    price: number;
    url: string;
    description: string;
}

const UserMovies: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        try {
            const response = await axios.get('http://localhost:8080/movies', {withCredentials: true});
            setMovies(response.data);
        } catch (error) {
            console.error('Error fetching movies:', error);
            setError('Failed to fetch movies.');
        }
    };

    let navigateTo = useNavigate();

    useEffect(() => {
        let checkForLoggedInUser = async () => {
            try {
                let res = await axios.get('http://localhost:8080/users/session', {
                    withCredentials: true
                });
            } catch (error : any) {
                let status = error.response.status;
                if (status === 401) {
                    console.log("Session is invalid");
                    navigateTo('/users/login');
                } else if (status === 403) {
                    console.log("Unauthorized access");
                    navigateTo('/users/login');
                }
            }
        }

        let checkForAdminUser = async () => {
            try {
                let res = await axios.get('http://localhost:8080/users/admin', {
                    withCredentials: true
                });
                isAdmin = true;
            } catch (error : any) {
                isAdmin = false;
            }
        }
    
        checkForAdminUser();
    
        checkForLoggedInUser();
    }, []);
    let isAdmin = localStorage.getItem("admin") === "true";

    return (
        <div>
            <h1>Movie List</h1>
            {error && <p>{error}</p>}
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie) => (
                        <tr key={movie.movieId}>
                            <td>{movie.movieId}</td>
                            <td><Link to={'/movies/'+movie.movieId}>{movie.name}</Link></td>
                            <td>${movie.price % 1 === 0 ? movie.price.toFixed(2) : movie.price}</td>
                            <td>{movie.description}</td>
                            <td><img src={movie.url} alt="movie poster" width="100" height="150" /></td>
                            <td><DeleteButton id={movie.movieId} isAdmin={isAdmin} setMovies={setMovies}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserMovies;