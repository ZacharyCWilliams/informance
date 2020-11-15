import React from 'react';
import styles from "./DropdownLink.module.css";

const DropdownLink = ({ title, tagline, icon, onClick }) => {

  return (
    <button onClick={onClick} className={styles.container}>
      <div className={styles.icon}>
        {icon}
      </div>
      <div className={styles.flexbox}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.tagline}>{tagline}</p>
      </div>
    </button>
  )
}

export default DropdownLink