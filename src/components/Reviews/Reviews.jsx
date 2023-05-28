import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchMoviesReviews } from '../../services/api';

// const BASE_URL = 'https://api.themoviedb.org/3';
// const KEY = 'ab7e82ec9455b58954116ec4a812321e';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  console.log(reviews);
  console.log(movieId);

  useEffect(() => {
    // fetch(`${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}`)
    //   .then(response => response.json())
    //   .then(data => {
    //     setReviews(data.results);
    //     console.log(data);
    //   });

    fetchMoviesReviews(movieId)
      .then(data => setReviews(data.results))
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  return (
    <div>
      {reviews.length === 0 ? (
        <div style={{ fontWeight: 500, fontSize: '20px', color: 'red' }}>
          We don`t have any rewiews for this movie`
        </div>
      ) : (
        <ul>
          {reviews?.map(({ id, author, content }) => (
            <li key={id}>
              <h2>Author: {author}</h2>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.shape({
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,

    id: PropTypes.number.isRequired,
  }),
};

export default Reviews;
