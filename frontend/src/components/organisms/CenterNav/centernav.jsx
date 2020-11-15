import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from "./centernav.module.css";
import { Link } from "react-router-dom"
import SettingsIcon from '@material-ui/icons/Settings';
import Placeholder from "../../../assets/placeholder-nav.png";
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchBar from "../../atoms/TopSearchBar/TopSearchBar";
// import ForumIcon from "@material-ui/icons/Forum";
// import MessageIcon from '@material-ui/icons/Message';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
// import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
// import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
// import AddIcon from '@material-ui/icons/Add';
// import LocalPostOfficeOutlinedIcon from '@material-ui/icons/LocalPostOfficeOutlined';
// import Button from "../../atoms/Center-Nav-Button/Button";
import ButtonPanel from "../../molecules/CenterNav-BtnPanel/ButtonPanel";
import TopSearchBar from "../../atoms/TopSearchBar/TopSearchBar";
import LogoPanel from "../../molecules/LogoPanel/LogoPanel";

export default function CenterNav( { title } ) {

  return (
    <nav className={styles.container}>
      {/* <div>
        <p className="center-nav-logo">Informance</p>
      </div> */}
      <div className="left-center-nav-section">
        <LogoPanel />
      </div>
      {/* <Link className="center-nav-settings" to="/settings">
        <SettingsIcon fontSize="large"/>
      </Link> */}
      <div className={styles.centerContainer}>
        <h1 className={styles.title}>{title}</h1>
        {/* Messages, Notifications, Settings, Add Channel */}
        <ButtonPanel />
      </div>
      <div className={styles.rightContainer}>
        <TopSearchBar />
      </div>
    </nav>
  )
}