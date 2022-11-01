import { getMovieByName } from 'services/API';
import { Header } from 'components/Header';
import { SearchForm } from 'components/SearchForm';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import css from './Movies.module.css';
import { createImgStr } from 'services/helpers';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  //Замінити на searchParams query
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
    setQuery(data);
  };
  // const loadMore = () => {
  //   setPage(prevPage => prevPage + 1);
  // };

  return (
    <>
      <Header />
      <SearchForm getFormData={getFormData} />
      {movies && (
        <ul>
          {movies?.map(movie => (
            <li className={css.Items} key={movie.id}>
              <Link className={css.Link} to={`/movies/${movie.id}`}>
                <img src={createImgStr(movie.poster_path)} alt="movie" />
                <h2>Title: {movie.original_title}</h2>
                <p>Overview: {movie.overview}</p>
                <p>Vote average: {movie.vote_average}</p>
                <p>Realise date: {movie.release_date}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
