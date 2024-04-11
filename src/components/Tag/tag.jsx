import styles from "./tag.module.scss";

/**
 * Composant représentant une balise.
 * @module Tag
 * @param {string} tag - Le contenu de la balise.
 * @returns {JSX.Element} Le composant représentant la balise.
 */
function Tag({ tag }) {
  return <span className={styles.tag}>{tag}</span>;
}

export default Tag;
