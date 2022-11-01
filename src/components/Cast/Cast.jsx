import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/API';
import { createImgStr } from 'services/helpers';

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
      <h2>Cast</h2>
      {cast && (
        <ul>
          {cast?.map(item => (
            <li key={item.id}>
              <img src={createImgStr(item.profile_path)} alt="actor" />
              <p>Name: {item.original_name}</p>
              <p>Character: {item.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
