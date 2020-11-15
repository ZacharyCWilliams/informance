import React from "react";
import Button from "../../atoms/Center-Nav-Button/Button"
import styles from "./LogoPanel.module.css";
// icons
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

// placeholder logo
import AcUnitIcon from '@material-ui/icons/AcUnit';

const LogoPanel = () => {
  return (
    <div className={styles.container}>
      <Button icon={<AcUnitIcon fontSize="large" />} onClick={() => console.log("Logo")}/>
      <Button icon={<ExploreOutlinedIcon fontSize="large" />} onClick={() => console.log("Political Compass")}/>
      <Button icon={<FavoriteBorderOutlinedIcon fontSize={"large"} />} onClick={() => console.log("Dating App")}/>
    </div>
  )
}

export default LogoPanel