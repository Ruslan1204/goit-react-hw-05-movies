import axios from 'axios';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZWMxMmRlZjg2M2YzZWRkYTI2ZTkyN2Q0MjhlYjhiNyIsInN1YiI6IjY0ODZmNTFlYmYzMWYyNTA1NWExZjUxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EQTJ9S41HeJwnVayvyjYuEP2293NNK8I9CJTdUvSfNI',
  },
};

export const getMovies = async () => {
  const { data } = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    options
  );
  return data.results;
};

export const getMoviesSearch = async search => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`,
    options
  );
  return data.results;
};

export const getMoviesById = async (id) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=bec12def863f3edda26e927d428eb8b7&append_to_response=videos`,
    options
  );
  return data;
};


export const getMoviesByActors = async (id) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=bec12def863f3edda26e927d428eb8b7&append_to_response=videos`,
    options
  );
  return data;
  // console.log(data)
};

// getMoviesByActors()

export const getMoviesByReviews = async (id) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=bec12def863f3edda26e927d428eb8b7&append_to_response=videos`,
    options
  );
  return data;
  // console.log(data)
};

// getMoviesByReviews()




