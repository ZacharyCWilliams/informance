import React from "react";
import styles from "./Button.module.css";

const Button = ({ icon, onClick }) => {
  return <button className={styles.button} onClick={onClick}>{icon}</button>
}

export default Button