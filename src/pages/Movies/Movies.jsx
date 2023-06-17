import { useEffect, useState } from 'react';
import { getMoviesSearch } from '../../services/MoviesApi';
import { useLocation, useSearchParams } from 'react-router-dom';
import MoviesForm from 'components/MoviesForm/MoviesForm';

const useFetchSearchMovies = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const nameSearch = searchParams.get('nameSearch');

  useEffect(() => {
    if (nameSearch === '' || nameSearch === null) {
      return;
    } else {
      async function fetchSearchMovies() {
        try {
          const data = await getMoviesSearch(nameSearch);
          setMovies(data);
        } catch (error) {
          console.log(error);
        }
      }
      fetchSearchMovies();
    }
  }, [nameSearch]);

  const handleChangeSearc = evt => {
    const { value } = evt.target;

    setSearch(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    setSearchParams({ nameSearch: form.elements.nameSearch.value });

    form.reset();

  };

  return {
    nameSearch,
    search,
    movies,
    location,
    handleChangeSearc,
    handleSubmit,
  };
};

const Movies = () => {
  const { movies, location, handleChangeSearc, handleSubmit } =
    useFetchSearchMovies();

  return (
      <MoviesForm
        movies={movies}
        location={location}
        onSubmit={handleSubmit}
        onChange={handleChangeSearc}
      />
  );
};

export default Movies;
