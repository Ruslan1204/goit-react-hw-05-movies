import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getMovies } from '../../services/MoviesApi';

const useFetchMovies = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const movies = await getMovies();
        setMovies(movies);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovies();
  }, []);

  return { movies, location };
};

const HomePage = () => {
  const { movies, location } = useFetchMovies();
  console.log('HomePage', location);
  return (
    <main>
      {/* <Link to="/" state={{ from: location }}></Link> */}
      {/* <Link to={location?.state?.from ?? '/'}></Link> */}
      <ol>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>{movie.title}</Link>
          </li>
        ))}
      </ol>
    </main>
  );
};

export default HomePage;
