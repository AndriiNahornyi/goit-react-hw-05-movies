import { getMovieByName } from 'API';
import { SearchForm } from 'components/SearchForm';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  useEffect(() => {
    const getData = async () => {
      const data = await getMovieByName(query);
      setMovies(data.results);
    };
    getData();
  }, [query]);
  const getFormData = data => {
    setQuery(data);
  };
  return (
    <>
      <SearchForm getFormData={getFormData} />
      {movies && (
        <ul>
          {movies?.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
