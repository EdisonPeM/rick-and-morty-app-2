import styles from "./styles.module.scss";

const Loader = ({ on = true, ...props }) => {
  if (!on) return null;

  return <div className={styles["loader"]} {...props} />;
};

export default Loader;
