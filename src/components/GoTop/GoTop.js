import clx from "classnames";
import { useEffect, useState } from "react";
import { debounce } from "utils/common";
import styles from "./styles.module.scss";

const GoTop = () => {
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    const handler = debounce(() => {
      setShouldShow(window.scrollY > window.innerHeight * 1.2);
    }, 100);

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setShouldShow(false);
  };

  return shouldShow ? (
    <button
      className={clx("btn btn-secondary", styles["go-top"])}
      type="button"
      onClick={handleClick}
    >
      ↑
    </button>
  ) : null;
};

export default GoTop;
