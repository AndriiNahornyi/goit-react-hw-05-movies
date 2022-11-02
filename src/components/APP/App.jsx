import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('../../pages/Home'));
const Movies = lazy(() => import('../../pages/Movies'));
const MovieDetails = lazy(() => import('../../pages/MovieDetails'));
const Cast = lazy(() => import('../Cast'));
const Reviews = lazy(() => import('../Reviews'));
const NotFound = lazy(() => import('../../pages/NotFound'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};
