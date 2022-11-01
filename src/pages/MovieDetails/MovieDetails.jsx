import { getMovieDetails } from 'services/API';
import { Header } from 'components/Header';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { createImgStr } from 'services/helpers';

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
      <img src={createImgStr(movieItems.poster_path)} alt="" />
      <h2>Title: {movieItems.original_title}</h2>
      <p>Genres: {movieItems?.genres?.map(genre => genre.name).join(', ')}</p>
      <p>Overview: {movieItems.overview}</p>
      <p>Release date: {movieItems.release_date}</p>
      <p>Popularity: {movieItems.vote_average}</p>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </>
  );
};
