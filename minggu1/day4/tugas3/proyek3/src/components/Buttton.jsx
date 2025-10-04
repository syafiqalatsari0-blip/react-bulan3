import React from "react";
import styles from "./Button.module.css";

export default function Button({ variant = "default", children }) {
  const classNames = [styles.button];

  if (variant === "primary") {
    classNames.push(styles.primary);
  }

  return <button className={classNames.join(" ")}>{children}</button>;
}
