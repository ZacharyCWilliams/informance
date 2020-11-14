import React from 'react'
import LeftNavLink from "../../atoms/LeftNav/LeftNavLink/LeftNavLink";
import styles from "./LeftNav.module.css";

const LeftNav = ({ links }) => {

  const panel = links.map((link) => {
    return <LeftNavLink title={link.title} path={link.path} />
  })

    return (
      <div className={styles.link}>
        {panel}
      </div>
    )
}

export default LeftNav
