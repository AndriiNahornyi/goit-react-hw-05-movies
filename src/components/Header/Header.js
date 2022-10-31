import { NavLink } from 'react-router-dom';
// import css from './Header.module.css';
export const Header = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/" end>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies">MOVIES</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
