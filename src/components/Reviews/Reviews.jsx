import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/API';
import { createImgStr } from 'services/helpers';

export const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    const getReviewsDetails = async () => {
      const reviewsData = await getReviews(movieId);
      setReviews(reviewsData.results);
      console.log(reviewsData.results);
    };
    getReviewsDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h2>Reviews</h2>
      {reviews && (
        <ul>
          {reviews?.map(review => (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              {/* доробити */}
              {/* <p>Author_details : {review.author_details}</p> */}
              <p>Content: {review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
