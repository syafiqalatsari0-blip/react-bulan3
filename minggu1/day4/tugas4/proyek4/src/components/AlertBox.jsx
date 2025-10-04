import React from "react";
import styles from "./AlertBox.module.css";

export default function AlertBox({ type = "success", message }) {
  // semua box selalu punya style dasar
  const classNames = [styles.alert];

  // tambahkan class sesuai tipe
  if (type === "success") {
    classNames.push(styles.success);
  } else if (type === "warning") {
    classNames.push(styles.warning);
  } else if (type === "error") {
    classNames.push(styles.error);
  }

  return <div className={classNames.join(" ")}>{message}</div>;
}
