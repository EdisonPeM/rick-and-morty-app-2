import clx from "classnames";
import styles from "./styles.module.scss";

const Card = ({ className, children }) => {
  return <div className={clx(styles["card"], className)}>{children}</div>;
};

export default Card;
