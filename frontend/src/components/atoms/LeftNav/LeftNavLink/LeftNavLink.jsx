import React from "react"
import { Link } from "react-router-dom";
import styles from "./LeftNavLink.module.css";


const LeftNavLink = ({ icon, title, path }) => {
  return (
    <Link to={path} className={styles.link}>
      <div className={styles.icon}>
        {icon}
      </div>
      <h2 className={styles.title}>
        {title}
      </h2>
    </Link>
  )
}

export default LeftNavLink