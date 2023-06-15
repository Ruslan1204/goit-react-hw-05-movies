import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesByReviews } from 'services/MoviesApi';

import ReviewsPage from '../../components/ReviewsPage/ReviewsPage';
import css from './Reviews.module.css';

const useFetchReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const reviews = await getMoviesByReviews(movieId);
        setReviews(reviews.results);
      } catch (error) {
        console.log(error);
      }
    }

    fetchReviews();
  }, [setReviews, movieId]);

  return { reviews, movieId };
};

const Reviews = () => {
  const { reviews } = useFetchReviews();

  return (
    <ul className={css.reviews}>
      <ReviewsPage reviews={reviews} />
    </ul>
  );
};

export default Reviews;

// We don't have any reviews for this movie.
// {/* <p>We don't have any reviews for this movie.</p> */}
