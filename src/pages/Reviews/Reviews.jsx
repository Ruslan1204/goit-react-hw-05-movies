import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesByReviews } from 'services/MoviesApi';

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
  }, [setReviews,movieId]);

  return { reviews, movieId };
};

const Reviews = () => {
  const { reviews } = useFetchReviews();

  return (
    <ul>
      {reviews.map(review => {
        return (
          <li key={review.id}>
            <h2>Author: {review.author}</h2>
            <p>{review.content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
