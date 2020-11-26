import React, { useState } from 'react'
import LeftNavLink from "../../atoms/LeftNav/LeftNavLink/LeftNavLink";
import styles from "./LeftNac2.module.css";

const LeftNav2 = ({ links }) => {
   const panel2 = links.map((link) => {
    return <LeftNavLink icon={link.icon} title={link.title} path={link.path} key={link.title} />
  })
  return (
    <div>
        {panel2}
    </div>
  );
}

export default LeftNav2;

