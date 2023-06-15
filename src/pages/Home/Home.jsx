import { useEffect, useState } from 'react';
import {  useLocation } from 'react-router-dom';
import { getMovies } from '../../services/MoviesApi';
import HomeList from '../../components/HomeList/HomeList'


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

const Home = () => {
  const { movies, location } = useFetchMovies();
  return (
    <main>
      <ol>
        <HomeList movies={movies} location={location}/>
      </ol>
    </main>
  );
};

export default Home;
