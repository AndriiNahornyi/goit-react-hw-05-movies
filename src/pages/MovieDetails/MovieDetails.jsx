import { getMovieDetails } from 'services/API';
import { Header } from 'components/Header';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { createImgStr } from 'services/helpers';
import css from './MovieDetails.module.css';
import Button from 'components/Button';
export const MovieDetails = () => {
  const [movieItems, setMovieItems] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  console.log('location', location);
  const comebackPath = location.state?.from
    ? location.state?.from?.pathname + location.state?.from?.search
    : '/';

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
          <Button comebackPath={comebackPath} />
          <img
            className={css.Img}
            src={createImgStr(movieItems.poster_path)}
            alt="poster"
          />
          <h2 className={css.Title}>Title: {movieItems.original_title}</h2>
          <p className={css.Genres}>
            <span className={css.Paragraphe}>Genres: </span>{' '}
            {movieItems?.genres?.map(genre => genre.name).join(', ')}
          </p>
          <p className={css.Genres}>
            <span className={css.Paragraphe}>Overview: </span>{' '}
            {movieItems.overview}
          </p>
          <p className={css.Genres}>
            <span className={css.Paragraphe}>Release date: </span>{' '}
            {movieItems.release_date}
          </p>
          <p className={css.Genres}>
            <span className={css.Paragraphe}>Popularity: </span>{' '}
            {movieItems.vote_average}
          </p>
          <Link
            className={css.Link}
            to="cast"
            state={{ from: location.state?.from }}
          >
            Cast
          </Link>
          <Link
            className={css.Link}
            to="reviews"
            state={{ from: location.state?.from }}
          >
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
