// import { useParams } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getMoviesByActors } from '../../services/MoviesApi';
import { useEffect, useState } from 'react';

const useFetchActors = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    async function fetchActors() {
      try {
        const actors = await getMoviesByActors(movieId);
        setActors(actors.cast);
      } catch (error) {
        console.log(error);
      }
    }

    fetchActors();
  }, [movieId, setActors]);

  return { actors, movieId };
};

const Cast = () => {
  const { actors } = useFetchActors();

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {actors.map(actor => {
          return (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
                width={150}
              />
              <p>{actor.name}</p>
              <p> Character: {actor.character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cast;

// to={'/movies/:movieId/cast'}
