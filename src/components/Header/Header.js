import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
export const Header = () => {
  return (
    <>
      <header className={css.Header}>
        <nav>
          <ul>
            <li className={css.Items}>
              <NavLink className={css.Links} to="/" end>
                <h2 className={css.Title}>HOME</h2>
              </NavLink>
            </li>
            <li className={css.Items}>
              <NavLink className={css.Links} to="/movies">
                <h2 className={css.Title}>MOVIES</h2>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
