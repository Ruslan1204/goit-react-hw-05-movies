import { useState } from 'react';
import { getMoviesSearch } from '../../services/MoviesApi';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
// import { getMoviesById } from '../../services/MoviesApi';

const useFetchSearchMovies = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams)
  async function fetchSearchMovies(search) {
    try {
      const data = await getMoviesSearch(search);
      setMovies(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleChangeSearc = evt => {
    const { value } = evt.target;

    setSearch(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    setSearchParams({ search: evt.currentTarget.elements.search.value });

    if (search.trim() === '') {
      return;
    }

    fetchSearchMovies(search);

    setSearch('');
  };

  return { search, movies, location, handleChangeSearc, handleSubmit };
};

const Movies = () => {
  const { search, movies, location, handleChangeSearc, handleSubmit } =
    useFetchSearchMovies();
  console.log('Movies', location);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChangeSearc}
          name="search"
          value={search}
        />
        <button type="submit">Search</button>
      </form>
      <ol>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>{movie.title}</Link>
          </li>
        ))}
      </ol>
    </>
  );
};

export default Movies;
