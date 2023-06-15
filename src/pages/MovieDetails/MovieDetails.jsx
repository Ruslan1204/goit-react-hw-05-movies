import {
  Link,
  // NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { getMoviesById } from '../../services/MoviesApi';
import { useEffect, useState } from 'react';
import MovieCards from 'components/MovieCards/MovieCards';
import css from 'components/MovieCards/MovieCards.module.css';

const useFetchMovie = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovies] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const movie = await getMoviesById(movieId);
        setMovies(movie);
        // console.log(movie.backdrop_path);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovie();
  }, [movieId, setMovies]);

  // const fetchMovies = ()=>{
  //   // console.log(movieId)
  //   getMoviesById(movieId)
  // }

  return { movie, movieId, location };
};

const MovieDetails = () => {
  const { movie, movieId, location } = useFetchMovie();
  return (
    <main>
      <Link to={location?.state?.from ?? '/movies'}>Go Back</Link>
      <MovieCards movie={movie} />

      <div className={css.genresLink}>
        <p>Additional infirmation</p>
        <li>
          <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
        </li>
      </div>

      <Outlet />
    </main>
  );
};

export default MovieDetails;
