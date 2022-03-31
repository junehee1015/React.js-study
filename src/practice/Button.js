import PropTypes from 'prop-types';
import styles from './css/Button.module.css';

function Btn({text, onClick}) {

    return(
        <button
            className={styles.btn}
            onClick={onClick}
        >
        {text}</button>
    );
}
Btn.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Btn;