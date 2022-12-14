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
      <div className={css.Section}>
        <div className={css.Container}>
          {trendingMovies && (
            <ul className={css.List}>
              {trendingMovies?.map(movie => (
                <li className={css.Items} key={movie.id}>
                  <Link className={css.Link} to={`/movies/${movie.id}`}>
                    <div className={css.Content}>
                      <img
                        className={css.Img}
                        src={createImgStr(movie.poster_path)}
                        alt="movie"
                      />
                    </div>

                    <h2 className={css.Title}>Title: {movie.original_title}</h2>
                    <p className={css.Overview}>
                      <span className={css.Paragraphe}>Overview: </span>{' '}
                      {movie.overview}
                    </p>
                    <p>
                      <span className={css.Paragraphe}>Vote average: </span>{' '}
                      {movie.vote_average}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};
