import { useNavigate } from 'react-router-dom';
import css from './Button.module.css';

export const Button = () => {
  // const location = useLocation();
  const navigate = useNavigate();
  //   return <Link to={location.state.from}>Back to products</Link>;;
  return (
    <button onClick={() => navigate(-1)} className={css.Btn} type="button">
      Go Back
    </button>
  );
};
