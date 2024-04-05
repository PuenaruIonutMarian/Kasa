import { Link } from "react-router-dom";
import styles from "./card.module.scss";

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
