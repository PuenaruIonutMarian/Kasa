import styles from "./error.module.scss";

/**
 * Composant pour afficher un message d'erreur.
 * @module ErrorMessage
 * @returns {JSX.Element} Le composant représentant le message d'erreur.
 */
function ErrorMessage() {
  return <div className={styles.message}>Une erreur s'est produite</div>;
}

export default ErrorMessage;