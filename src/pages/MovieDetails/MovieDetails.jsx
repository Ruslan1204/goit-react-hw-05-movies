import {
  Link,
  // NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { getMoviesById } from '../../services/MoviesApi';
import { useEffect, useState } from 'react';

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

  return { movie, movieId, location };
};

const MovieDetails = () => {
  const { movie, movieId,location } = useFetchMovie();
  console.log('MovieDetails',location)
  return (
    <main>
      <Link to={location?.state?.from ?? '/'}>Go Back</Link>
      {/* <Link to="/" state={{ from: location }}>Go Back</Link> */}
      

      {movie && (
        <ul>
          <li>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt={movie.title}
            />
          </li>
          <h2>{movie.title}</h2>
          <li>
            <h3>User Score</h3>
            <p>{movie.vote_average.toFixed(1)}%</p>
          </li>
          <li>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </li>
          <li>
            <h3>Genres</h3>
            {movie.genres.map(genr => {
              return <p key={genr.id}> {genr.name}</p>;
            })}
          </li>
        </ul>
      )}
      <li>
        <Link to={`/movies/${movieId}/cast`}>Cast</Link>
      </li>
      <li>
        <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
      </li>
      {/* <Cast actorsId={movieId}/> */}
      <Outlet />
    </main>
  );
};

export default MovieDetails;
