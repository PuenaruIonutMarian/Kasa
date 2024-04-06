import styles from "./tag.module.scss";

function Tag({tag}) {
  return <span className={styles.tag}>{tag}</span>;
}

export default Tag;
