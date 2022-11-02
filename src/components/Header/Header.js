import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
export const Header = () => {
  return (
    <>
      <header className={css.Header}>
        <nav className={css.Navigation}>
          <ul className={css.Container}>
            <li className={css.Items}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? css.DeActive : css.Links
                }
                to="/"
                end
              >
                <h2 className={css.Title}>HOME</h2>
              </NavLink>
            </li>
            <li className={css.Items}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? css.DeActive : css.Links
                }
                to="/movies"
              >
                <h2 className={css.Title}>MOVIES</h2>
              </NavLink>
            </li>
          </ul>
          <div className={css.Content}>
            <h1 className={css.PrimaryTitle}>THE BEST MOVIES SELECTION</h1>
          </div>
        </nav>
      </header>
    </>
  );
};
