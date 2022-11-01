import { getTrending } from 'services/API';
import { Header } from 'components/Header';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import css from './Home.module.css';
import { createImgStr } from 'services/helpers';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState('');
  useEffect(() => {
    const getData = async () => {
      const data = await getTrending();
      //   console.log('data.results :>> ', data.results);
      setTrendingMovies(data.results);
    };
    getData();
  }, []);
  //   ;

  return (
    <>
      <Header />
      {trendingMovies && (
        <ul className={css.List}>
          {trendingMovies?.map(movie => (
            <li className={css.Items} key={movie.id}>
              <Link className={css.Link} to={`/movies/${movie.id}`}>
                <img src={createImgStr(movie.poster_path)} alt="movie" />
                <h2>Title: {movie.original_title}</h2>
                <p>Overview: {movie.overview}</p>
                <p>Vote average: {movie.vote_average}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
