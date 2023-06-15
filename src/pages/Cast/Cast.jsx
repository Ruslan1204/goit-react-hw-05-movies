// import { useParams } from 'react-router-dom';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getMoviesByActors } from '../../services/MoviesApi';
import { useEffect, useState } from 'react';
import CastActors from 'components/CastActors/CastActors';

const useFetchActors = () => {
  const location = useLocation();
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

  return { actors, movieId, location };
};

const Cast = () => {
  const { actors, movieId, location } = useFetchActors();

  
  return (
    <ul>
      <CastActors actors={actors} />

      {/* <Link to={`/movies/${movieId}`} state={{ from: location }}></Link> */}
    </ul>
  );
};

export default Cast;
