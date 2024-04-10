import styles from "./error.module.scss";

function ErrorMessage() {
  return <div className={styles.message}>Une erreur s'est produite</div>;
}

export default ErrorMessage;