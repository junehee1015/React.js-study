import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function Detail() {
  // Router에 사용한 parameter 사용.(현재 id)
  // 게시물의 parameter 값을 받아온다.
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  
  const getMovie = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();

    setMovie(json.data.movie);
    setLoading(false);
  }

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? <h1>Loading...</h1> : (
        <div>
          <img src={movie.large_cover_image}/>
          <h1>{movie.title}</h1>
          <ul>
            {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
          </ul>
          <p>{movie.year}년 개봉</p>
          <p>평점 : {movie.rating}</p>
        </div>
      )}
    </div>
  );
}

export default Detail; 