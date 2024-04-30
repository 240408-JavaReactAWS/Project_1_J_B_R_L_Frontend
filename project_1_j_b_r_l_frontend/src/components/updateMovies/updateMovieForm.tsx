import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import './updateMovieForm.css';

function UpdateMovieForm() {
    const [movieId, setMovieId] = useState(0);
    const [movieTitle, setMovieTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [url, setURL] = useState('');
    const [snapshot, setSnapshot] = useState('');


    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/movies/${id}`);
                const { movieId, name, price, description, url } = response.data;
                setMovieTitle(name);
                setPrice(price);
                setDescription(description);
                setURL(url);
            
            } catch (error) {
                console.error('Failed to fetch movie', error);
            }
        };

        fetchMovie();
    }, [id]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
    

        try {
            await axios.put(`http://localhost:8080/movies/${id}`, {
                name: movieTitle,
                price: price,
                description: description,
                url: url,
                snapshoturl: snapshot
            }, { withCredentials: true});

            alert(`${movieTitle} has been updated successfully!`);
            navigate('/');
        } catch (error: any) {
            alert(`Error updating movie: ${error.message}`);
        }
    };

    

    return (
        <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
            <h2 className="rounded-2">Update Movie</h2>
            <div className="col-md-6">
                <label htmlFor="movieTitle" className="form-label">Movie Title</label>
                <input type="text" className="form-control" id="movieTitle" value={movieTitle} onChange={e => setMovieTitle(e.target.value)} required/>
            </div>
            <div className="col-md-6">
                <label htmlFor="price" className="form-label">Price</label>
                <input type="number" className="form-control" id="price" value={price} onChange={e => setPrice(e.target.value)} step="0.01" required/>
            </div>
            <div className="col-md-12">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea className="form-control" id="description" value={description} onChange={e => setDescription(e.target.value)} rows={parseInt("4")}></textarea>
            </div>
            <div className="col-md-6">
                <label htmlFor="url" className="form-label">Source URL</label>
                <input type="text" className="form-control" id="url" value={url} onChange={e => setURL(e.target.value)} required/>
            </div>
            <div className="col-md-6">
                <label htmlFor="snapshot" className="form-label">Snapshot URL</label>
                <input type="text" className="form-control" id="snapshot" value={snapshot} onChange={e => setSnapshot(e.target.value)} required/>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Update</button>
                <button type="button" className="btn btn-danger" onClick={() => navigate('/')}>Cancel</button>
            </div>
        </form>
    );
}

export default UpdateMovieForm;
