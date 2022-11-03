import { getMovieByName } from 'services/API';
import { Header } from 'components/Header';
import { SearchForm } from 'components/SearchForm';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import css from './Movies.module.css';
import { createImgStr } from 'services/helpers';

export const Movies = () => {
  //Замінити на searchParams query
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') ?? 1;
  const query = searchParams.get('query') ?? '';
  const [movies, setMovies] = useState([]);
  // eslint-disable-next-line no-unused-vars
  // const [page, setPage] = useState(1);
  // const [query, setQuery] = useState('');

  useEffect(() => {
    const getData = async (query, page = 1) => {
      const data = await getMovieByName(query, page);
      setMovies(data.results);
    };

    if (page > 1 && query) {
      getData(query, page);
    } else if (query) {
      getData(query);
    }
  }, [query, page]);
  const getFormData = data => {
    setSearchParams({ query: data });
  };
  // const loadMore = () => {
  //   setPage(prevPage => prevPage + 1);
  // };

  return (
    <>
      <Header />
      <SearchForm getFormData={getFormData} />
      {movies && (
        <ul className={css.List}>
          {movies?.map(movie => (
            <li className={css.Items} key={movie.id}>
              <Link className={css.Link} to={`/movies/${movie.id}`}>
                <div className={css.Image}>
                  <img src={createImgStr(movie.poster_path)} alt="movie" />
                </div>
                <h2 className={css.Title}>Title: {movie.original_title}</h2>
                <p className={css.Overview}>
                  <span className={css.Paragraphe}>Overview: </span>{' '}
                  {movie.overview}
                </p>
                <p className={css.VoteAverage}>
                  <span className={css.Paragraphe}>Vote average: </span>
                  {movie.vote_average}
                </p>
                <p className={css.DateRealise}>
                  <span className={css.Paragraphe}>Realise date: </span>
                  {movie.release_date}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
