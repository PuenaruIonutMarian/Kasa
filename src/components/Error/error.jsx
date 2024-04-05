import { Link } from 'react-router-dom';
import styles from "./error.module.scss";
import errorCodeImage from '../../assets/404.png'; // Import the PNG image

function Error() {
    return (
        <div className={styles.errorMessage}>
            {/* Use the imported image */}
            <img src={errorCodeImage} alt='errorCode'></img>
            <h3>Oups! La page que vous demandez n&apos;existe pas.</h3>
            <Link to="/">Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default Error;