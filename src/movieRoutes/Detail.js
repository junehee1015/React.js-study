import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from '../css/Detail.module.css';

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
      {loading ? <h1 id={styles.loading}>L o a d i n g . . .</h1> : (
        <div className={styles.container}>
          <div className={styles.img_container} style={{
            background: `url(${movie.background_image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}>
            <img src={movie.medium_cover_image}/>
          </div>
          <h1>{movie.title}</h1>
          <ul className={styles.genres}>
            {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
          </ul>
          <div className={styles.info}>
            <span>재생시간 {movie.runtime}분</span>
            <span>{movie.year}</span>
            <span>⭐평점 {movie.rating}</span>
            <h3>줄거리</h3>
            <p>{movie.description_intro}</p>
          </div>
          <div className={styles.back}>
            <Link to={`/`}><span>back</span></Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail; 