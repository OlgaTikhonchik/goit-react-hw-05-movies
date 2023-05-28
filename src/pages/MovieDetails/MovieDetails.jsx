import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchMoviesDetails } from '../../services/api';

// const BASE_URL = 'https://api.themoviedb.org/3';
// const KEY = 'ab7e82ec9455b58954116ec4a812321e';

const posterURL = posterPath => {
  return `https://image.tmdb.org/t/p/w500${posterPath}`;
};

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const { movieId } = useParams();
  // console.log(movieId);
  // console.log(movieDetails);

  const location = useLocation();
  // console.log(location);
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    // fetch(`${BASE_URL}/movie/${movieId}?api_key=${KEY}`)
    //   .then(response => response.json())
    //   .then(json => setMovieDetails(json));

    fetchMoviesDetails(movieId)
      .then(json => setMovieDetails(json))
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  const { title, overview, genres, poster_path, name, vote_average } =
    movieDetails;
  return (
    <main>
      <Link to={backLinkHref}>Back to movie</Link>
      <div>
        <img src={posterURL(poster_path)} alt="" />
        <div>
          <h1>{title || name}</h1>
          <p>User score: {vote_average}%</p>
          <p>Overview </p>
          <span> {overview}</span>

          <p>Genres</p>
          {genres?.map(({ id, name }) => (
            <span key={id}>{name}</span>
          ))}
        </div>
      </div>
      <div>
        <h2>Additional information</h2>
        <hr />
        <ul>
          <li>
            <Link to="cast" state={{ ...location.state }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ ...location.state }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <hr />

      <Suspense fallback={<div>Loading movie info...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

MovieDetails.propTypes = {
  movieDetails: PropTypes.shape({
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    vote_average: PropTypes.number,
    overview: PropTypes.string.isRequired,
  }),

  // genres: PropTypes.array.isRequired,
  genres: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default MovieDetails;
