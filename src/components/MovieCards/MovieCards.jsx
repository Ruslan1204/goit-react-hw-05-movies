import css from './MovieCards.module.css';

import PropTypes from 'prop-types';

const MovieCards = ({ movie }) => {
  return (
    <>
      {movie && (
        <ul className={css.wrapper}>
          <div className={css.backdrop}>
            <li>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                height={500}
              />
            </li>
          </div>
          <div className={css.movie}>
            <h2>{movie.title}</h2>
            <li>
              <h3>User Score</h3>
              {/* <p>{movie.vote_average.toFixed(1)}%</p> */}
              <p>{movie.popularity.toFixed()}%</p>
            </li>
            <li>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
            </li>
            <h3>Genres</h3>
            <div className={css.genres}>
              {movie.genres.map(genre => {
                return (
                  <li className={css.genre} key={genre.id}>
                    <p> {genre.name}</p>
                  </li>
                );
              })}
            </div>
          </div>
        </ul>
      )}
    </>
  );
};

export default MovieCards;

MovieCards.propTypes = {
  movie: PropTypes.shape(PropTypes.array.isRequired),
  movieId: PropTypes.string.isRequired,
};
