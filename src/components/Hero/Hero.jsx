import styles from "./hero.module.scss";

/**
 * Composant pour afficher un héros avec une image et un titre optionnel.
 * @module Hero
 * @param {string} type - Le type de héros à afficher. Ce type détermine le style.
 * @param {string} heroImg - L'URL de l'image du héros.
 * @param {string} title - Le titre à afficher dans le héros (optionnel).
 * @returns {JSX.Element} Le composant représentant le héros.
 */
function Hero({ type, heroImg, title }) {
  return (
    <div className={`${styles.hero} ${styles[type]} margins`}>
      <img src={heroImg} alt="Vallée entre les montagnes" />
      {title && <h1>{title}</h1>}
    </div>
  );
}

export default Hero;
