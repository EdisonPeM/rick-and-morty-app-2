import styles from "./styles.module.scss";

const Grid = ({ children }) => {
  return <div className={styles["grid"]}>{children}</div>;
};

export default Grid;
