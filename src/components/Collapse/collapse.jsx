import { useState } from "react";
import styles from "./collapse.module.scss";
import chevronDown from "../../assets/chevron_down.svg";

/**
 * Composant pour afficher un élément pouvant être rétracté ou déployé.
 * @module Collapse
 * @param {string} title - Le titre de l'élément rétractable.
 * @param {(string[]|string)} content - Le contenu de l'élément rétractable, pouvant être une chaîne de caractères ou un tableau de chaînes de caractères.
 * @returns {JSX.Element} Le composant représentant l'élément rétractable.
 */
function Collapse({ title, content }) {
  /** État pour gérer l'ouverture ou la fermeture de l'élément */
  const [isOpen, setIsOpen] = useState(false);

  /** Fonction pour basculer l'état d'ouverture ou de fermeture de l'élément */
  const handleOpen = () => {
    setIsOpen(prevOpen => !prevOpen);
  };

  return (
    <div className={styles.collapse}>
      <div className={styles.collapse__header} onClick={handleOpen}>
        <span>{title}</span>
        <span>
          <img
            src={chevronDown}
            alt=""
            style={{ transform: !isOpen ? "rotate(180deg)" : "" }}
          />
        </span>
      </div>
      {isOpen && (
        <div className={styles.collapse__content}>
          {Array.isArray(content) ? (
            <ul>
              {content.map((el, index) => (
                <li key={index}>{el}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Collapse;
