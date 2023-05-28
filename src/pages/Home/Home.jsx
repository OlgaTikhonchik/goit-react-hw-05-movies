import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchTrending } from '../../services/api';
import { useLocation } from 'react-router-dom';

import {
  ContainerHome,
  ItemMovies,
  LinkMovies,
  ListMovies,
  Title,
} from './Home.styled';

// const BASE_URL = 'https://api.themoviedb.org/3';
// const KEY = 'ab7e82ec9455b58954116ec4a812321e';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrending()
      .then(response => setMovies(response.results))
      .catch(error => {
        console.log(error);
      });
  }, []);

  // useEffect(() => {
  //   fetch(`${BASE_URL}/trending/all/day?api_key=${KEY}`)
  //     .then(response => response.json())
  //     .then(json => setMovies(json.results));
  // }, []);

  return (
    <ContainerHome>
      <Title>Trending today</Title>

      <ListMovies>
        {movies.map(({ title, name, id }) => (
          <ItemMovies key={id}>
            <LinkMovies
              // style={{ textDecoration: 'none', color: '#804216' }}
              to={`/movies/${id}`}
              state={{ from: location }}
            >
              {title || name}
            </LinkMovies>
          </ItemMovies>
        ))}
      </ListMovies>
    </ContainerHome>
  );
};

Home.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default Home;
