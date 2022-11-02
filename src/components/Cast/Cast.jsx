import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/API';
import { createImgStr } from 'services/helpers';
import css from './Cast.module.css';

export const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getCastDetails = async () => {
      const castData = await getCast(movieId);
      setCast(castData.cast);
      // console.log(castData.cast[0]);
    };
    getCastDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h2 className={css.Title}>Cast</h2>
      {cast && (
        <ul className={css.List}>
          {cast?.map(item => (
            <li className={css.Item} key={item.id}>
              <div className={css.Image}>
                <img
                  className={css.Img}
                  src={createImgStr(item.profile_path)}
                  alt="actor"
                />
              </div>
              <p className={css.Name}>
                <span className={css.Paragraphe}>Name: </span>{' '}
                {item.original_name}
              </p>
              <p className={css.Character}>
                <span className={css.Paragraphe}>Character: </span>{' '}
                {item.character}
              </p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
