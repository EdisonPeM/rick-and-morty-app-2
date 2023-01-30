import clx from "classnames";
import { memo, useState } from "react";
import { Skeleton } from "../Loaders";

import styles from "./style.module.scss";

const Image = ({
  src,
  alt,
  className,
  width = "",
  height = "",
  ...otherProps
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={styles["wrapper"]}
      style={{ width: !isLoaded ? width || "100%" : "" }}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        {...otherProps}
        className={clx({ [styles["img-loading"]]: !isLoaded }, className)}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
      />
      {!isLoaded ? (
        <Skeleton
          className={styles["placeholder"]}
          style={{
            width,
            height,
            paddingTop: height ? "" : "100%"
          }}
        />
      ) : null}
    </div>
  );
};

export default memo(Image);
