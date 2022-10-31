import { Link, Outlet } from 'react-router-dom';

export const MovieDetails = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
      </ul>

      <Outlet />
    </>
  );
};
