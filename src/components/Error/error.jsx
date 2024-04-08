import { Link } from 'react-router-dom';
import styles from "./error.module.scss";
import errorCodeImage from '../../assets/404.png'; 

function Error() {
    return (
        <div className={styles.errorMessage}>
            <img src={errorCodeImage} alt='errorCode'></img>
            <h3>Oups! La page que vous demandez n&apos;existe pas.</h3>
            <Link to="/">Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default Error;