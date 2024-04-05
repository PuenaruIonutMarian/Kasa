import React from 'react';
import styles from './footer.module.scss';
import logo from '../../assets/logo-white.svg';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <img src={logo} alt="logo" />
      <p>© {currentYear} Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
