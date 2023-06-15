const ReviewsPage = ({ reviews }) => {

  return (
    <>
      {reviews.map(review => {
        return (
          <li key={review.id}>
            <h2>Author: {review.author}</h2>
            <p>{review.content}</p>
          </li>
        );
      })}
      {reviews && <p>We don't have any reviews for this movie.</p>} 
    </>
  );
};

export default ReviewsPage;

