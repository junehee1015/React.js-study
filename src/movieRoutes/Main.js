import { useState, useEffect } from 'react';
import Movie from '../movieComponent/Movie';

function Main() {
  // useState
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  // then을 사용한 것과 같다. (async await)
  const getMovies = async () => {
    // 방법 1.
    // const response = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year');
    // const json = await response.json();

    // 방법 2.
    const json = await (await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=7.5&sort_by=year')).json();

    setMovies(json.data.movies);
    setLoading(false);
  }
  // useEffect
  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);
  return (
    // map을 사용하면 key가 항상 필요하다.
    <div>
      {loading ? <h1>Loading...</h1> : movies.map(movie => <Movie
        key={movie.id}
        id={movie.id}
        title={movie.title}
        genres={movie.genres}
        img={movie.medium_cover_image}
        summary={movie.summary}
      />)}
    </div>
  );
}

export default Main;