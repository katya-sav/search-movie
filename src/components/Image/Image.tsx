import React from "react";
import cx from "classnames";

import styles from "./Image.module.css";

type TImageProps = {
  src: string;
  alt?: string;
  className?: string;
  onError?: () => void;
  onSuccess?: () => void;
};

export const Image = ({
  alt,
  src,
  className,
  onError,
  onSuccess,
}: TImageProps) => {
  const handleOnError = () => {
    onError?.();
  };

  const handleOnSuccess = () => {
    onSuccess?.();
  };

  return (
    <img
      className={cx(styles.image, className)}
      src={src}
      alt={alt}
      onError={handleOnError}
      onLoad={handleOnSuccess}
    />
  );
};
