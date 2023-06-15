import { Link } from 'react-router-dom';
import css from './HomeList.module.css';

const HomeList = ({ movies, location }) => {

  return (
    <>
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
    </>
  );
};

export default HomeList;
