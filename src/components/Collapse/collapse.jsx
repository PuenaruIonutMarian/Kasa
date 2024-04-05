import { useState } from "react";
import styles from "./collapse.module.scss";
import chevronDown from "../../assets/chevron_down.svg";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

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
            style={{ transform: isOpen ? "rotate(180deg)" : "" }}
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
