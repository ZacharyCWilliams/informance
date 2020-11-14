import React from "react"
import { Link } from "react-router-dom";
import styles from "./LeftNavLink.module.css";

const LeftNavLink = ({ title, path }) => {
  return (
    <Link to={path} className={styles.link}>
      {title}
    </Link>
  )
}

export default LeftNavLink