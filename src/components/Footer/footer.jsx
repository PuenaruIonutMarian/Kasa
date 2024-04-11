import React from 'react';
import styles from './footer.module.scss';
import logo from '../../assets/logo-white.svg';

/**
 * Composant pour le pied de page de l'application.
 * @module Footer
 * @returns {JSX.Element} Le composant représentant le pied de page.
 */
function Footer() {
  /** Année en cours */
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <img src={logo} alt="logo" />
      <p>© {currentYear} Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
