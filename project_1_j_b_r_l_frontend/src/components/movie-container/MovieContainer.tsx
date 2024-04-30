import { IMovie } from "../../models/IMovie";
//import "./MovieContainer.css";
import Movie from "../movie/Movie";

function MovieContainer(props: { movies: IMovie[] }) {

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {props.movies.map((movieMap) => (
                <Movie key={movieMap.movieId} movie={movieMap}></Movie>
            ))}
        </div>
    );
}

export default MovieContainer;