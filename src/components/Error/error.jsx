import { Link } from 'react-router-dom';
import styles from "./error.module.scss";

function Error() {
    return (
        <div className={styles.errorMessage}>
            <h1> 404</h1>
            <h3>Oups! La page que vous demandez n'existe pas.</h3>
            <Link to="/">Retourner sur la page d’a'ccueil</Link>
        </div>
    )
}

export default Error;