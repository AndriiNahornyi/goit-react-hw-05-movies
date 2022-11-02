import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/API';
import css from './Reviews.module.css';

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
      <h2 className={css.Title}>Reviews</h2>
      {reviews && (
        <ul>
          {reviews?.map(review => (
            <li className={css.Item} key={review.id}>
              <p className={css.Author}>
                <span className={css.Paragraphe}>Author: </span> {review.author}
              </p>
              <p>
                <span className={css.Paragraphe}>Content: </span>
                {review.content}
              </p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
