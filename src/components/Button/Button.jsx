import { useNavigate } from 'react-router-dom';
import css from './Button.module.css';

export const Button = ({ comebackPath }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(comebackPath)}
      className={css.Btn}
      type="button"
    >
      Go Back
    </button>
  );
};
