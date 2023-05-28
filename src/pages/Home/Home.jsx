import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchTrending } from '../../services/api';
import { Link, useLocation } from 'react-router-dom';

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
    <main>
      <div>
        <h2>Trending today</h2>
        <ul>
          {movies.map(({ title, name, id }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title || name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
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
