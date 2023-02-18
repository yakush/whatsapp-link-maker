import React from "react";
import styles from "./Button.module.css";
import cx from "classnames";

type Props = {
  href?: string;
  disabled?: boolean;
};

const Button: React.FC<Props> = ({ disabled, href, children }) => {
  return (
    <a
      className={cx(styles.button, disabled && styles.disabled)}
      href={href}
    //   target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

export default Button;
