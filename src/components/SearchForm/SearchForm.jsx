import { useState } from 'react';
import css from './SearchForm.module.css';

export const SearchForm = ({ getFormData }) => {
  const [query, setQuery] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    getFormData(query);
  };
  const onHandleChage = event => {
    setQuery(event.target.value.trim());
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name={'query'}
          onChange={onHandleChage}
          placeholder="Movie name"
          value={query}
        />
        <button className={css.button} type="submit"></button>
      </div>
    </form>
  );
};
