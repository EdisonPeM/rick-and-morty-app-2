import clx from "classnames";
import styles from "./styles.module.scss";

const Skeleton = ({ on = true, className, ...props }) => {
  if (!on) return null;

  return <div className={clx(styles["skeleton"], className)} {...props} />;
};

export default Skeleton;
