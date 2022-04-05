import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../css/Movie.module.css';

function Movie({ id, img, title, year, bg }) {
  return (
    <div className={styles.card}>
      <Link to={`/detail/${id}`}><img src={img} alt={title}/></Link>
      <h3>
        <Link to={`/detail/${id}`}>{title}</Link>
      </h3>
      <span>{year}</span>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired
};
export default Movie;