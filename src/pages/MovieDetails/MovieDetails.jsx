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
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovie();
  }, [movieId, setMovies]);

  return { movie, movieId, location };
};

const MovieDetails = () => {
  const { movie, movieId, location } = useFetchMovie();

  return (
    <main>
      <Link to={location?.state?.from ?? '/'}>Go Back</Link>
      <MovieCards movie={movie} movieId={movieId} location={location} />
      {/* <div className={css.genresLink}>
        <p>Additional infirmation</p>
        <li>
          <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
        </li>
      </div> */}

      {/* <Outlet /> */}
    </main>
  );
};

export default MovieDetails;
