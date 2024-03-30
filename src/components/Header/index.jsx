import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from '../../assets/logo.svg';

const Header = () => {
  return (
    <header className={`${styles.header} pad`}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName={styles.active}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName={styles.active}>
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
