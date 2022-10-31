import { Cast } from 'components/Cast';
import { Reviews } from 'components/Reviews';
import { Home } from 'pages/Home';
import { MovieDetails } from 'pages/MovieDetails';
import { Movies } from 'pages/Movies';
import { NotFound } from 'pages/NotFound';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies:movieId" element={<MovieDetails />}>
          <Route path="/movies:movieId/cast" element={<Cast />} />
          <Route path="/movies:movieId/reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
