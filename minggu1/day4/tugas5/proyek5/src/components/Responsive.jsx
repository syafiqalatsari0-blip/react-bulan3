import React from "react";
import styles from "./ResponsiveCard.module.css"; 

export default function ResponsiveCard({ title, content }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.content}>{content}</p>
    </div>
  );
}
