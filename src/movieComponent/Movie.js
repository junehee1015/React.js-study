import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Movie({ id, img, title, genres, summary }) {
  return (
    <div>
      <img src={img} alt={title}/>
      <h2>
        <Link to={`/detail/${id}`}>{title}</Link>
      </h2>
      <ul>
        {genres.map(value => <li key={value}>{value}</li>)}
      </ul>
      <p>{summary}</p>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string.isRequired,
};
export default Movie;