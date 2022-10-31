import { getTrending } from 'API';
import { Header } from 'components/Header';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
        <ul>
          {trendingMovies?.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
