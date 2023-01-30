import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

const Collapse = ({ open = true, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("");
  const collRef = useRef(null);

  const configHeight = useCallback(() => {
    const collapse = collRef.current;
    if (collapse) setHeight(collapse.scrollHeight + "px");
  }, []);

  useEffect(() => {
    if (open) {
      setIsOpen(true);
      setTimeout(() => configHeight(), 30);
    } else {
      configHeight();
      setTimeout(() => setHeight("0px"), 30);
    }
  }, [open, configHeight]);

  // useEffect(() => {
  //   // hanlde resize
  //   const handler = () => configHeight();
  //   window.addEventListener("resize", handler);
  //   return () => window.removeEventListener("resize", handler);
  // }, [configHeight]);

  const onTransitionEnd = () => {
    if (!open) setIsOpen(false);
    else setHeight("");
  };

  return (
    isOpen && (
      <div
        className={styles["collapse-container"]}
        ref={collRef}
        style={{ height }}
        onTransitionEnd={onTransitionEnd}
      >
        {children}
      </div>
    )
  );
};

export default Collapse;
