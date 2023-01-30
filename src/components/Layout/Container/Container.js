import clx from "classnames";
import styles from "./styles.module.scss";

const Container = ({ className, children }) => {
  return <div className={clx(styles["container"], className)}>{children}</div>;
};

export default Container;
