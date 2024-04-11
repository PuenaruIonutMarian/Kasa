import { Link } from "react-router-dom";
import styles from "./card.module.scss";

/**
 * Composant pour afficher une carte d'élément avec un lien vers le détail.
 * @module Card
 * @param {string} title - Le titre de l'élément.
 * @param {string} cover - L'URL de l'image de couverture de l'élément.
 * @param {string} id - L'identifiant de l'élément.
 * @returns {JSX.Element} Le composant représentant la carte d'élément.
 */
function Card({ title, cover, id }) {
  return (
    <Link
      to={`/accomodation/${id}`}
      className={styles.card}
      style={{ backgroundImage: `url(${cover})` }}
    >
      <h3>{title}</h3>
    </Link>
  );
}

export default Card;
