import { getMovieDetails } from 'services/API';
import { Header } from 'components/Header';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { createImgStr } from 'services/helpers';
import css from './MovieDetails.module.css';
import Button from 'components/Button';
export const MovieDetails = () => {
  const [movieItems, setMovieItems] = useState({});
  const { movieId } = useParams();
  useEffect(() => {
    const getDetails = async () => {
      const movieDetailsData = await getMovieDetails(movieId);
      setMovieItems(movieDetailsData);
    };
    getDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Header />
      <div className={css.Section}>
        <div className={css.Container}>
          <Button />
          <img
            className={css.Img}
            src={createImgStr(movieItems.poster_path)}
            alt="poster"
          />
          <h2 className={css.Title}>Title: {movieItems.original_title}</h2>
          <p className={css.Genres}>
            Genres: {movieItems?.genres?.map(genre => genre.name).join(', ')}
          </p>
          <p className={css.Genres}>Overview: {movieItems.overview}</p>
          <p className={css.Genres}>Release date: {movieItems.release_date}</p>
          <p className={css.Genres}>Popularity: {movieItems.vote_average}</p>
          <Link className={css.Link} to="cast">
            Cast
          </Link>
          <Link className={css.Link} to="reviews">
            Reviews
          </Link>
          <Suspense fallback={<p>Loading...</p>}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </>
  );
};
