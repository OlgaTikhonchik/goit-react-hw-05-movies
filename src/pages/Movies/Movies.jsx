import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchSearchMovies } from '../../services/api';

// const BASE_URL = 'https://api.themoviedb.org/3';
// const KEY = 'ab7e82ec9455b58954116ec4a812321e';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  // console.log(movies);

  const movieId = searchParams.get('movieId') ?? '';

  const handleSubmit = event => {
    event.preventDefault();

    setSearchParams({ movieId: event.currentTarget.elements.search.value });
  };

  useEffect(() => {
    if (movieId !== '') {
      // fetch(`${BASE_URL}/search/movie?api_key=${KEY}&query=${movieId}`)
      //   .then(response => response.json())
      //   .then(data => {
      //     setMovies(data.results);
      //   });

      fetchSearchMovies(movieId)
        .then(response => setMovies(response.results))
        .catch(error => {
          console.log(error);
        });
    }
  }, [movieId]);

  // const updateQueryString = event => {
  //   const movieIdValue = event.target.value;
  //   if (movieIdValue === '') {
  //     return setSearchParams({});
  //   }
  //   setSearchParams({ movieId: movieIdValue });
  // };

  return (
    <main>
      <div>
        <form type="submit" onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            // onChange={updateQueryString}
          />
          <button>Search movie</button>
          {movies?.length > 0 && (
            <div>
              <h2>List movies</h2>
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
          )}
        </form>
      </div>
    </main>
  );
};

Movies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default Movies;
