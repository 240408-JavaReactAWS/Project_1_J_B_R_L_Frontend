import { IMovie } from "../../models/IMovie";
//import "./MovieContainer.css";
import Movie from "../movie/Movie";

function MovieContainer(props: { movies: IMovie[] }) {

    return (
        <div className="movie-container">
            {props.movies.map((movieMap) => (
                <Movie key={movieMap.movieId} movie={movieMap}></Movie>
            ))}
        </div>
    );
}

export default MovieContainer;