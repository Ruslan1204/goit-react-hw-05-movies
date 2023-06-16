import { Link } from 'react-router-dom';
import css from './MoviesForm.module.css';

import PropTypes from 'prop-types';

const MoviesForm = ({ movies, location, onSubmit, onChange }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={onChange}
          name="nameSearch"
          // value={nameSearch}
          className={css.input}
        />
        <button type="submit" className={css.input}>
          Search
        </button>
      </form>
      <ol>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link
              to={`/movies/${movie.id}`}
              state={{ from: location }}
              className={css.movies}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ol>
    </>
  );
};

export default MoviesForm;

MoviesForm.propTypes = {
  movies: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
