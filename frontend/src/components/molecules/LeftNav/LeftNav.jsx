import React, { useState } from 'react'
import LeftNavLink from "../../atoms/LeftNav/LeftNavLink/LeftNavLink";
import LeftNav2 from "../LeftNav2/LeftNav2";
import styles from "./LeftNav.module.css";

const LeftNav = ({ links }) => {
  const [seeMore, setSeeMore] = useState(false);
  const [buttonText, setButtonText] = useState("See More")

  const panel = links.map((link) => {
    return <LeftNavLink icon={link.icon} title={link.title} path={link.path} />
  })  

  const toggleNavbar = () => {
    if (seeMore) {
      setSeeMore(false);
      setButtonText("See More")
    }
    if (!seeMore) {
      setSeeMore(true);
      setButtonText("See Less");
    }
  }

    return (
      <div className={styles.link}>
        {panel}
        <button onClick={() => toggleNavbar()}>{buttonText}</button>
        {seeMore && <LeftNav2 links={links} />}
      </div>
    )
}

export default LeftNav
