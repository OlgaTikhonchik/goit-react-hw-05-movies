import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchMoviesCast } from '../../services/api';

// const BASE_URL = 'https://api.themoviedb.org/3';
// const KEY = 'ab7e82ec9455b58954116ec4a812321e';

const photoURL = profilePath => {
  if (profilePath) {
    return `https://www.themoviedb.org/t/p/w276_and_h350_face${profilePath}`;
  }
};

const Cast = () => {
  const { movieId } = useParams();
  const [actorInfo, setActorInfo] = useState([]);
  console.log(actorInfo);

  useEffect(() => {
    // fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}`)
    //   .then(response => response.json())
    //   .then(data => {
    //     setActorInfo(data);
    //     console.log(data);
    //   });
    fetchMoviesCast(movieId)
      .then(data => setActorInfo(data))
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  return (
    <div>
      <ul>
        {actorInfo.cast?.map(
          ({ id, profile_path, original_name, character, popularity }) => (
            <li key={id}>
              <img
                src={photoURL(profile_path)}
                alt=""
                width="250px"
                height="300px"
              />
              <h2> {original_name}</h2>
              <p>Character: {character}</p>
              <p>Popularity: {popularity}</p>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

Cast.propTypes = {
  actorInfo: PropTypes.shape({
    original_name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    profile_path: PropTypes.string,
    id: PropTypes.number.isRequired,
    popularity: PropTypes.number,
  }),
};

export default Cast;
