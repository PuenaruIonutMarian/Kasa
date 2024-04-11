import { Link, NavLink } from "react-router-dom";
import styles from "./header.module.scss";
import logo from '../../assets/logo.svg';

/**
 * Composant pour l'en-tête de l'application.
 * @module Header
 * @returns {JSX.Element} Le composant représentant l'en-tête.
 */
const Header = () => {
  return (
    <header className={`${styles.header} margins`}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink exact="true" to="/" activeclassname={styles.active}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/apropos" activeclassname={styles.active}>
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
