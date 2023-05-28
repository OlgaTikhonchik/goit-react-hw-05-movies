import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchMoviesDetails } from '../../services/api';
import {
  ButtonBack,
  ContainerDetails,
  ContainerInfo,
  Img,
  ItemInfo,
  LinkInfo,
  Span,
  SpanGenres,
  Text,
  TitleInfo,
} from './MoviedDetails.styled';
import { ListMovies } from 'pages/Home/Home.styled';

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
    <>
      <ButtonBack to={backLinkHref}>Back to movie</ButtonBack>
      <ContainerDetails>
        <Img src={posterURL(poster_path)} alt="" />
        <ContainerInfo>
          <TitleInfo>{title || name}</TitleInfo>
          <Text>User score: {vote_average}%</Text>
          <Text>Overview </Text>
          <Span> {overview}</Span>

          <Text>Genres</Text>
          {genres?.map(({ id, name }) => (
            <SpanGenres key={id}>{name}</SpanGenres>
          ))}
        </ContainerInfo>
      </ContainerDetails>
      <div>
        <h2>Additional information</h2>
        <hr />
        <ListMovies>
          <ItemInfo>
            <LinkInfo to="cast" state={{ ...location.state }}>
              Cast
            </LinkInfo>
          </ItemInfo>
          <ItemInfo>
            <LinkInfo to="reviews" state={{ ...location.state }}>
              Reviews
            </LinkInfo>
          </ItemInfo>
        </ListMovies>
      </div>
      <hr />

      <Suspense fallback={<div>Loading movie info...</div>}>
        <Outlet />
      </Suspense>
    </>
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
