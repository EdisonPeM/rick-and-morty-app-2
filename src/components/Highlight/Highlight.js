import clx from "classnames";
import { useMemo } from "react";
import { escapeRegExp } from "utils/regexp";
import styles from "./styles.module.scss";

const Highlight = ({ value = "", match = "" }) => {
  const matches = useMemo(() => {
    if (match) {
      const escapedMatch = escapeRegExp(match);
      const matcher = new RegExp(`(${escapedMatch})`, "i");
      const testReg = new RegExp(`^${escapedMatch}$`, "i");

      return value.split(matcher).map((token) => ({
        text: token,
        highlight: testReg.test(token)
      }));
    } else {
      return [{ text: value, highlight: false }];
    }
  }, [value, match]);

  return (
    <>
      {matches.map(({ text, highlight }, idx) => (
        <span
          key={`${text}-${idx}`}
          className={clx({
            [styles["highlight--match"]]: highlight
          })}
        >
          {text}
        </span>
      ))}
    </>
  );
};

export default Highlight;
