import styles from "./appwrapper.module.scss";

const AppWrapper = ({ children }) => (
  <div className={styles.app}>
    {children}
  </div>
);

export default AppWrapper;