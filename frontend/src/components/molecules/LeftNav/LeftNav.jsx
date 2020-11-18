import React, { useState } from 'react'
import LeftNavLink from "../../atoms/LeftNav/LeftNavLink/LeftNavLink";
import LeftNav2 from "../LeftNav2/LeftNav2";
import styles from "./LeftNav.module.css";

// Second Nav Icons
import PaymentTwoToneIcon from '@material-ui/icons/PaymentTwoTone';
import WorkTwoToneIcon from '@material-ui/icons/WorkTwoTone';
import MonetizationOnTwoToneIcon from '@material-ui/icons/MonetizationOnTwoTone';
import AccountTreeTwoToneIcon from '@material-ui/icons/AccountTreeTwoTone';
import BubbleChartTwoToneIcon from '@material-ui/icons/BubbleChartTwoTone';
import LocalHospitalTwoToneIcon from '@material-ui/icons/LocalHospitalTwoTone';
import ImportContactsTwoToneIcon from '@material-ui/icons/ImportContactsTwoTone';

//button icons
import ExpandMoreTwoToneIcon from '@material-ui/icons/ExpandMoreTwoTone';
import ExpandLessTwoToneIcon from '@material-ui/icons/ExpandLessTwoTone';

const LeftNav = ({ links }) => {
  const [seeMore, setSeeMore] = useState(false);
  const [buttonText, setButtonText] = useState("See More")

  const panel = links.map((link) => {
    return <LeftNavLink icon={link.icon} title={link.title} path={link.path} />
  })  

   const links2 = [
    { icon: <PaymentTwoToneIcon fontSize="large" />, title: "Payments", path: "/payments"},
    { icon: <WorkTwoToneIcon fontSize="large" />, title: "Politicians", path: "/politicians"},
    { icon: <ImportContactsTwoToneIcon fontSize="large" /> , title: "Journalists", path: "/journalists"},
    { icon: <MonetizationOnTwoToneIcon fontSize="large" />, title: "Nonprofits", path: "/nonprofits"},
    { icon: <AccountTreeTwoToneIcon fontSize="large" />, title: "Donations & Money", path: "/money"},
    { icon: <BubbleChartTwoToneIcon fontSize="large" />, title: "Open Source", path: "/brainstorm"},
    { icon: <LocalHospitalTwoToneIcon fontSize="large" />, title: "Account Standing", path: "/standing"}
  ]

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
        <button className={styles.seeMore} onClick={() => toggleNavbar()}>
          <div className={styles.btnIcon}>
            { seeMore ? <ExpandLessTwoToneIcon fontSize="large" /> : <ExpandMoreTwoToneIcon fontSize="large" />}
          </div>
          {buttonText}
        </button>
        {seeMore && <LeftNav2 links={links2} />}
      </div>
    )
}

export default LeftNav
