// import { useParams } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getMoviesByActors } from '../../services/MoviesApi';
import { useEffect, useState } from 'react';
import CastActors from 'components/CastActors/CastActors';

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
    <ul>
      <CastActors actors={actors} />
    </ul>
  );
};

export default Cast;

