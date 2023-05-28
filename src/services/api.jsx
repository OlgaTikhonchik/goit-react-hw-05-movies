const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = 'ab7e82ec9455b58954116ec4a812321e';

export const fetchTrending = () => {
  try {
    return fetch(`${BASE_URL}/trending/all/day?api_key=${KEY}`).then(response =>
      response.json()
    );
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchSearchMovies = movieId => {
  try {
    return fetch(
      `${BASE_URL}/search/movie?api_key=${KEY}&query=${movieId}`
    ).then(response => response.json());
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchMoviesDetails = movieId => {
  try {
    return fetch(`${BASE_URL}/movie/${movieId}?api_key=${KEY}`).then(response =>
      response.json()
    );
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchMoviesCast = movieId => {
  try {
    return fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}`).then(
      response => response.json()
    );
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchMoviesReviews = movieId => {
  try {
    return fetch(`${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}`).then(
      response => response.json()
    );
  } catch (error) {
    throw new Error(error.message);
  }
};
