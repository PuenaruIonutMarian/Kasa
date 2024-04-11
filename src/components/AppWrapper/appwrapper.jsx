import styles from "./appwrapper.module.scss";

/**
 * Composant enveloppant l'application.
 * @module AppWrapper
 * @param {React.ReactNode} children - Les composants enfants à encapsuler.
 * @returns {JSX.Element} Le composant représentant l'enveloppe de l'application.
 */
const AppWrapper = ({ children }) => (
  <div className={styles.app}>
    {children}
  </div>
);

export default AppWrapper;