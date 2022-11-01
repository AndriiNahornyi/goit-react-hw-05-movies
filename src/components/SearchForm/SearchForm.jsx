import { useState } from 'react';
import css from './SearchForm.module.css';

export const SearchForm = ({ getFormData }) => {
  const [query, setQuery] = useState('');
  //Замінити на searchParams?
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
          className={css.SearchFormInput}
          name={'query'}
          onChange={onHandleChage}
          placeholder="Movie title"
          value={query}
        />
        <button className={css.button} type="submit">
          Search Movie
        </button>
      </div>
    </form>
  );
};
